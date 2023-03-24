import React from "react";
import "./Trans.css";

const Trans = () => {
  return (
    <div className="max-w-7xl mx-auto mt-3">
      <div className="flex justify-center flex-col">
        <h1 className="font-bold text-[40px] text-gray-700 text-center ">
          Do Paperless Transaction
        </h1>
        <form className="mx-auto mt-10">
          <div className="border-2 border-black w-[800px] h-[450px] rounded-lg p-10">
            <div className="flex items-center gap-4">
              <label htmlFor="name">Name</label>
              <input
                class="input"
                name="name"
                placeholder="Enter your name"
                type="text"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Trans;
