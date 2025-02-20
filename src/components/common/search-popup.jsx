import { useState } from "react";

const SearchPopup = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-popup">
      <button className="close-search style-two"><i className="fas fa-times"></i></button>
      <button className="close-search"><i className="fas fa-arrow-up"></i></button>
      <form method="post" action="#">
        <div className="form-group">
          <input
            type="search"
            name="search-field"
            value={searchValue}
            placeholder="Search Here"
            required=""
            onChange={handleChange}
          />
          <button type="submit"><i className="fas fa-search"></i></button>
        </div>
      </form>
    </div>
  );
}

export default SearchPopup;