import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";
import UseSWR from "swr";
import { GetServerSideProps } from "next";

interface User {
  _id: string;
  fullName: string;
  email: string;
  salary: string;
}
interface Props {
  sortOrder: string;
}

interface PageProps {
  initialData: User;
}

const ProductFetcher = async ({ url }: { url: string }) => {
  const query = await fetch(`${url}`);
  const response = await query.json();
  return response;
};

const getProducts = () => {
  const { data, error, isLoading } = UseSWR(
    ["/api/user/get-all-users"],
    ([url]) => ProductFetcher({ url })
  );

  return { data, error, isLoading };
};

const UserTable = ({ sortOrder }: Props) => {
  const { data, isLoading, error } = getProducts();
  let userList: Array<User> = data?.content;
  const sortedList = sort(userList).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.fullName
  );
  return (
    <table className="table table-xs">
      <thead>
        <tr>
          <th>Id</th>
          <th>
            <Link href={"/users?sortOrder=name"}>Name</Link>
          </th>
          <th>
            <Link href={"/users?sortOrder=email"}>Email</Link>
          </th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {sortedList?.map((user) => (
          <tr key={user._id}>
            <td>{user._id} </td>
            <td>{user.fullName} </td>
            <td>{user.email} </td>
            <td>{user.salary} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
