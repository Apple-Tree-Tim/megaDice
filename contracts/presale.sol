// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

// Uniswap V2 Router Interface
interface IUniswapV2Router {
    function swapExactTokensForMATIC(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);
}

contract ARPlusToken is ERC20, Ownable, ReentrancyGuard, Pausable {
    using SafeMath for uint256;

    // Token properties
    uint256 public constant TOTAL_SUPPLY = 500_000_000_000 * 10**18; // Total supply
    uint256 public constant PRESALE_SUPPLY = 5_000_000_000 * 10**18; // 5 billion tokens for presale
    uint256 public constant RELEASE_2026 = 4_000_000_000 * 10**18; // 4 billion tokens for 2026
    uint256 public constant RELEASE_OTHER_YEARS = 9_000_000_000 * 10**18; // 9 billion tokens for other years

    // Amount of tokens allocated to developer accounts
    uint256 public constant DEV_TOKENS_PER_ACCOUNT = 400_000_000 * 10**18; // 400 million tokens for each developer account
    uint256 public constant DEV_TOKENS_UNLOCK_PER_YEAR = 100_000_000 * 10**18; // 100 million tokens will be unlocked every year

    // Amount of tokens allocated to other accounts
    uint256 public constant ARGE_TOKENS = 7_000_000_000 * 10**18; // 7 billion tokens for R&D account
    uint256 public constant PAZARLAMA_TOKENS = 2_000_000_000 * 10**18; // 2 billion tokens to the marketing account
    uint256 public constant AIRDROP_TOKENS = 2_000_000_000 * 10**18; // 2 billion tokens to airdrop account
    uint256 public constant STAKE_ODUL_TOKENS = 8_000_000_000 * 10**18; // 8 billion tokens to the staking reward account

    // Accounts
    address public constant SALE_ACCOUNT = 0x6794D2Ac1d6375bac41a03B7303146bF1E8EDbeb; // Sales account
    address public constant ARGE_ACCOUNT = 0x1234567890123456789012345678901234567890; // R&D account
    address public constant PAZARLAMA_ACCOUNT = 0x2345678901234567890123456789012345678901; // Marketing account
    address public constant AIRDROP_ACCOUNT = 0x3456789012345678901234567890123456789012; // Airdrop account
    address public constant STAKE_ODUL_ACCOUNT = 0x4567890123456789012345678901234567890123; // Stake reward account

    // Developer accounts
    address[5] public devAccounts = [
        0xD0B9875DC4a714DC4896fFaBa29c638865167E2b,
        0xD9176512E7f9900C268989494814F348C29de9fA,
        0xb7f3c0D3AAAD4c518F042CaC7D5bf38F30517BEb,
        0x4D33717cd779E09E755a0D97565BDC15fEE279b2,
        0x7970856F9A77401f86BECfD558DFd3E99228b8e4
    ];

    // Tax rates
    uint256 public constant BUY_TAX_RATE = 10; // %10
    uint256 public constant SELL_TAX_RATE = 10; // %10
    uint256 public constant TRANSFER_TAX_RATE = 1; // %1
    uint256 public constant HIGH_SELL_TAX_RATE = 30; // %30 (For sales of 1 million and above)

    // Tax-free accounts
    mapping(address => bool) public isTaxExempt;

    // Burning mechanism
    uint256 public constant BURN_AMOUNT_PER_YEAR = 38_000_000_000 * 10**18;
    uint256 public constant START_DATE = 1735689600; // 01.03.2025 (Date the contract is active)
    uint256 public lastBurnDate;

    // Token unlock mechanism
    uint256 public lastUnlockDate;

    // Tokens locked to developer accounts
    mapping(address => uint256) public devLockedTokens;

    // Staking mechanism
    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 duration;
    }
    mapping(address => Stake) public stakes;

    // Anti-bot protection
    mapping(address => uint256) public firstTransferTimestamp;
    uint256 public constant ANTI_BOT_DELAY = 300; // 300 seconds (5 minutes)

    // Token sale price
    uint256 public tokenPriceInMatic = 1 * 10**18; // 1 AR+ = 1 MATIC

    // DEX Router Adress (Polygon Quickswap)
    address public constant QUICKSWAP_ROUTER = 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff;

    // Events
    event TokensBurned(uint256 amount, uint256 totalSupply);
    event TokensStaked(address indexed user, uint256 amount, uint256 duration);
    event TokensUnstaked(address indexed user, uint256 amount, uint256 reward);
    event TokenPriceUpdated(uint256 newPrice);
    event LiquidityAdded(uint256 tokenAmount, uint256 maticAmount);
    event TaxCollected(uint256 buyTax, uint256 sellTax, uint256 transferTax);
    event TokensUnlocked(address indexed account, uint256 amount);
    event AirdropSent(address indexed recipient, uint256 amount);
    event WrongTokensRecovered(address indexed recipient, uint256 amount);

    constructor() ERC20("AR Plus", "AR+") Ownable(msg.sender) {
        // Mint total supply
        _mint(msg.sender, TOTAL_SUPPLY);

        // Sending 5 billion tokens for pre-sale
        super._transfer(msg.sender, SALE_ACCOUNT, PRESALE_SUPPLY);

        // Token distribution to developer accounts
        for (uint256 i = 0; i < devAccounts.length; i++) {
            // Send 100 million tokens to each developer
            super._transfer(msg.sender, devAccounts[i], DEV_TOKENS_UNLOCK_PER_YEAR);
            // Mark the remaining 300 million tokens as locked
            devLockedTokens[devAccounts[i]] = DEV_TOKENS_PER_ACCOUNT.sub(DEV_TOKENS_UNLOCK_PER_YEAR);
        }

        // Sending tokens to other accounts
        super._transfer(msg.sender, ARGE_ACCOUNT, ARGE_TOKENS); // R&D account
        super._transfer(msg.sender, PAZARLAMA_ACCOUNT, PAZARLAMA_TOKENS); // Marketing account
        super._transfer(msg.sender, AIRDROP_ACCOUNT, AIRDROP_TOKENS); // To Airdrop account
        super._transfer(msg.sender, STAKE_ODUL_ACCOUNT, STAKE_ODUL_TOKENS); // Stake reward account

        // Tax-free accounts
        isTaxExempt[SALE_ACCOUNT] = true;
        isTaxExempt[ARGE_ACCOUNT] = true;
        isTaxExempt[PAZARLAMA_ACCOUNT] = true;
        isTaxExempt[AIRDROP_ACCOUNT] = true;
        isTaxExempt[STAKE_ODUL_ACCOUNT] = true;
        for (uint256 i = 0; i < devAccounts.length; i++) {
            isTaxExempt[devAccounts[i]] = true;
        }

        // Set start date
        lastBurnDate = START_DATE;
        lastUnlockDate = START_DATE;
    }

    // Customize the transfer function
    function transfer(address recipient, uint256 amount) public override returns (bool) {
        _transferWithTax(_msgSender(), recipient, amount);
        return true;
    }

    // Customize the TransferFrom function
    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        _transferWithTax(sender, recipient, amount);
        _approve(sender, _msgSender(), allowance(sender, _msgSender()).sub(amount));
        return true;
    }

    // Tax mechanism
    function _transferWithTax(address sender, address recipient, uint256 amount) internal {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");

        // Anti-bot protection
        if (firstTransferTimestamp[sender] == 0) {
            firstTransferTimestamp[sender] = block.timestamp;
        }
        require(block.timestamp >= firstTransferTimestamp[sender] + ANTI_BOT_DELAY, "Anti-bot delay not passed");

        // Taxes are not applied to tax-exempt accounts
        if (isTaxExempt[sender] || isTaxExempt[recipient]) {
            super._transfer(sender, recipient, amount);
            return;
        }

        uint256 taxRate = 0;

        // Tax control for sales transactions
        if (recipient == address(this) || recipient == QUICKSWAP_ROUTER) {
            if (amount >= 1_000_000 * 10**18) {
                taxRate = HIGH_SELL_TAX_RATE; // 30% tax on sales of 1 million and above
            } else {
                taxRate = SELL_TAX_RATE; // 10% tax on normal sales
            }
        } else {
            taxRate = TRANSFER_TAX_RATE; // 1% tax on transfers
        }

        uint256 taxAmount = amount.mul(taxRate).div(100);
        uint256 netAmount = amount.sub(taxAmount);

        if (taxAmount > 0) {
            super._transfer(sender, address(this), taxAmount); // Tax is collected in the contract account
            emit TaxCollected(taxRate, taxAmount, block.timestamp);
        }
        super._transfer(sender, recipient, netAmount);
    }

    // Token unlock mechanism
    function unlockTokens() public onlyOwner {
        require(block.timestamp >= lastUnlockDate + 365 days, "Tokens can only be unlocked once per year");

        // 4 billion tokens unlocked for 2026
        if (block.timestamp >= START_DATE + 365 days) {
            super._transfer(address(this), SALE_ACCOUNT, RELEASE_2026);
        }

        // Unlock 9 billion tokens for other years
        if (block.timestamp >= START_DATE + 730 days) {
            super._transfer(address(this), SALE_ACCOUNT, RELEASE_OTHER_YEARS);
        }

        // Unlocking tokens locked to developer accounts
        for (uint256 i = 0; i < devAccounts.length; i++) {
            if (devLockedTokens[devAccounts[i]] > 0) {
                super._transfer(address(this), devAccounts[i], DEV_TOKENS_UNLOCK_PER_YEAR);
                devLockedTokens[devAccounts[i]] = devLockedTokens[devAccounts[i]].sub(DEV_TOKENS_UNLOCK_PER_YEAR);
                emit TokensUnlocked(devAccounts[i], DEV_TOKENS_UNLOCK_PER_YEAR);
            }
        }

        lastUnlockDate = block.timestamp;
    }

    // Burning mechanism
    function burnTokens() public onlyOwner {
        require(block.timestamp >= lastBurnDate + 365 days, "Burn can only be done once per year");

        _burn(SALE_ACCOUNT, BURN_AMOUNT_PER_YEAR);
        lastBurnDate = block.timestamp;
        emit TokensBurned(BURN_AMOUNT_PER_YEAR, totalSupply());
    }

    // Staking mechanism
    function stakeTokens(uint256 amount, uint256 duration) public nonReentrant whenNotPaused {
        require(amount >= 500 * 10**18, "Minimum stake amount is 500 tokens");
        require(duration == 180 days || duration == 360 days || duration == 720 days, "Invalid duration");

        _transfer(msg.sender, address(this), amount);
        stakes[msg.sender] = Stake(amount, block.timestamp, duration);

        emit TokensStaked(msg.sender, amount, duration);
    }

    function unstakeTokens() public nonReentrant whenNotPaused {
        Stake memory userStake = stakes[msg.sender];
        require(userStake.amount > 0, "No tokens staked");
        require(block.timestamp >= userStake.startTime + userStake.duration, "Stake duration not reached");

        uint256 reward = calculateReward(userStake.amount, userStake.duration);
        _transfer(address(this), msg.sender, userStake.amount.add(reward));

        delete stakes[msg.sender];

        emit TokensUnstaked(msg.sender, userStake.amount, reward);
    }

    function calculateReward(uint256 amount, uint256 duration) internal pure returns (uint256) {
        if (duration == 180 days) {
            return amount.mul(30).div(100); // 30% reward
        } else if (duration == 360 days) {
            return amount.mul(200).div(100); // %200 reward
        } else if (duration == 720 days) {
            return amount.mul(500).div(100); // %500 reward
        }
        return 0;
    }

    // Update token sale price
    function updateTokenPrice(uint256 newPrice) public onlyOwner {
        require(newPrice > 0, "Price must be greater than 0");
        tokenPriceInMatic = newPrice;
        emit TokenPriceUpdated(newPrice);
    }

    // Token purchase function (in exchange for MATIC)
    function buyTokens() public payable nonReentrant whenNotPaused {
        require(msg.value > 0, "You must send some MATIC to buy tokens");
        uint256 tokensToBuy = msg.value.mul(10**18).div(tokenPriceInMatic);
        require(tokensToBuy <= balanceOf(SALE_ACCOUNT), "Insufficient tokens for sale");

        _transfer(SALE_ACCOUNT, msg.sender, tokensToBuy);

        // Airdrop campaign
        if (block.timestamp >= 1738713600 && block.timestamp <= 1745971200) { // 23.02.2025 - 30.04.2025
            uint256 airdropRate = tokensToBuy >= 500_000 * 10**18 ? 20 : 10; // 500.000 üstü alımlarda %20, altında %10
            uint256 airdropAmount = tokensToBuy.mul(airdropRate).div(100);
            _transfer(AIRDROP_ACCOUNT, msg.sender, airdropAmount);
            emit AirdropSent(msg.sender, airdropAmount);
        }
    }

    // Liquidity adding function
    function addLiquidity(uint256 tokenAmount) public payable onlyOwner {
        require(msg.value > 0, "You must send some MATIC to add liquidity");
        require(tokenAmount > 0, "Token amount must be greater than 0");
        require(tokenAmount <= balanceOf(msg.sender), "Insufficient token balance");

        _transfer(msg.sender, address(this), tokenAmount);
        emit LiquidityAdded(tokenAmount, msg.value);
    }

    // Swap function (for MATIC)
    function swapTokensForMatic(uint256 tokenAmount) public nonReentrant whenNotPaused {
        require(tokenAmount > 0, "Token amount must be greater than 0");
        require(allowance(msg.sender, address(this)) >= tokenAmount, "Insufficient allowance");

        _transfer(msg.sender, address(this), tokenAmount);
        _approve(address(this), QUICKSWAP_ROUTER, tokenAmount);

        address[] memory path = new address[](2);
        path[0] = address(this);
        path[1] = 0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270; // WMATIC address on Polygon

        IUniswapV2Router(QUICKSWAP_ROUTER).swapExactTokensForMATIC(
            tokenAmount,
            0,
            path,
            msg.sender,
            block.timestamp
        );
    }

    // Recovering incorrectly sent tokens
    function recoverWrongTokens(address recipient, uint256 amount) public onlyOwner {
        require(amount <= balanceOf(0xaaf26c2Db4c6907143B4C2ea29ffda1b55c7a30c), "Insufficient wrong tokens balance");
        _transfer(0xaaf26c2Db4c6907143B4C2ea29ffda1b55c7a30c, recipient, amount);
        emit WrongTokensRecovered(recipient, amount);
    }

    // Function to pause the contract
    function pause() public onlyOwner {
        _pause();
    }

    // Function to continue the contract
    function unpause() public onlyOwner {
        _unpause();
    }
}
