import React from "react";

function SearchBox(props) {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        placeholder="search"
        value={props.value}
        onChange={props.searchFunc}
      />
    </div>
  );
}
export default SearchBox;
