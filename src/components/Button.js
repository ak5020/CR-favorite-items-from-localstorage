import React from "react";

export default function Button({ onClick, buttonText }) {
  return (
    <div>
      <button
        type="button"
        className="button btn btn-primary"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
}
