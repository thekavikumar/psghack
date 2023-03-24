import React, { useEffect } from "react";
import "./Profile.css";
import { collection, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { deleteDoc } from "firebase/firestore";

const Manage = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const user = auth.currentUser;
  const userName = user.displayName;
  const refUser = userName.split(" ").join("");
  const getData = async () => {
    const colRef = collection(db, `${refUser}`);
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach((doc) => {
      setData((prev) => [...prev, doc.data().form]);
    });
  };
  useEffect(() => {
    getData();
  }, [user]);

  const handleDelete = async (e) => {
    const docRef = doc(db, `${refUser}`, `${e}`);
    await deleteDoc(docRef)
      .then(() => {
        console.log("Entire Document has been deleted successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="container max-w-6xl">
      <h2 className="text-[40px] mt-6 font-bold text-gray-700">
        Your Transactions
      </h2>
      <ul class="responsive-table mt-7">
        <li class="table-header">
          <div class="col col-2">UID</div>
          <div class="col col-2">Name</div>
          <div class="col col-2">A/C NO</div>
          <div class="col col-3">Amount</div>
          <div class="col col-3">Type</div>
          <div class="col col-4">Payment Status</div>
        </li>
        {data.map((item) => {
          return (
            <li class="table-row">
              <div class="col col-2" data-label="Job Id">
                {item.uuid}
              </div>
              <div class="col col-2" data-label="Customer Name">
                <button
                  onClick={handleDelete}
                  className="border-2 border-gray-800 pt-2 pb-2 pr-3 pl-3 rounded hover:bg-black hover:text-white"
                >
                  Approve
                </button>
              </div>
              <div class="col col-2" data-label="Customer Name">
                {item.acno}
              </div>
              <div class="col col-3" data-label="Amount">
                {item.amount}
              </div>
              <div class="col col-3" data-label="Type">
                {item.typeTran}
              </div>
              <div class="col col-4" data-label="Payment Status">
                {item.status}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-center mx-auto mt-4">
        <button
          onClick={() => {
            signOut(auth);
            navigate("/");
          }}
          className="border-2 border-collapse border-gray-800 pt-2 pb-2 pr-3 pl-3 rounded hover:bg-gray-900 hover:text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Manage;
