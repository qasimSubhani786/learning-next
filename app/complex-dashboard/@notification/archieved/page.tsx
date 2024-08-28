import Link from "next/link";
import React from "react";

const UserNotifications = () => {
  return (
    <div className=" p-24 m-3 shadow-lg border flex items-center justify-center ">
      User Notifications
      <Link
        className="text-red-700 font-medium text-xl"
        href={"/complex-dashboard"}
      >
        {" < default > "}{" "}
      </Link>
    </div>
  );
};

export default UserNotifications;
