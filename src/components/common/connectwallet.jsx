import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function CustomConnectButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
          >
            {(() => {
              if (!connected) {
                return (
                  <div className="slider-button wow fadeInUp" style={{ margin: "0px", width: "100%" }}>
                    <a className="slider-button wow fadeInUp" style={{ padding: "12px 24px", margin: "0px", width: "100%" }} onClick={openConnectModal} type='button'>
                      Connect Wallet
                    </a>
                  </div>
                );
              }

              return (
                <div className="slider-button wow fadeInUp"  style={{ margin: "0px", width: "100%" }}>
                  <a onClick={openAccountModal} type="button" style={{ padding: "12px 24px", margin: "0px", width: "100%" }}>
                  {account?.address.slice(0, 6)}...{account?.address.slice(-4)}
                  </a>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  )
}