"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import UserTable from "./user-table";

type Inputs = {
  fullName: string;
  email: string;
  salary: string;
};
interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    postData(data);
  };

  const postData = async (data: Inputs) => {
    reset({ fullName: "", email: "", salary: "" });
    let response = await axios.post("/api/user/create-user", {
      fullName: data.fullName,
      email: data.email,
      salary: data.salary,
    });
    alert("Data Inserted");
  };

  return (
    <>
      <div className="flex flex-row py-3 items-center">
        <h1 className="font-bold text-lg text-black"> Add User</h1>
        <div className="flex flex-col ml-2">
          <input
            {...register("fullName", { required: true })}
            placeholder="Enter Name"
            className="border p-2 border-r-2 mr-3"
          />
          {errors.fullName && (
            <span className="text-red">This is required</span>
          )}
        </div>
        <div className="flex flex-col">
          <input
            {...register("email", { required: true })}
            placeholder="Enter Email"
            className="border p-2 border-r-2 mr-3"
          />
          {errors.email && <span>This is required</span>}
        </div>
        <div className="flex flex-col">
          <input
            {...register("salary", { required: true })}
            placeholder="Enter Salary"
            className="border p-2 border-r-2 mr-3"
          />
          {errors.salary && <span>This is required</span>}
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="btn btn-square btn-wide"
        >
          Add New User{" "}
        </button>
      </div>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UserPage;
