import React, { useEffect } from "react";
import "./Profile.css";
import { doc, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase";

const Profile = () => {
  const [data, setData] = React.useState([]);
  const user = auth.currentUser;
  const getData = async () => {
    const docsSnap = await getDocs(`${user.displayName}`);
    docsSnap.forEach((doc) => {
      console.log(doc.id);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="container max-w-5xl">
      <h2 className="text-[40px] mt-6 font-bold text-gray-700">
        Your Transactions
      </h2>
      <ul class="responsive-table mt-7">
        <li class="table-header">
          <div class="col col-1">UID</div>
          <div class="col col-2">Name</div>
          <div class="col col-3">Amount</div>
          <div class="col col-3">Type</div>
          <div class="col col-4">Payment Status</div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">
            42235
          </div>
          <div class="col col-2" data-label="Customer Name">
            John Doe
          </div>
          <div class="col col-3" data-label="Amount">
            $350
          </div>
          <div class="col col-3" data-label="Type">
            Desposit
          </div>
          <div class="col col-4" data-label="Payment Status">
            Pending
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
