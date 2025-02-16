import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Form, NavLink, useLoaderData, useNavigation } from "react-router-dom";

// Loader function to fetch users
export const loader = async () => {
  const res = await axios.get(`${import.meta.env.VITE_URL_API}/users`);
  return res.data;
};

// Action function creating user
export const action = async ({ request }) => {
  const formData = await request.formData();
  const newUser = Object.fromEntries(formData);
  const res = await axios.post(`${import.meta.env.VITE_URL_API}/users`, newUser);
  return res.data;
};


const UserList = () => {
  const users = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h1 className="font-bold text-2xl text-yellow-300">Create Users</h1>
      <Form method="post" >
        <input
          type="text"
          name="name"
          className="py-1 rounded-s-sm placeholder:ps-2 ps-2 w-44 outline-none"
          placeholder="Enter Name"
          required
        />
        <button
          className="px-2 py-1 bg-lime-200 rounded-e-lg hover:bg-lime-300"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add User"}
        </button>
      </Form>
      <ul className="ps-2 pt-2 h-[37.3rem] scroll-smooth overflow-y-auto no-scrollbar">
        {users.map((user) => (
          <li
            className="font-bold text-lg text-yellow-300 flex justify-between"
            key={user._id}
          >
            <NavLink
              to={`/usercreate/${user._id}`}
              className={({ isActive }) => (isActive ? "text-yellow-100 font-bold" : "")}
            >
              {user.name}
            </NavLink>
            <Form method="post" action={`/users/${user._id}/destroy`}>
              <button
                type="submit"
                className="text-red-100 hover:text-red-500 text-xl font-bold"
                onClick={(event) => {
                  if (!confirm("Please confirm you want to delete this record.")) {
                    event.preventDefault();
                  }
                }}
              >
                <MdDelete />
              </button>
            </Form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
