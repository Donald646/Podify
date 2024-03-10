import React from "react";
import { useState } from "react";
import { postData } from "../../_utils/apiCalls";

export default function FileInput() {
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
