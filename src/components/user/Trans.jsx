import React, { useState } from "react";
import "./Trans.css";
import shortid from "shortid";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Trans = () => {
  const user = auth.currentUser;
  const userName = user.displayName;
  const refUser = userName.split(" ").join("");

  const navigate = useNavigate();
  const [form, setForm] = useState({
    uuid: shortid.generate(),
    type: "",
    name: "",
    acno: "",
    amount: "",
    typeTran: "",
    status: "Pending",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, `${refUser}`), {
        form,
      });
      console.log("Document written with ID: ", docRef.id);
      swal({
        title: "Good job!",
        text: "Your Request has been Submitted!",
        icon: "success",
      });
      navigate("/");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="max-w-7xl mx-auto mt-3">
      <div className="flex justify-center flex-col">
        <h1 className="font-bold text-[40px] text-gray-700 text-center ">
          Do Paperless Transaction
        </h1>
        <form className="mx-auto mt-10" onSubmit={handleSubmit}>
          <div className="border-2 border-black w-[800px] h-[450px] rounded-lg p-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <label htmlFor="uuid">Unique ID:</label>
                <input
                  class="input ml-6"
                  name="uuid"
                  value={form.uuid}
                  disabled
                  type="text"
                ></input>
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="type">Type of A/C:</label>
                <input
                  class="input ml-2"
                  name="type"
                  value={form.type}
                  placeholder="Enter type of A/C"
                  type="text"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="name">Name:</label>
                <input
                  class="input ml-14"
                  name="name"
                  value={form.name}
                  placeholder="Enter your name"
                  type="text"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="acno">Account No:</label>
                <input
                  class="input ml-3"
                  name="acno"
                  value={form.acno}
                  placeholder="Enter your Account No."
                  type="text"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="amount">Amount:</label>
                <input
                  class="input ml-10"
                  name="amount"
                  value={form.amount}
                  placeholder="Enter the amount here"
                  type="text"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="typeTran">Transaction Mode:</label>
                <input
                  class="input"
                  name="typeTran"
                  value={form.typeTran}
                  placeholder="Type of tranction here"
                  type="text"
                  onChange={handleChange}
                ></input>
              </div>

              <button className="border-2 w-fit pr-3 pl-3 pt-2 hover:bg-black hover:text-white pb-2 border-collapse rounded border-gray-800">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Trans;
