import React from "react";

const DashboardLayout = ({
  children,
  user,
  revenue,
  notification,
  login,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{user}</div>
          <div> {revenue} </div>
        </div>
        <div className="flex flex-1">{notification}</div>
      </div>
    </div>
  ) : (
    login
  );
};

export default DashboardLayout;
