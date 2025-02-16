import axios from "axios";
import { useEffect, useState } from "react";
import {
  Form,
  redirect,
  useActionData,
  useFetcher,
  useLoaderData,
  useSubmit,
} from "react-router-dom";

// Loader function to fetch users
export const loader = async () => {
  const res = await axios.get(`${import.meta.env.VITE_URL_API}/users`);
  return res.data;
};

// Action function creating user
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);

  // API request directly inside action
  await axios.put(`${import.meta.env.VITE_URL_API}/users/${params.id}`, userData, {
    headers: { "Content-Type": "application/json" },
  });

  return redirect(`/users`);
};

function UserCreate() {
  const loaderData = useLoaderData();
  const submit = useSubmit();
  const [startData, setStartData] = useState({});

  const actionData = useActionData();
  const [actionOriginated, setActionOriginated] = useState("");
  const fetcher = useFetcher();
  // Handle data coming from loader
  useEffect(() => {
    if (loaderData.status === 200) {
      setStartData(loaderData.data);
    }
  }, [loaderData]);

  return (
    <>
      <div className="container w-[50rem] h-[23rem] bg-cyan-600 m-auto rounded-t-3xl shadow-gray-300">
        <div className="p-5 text-lime-50 ">
          <h1 className="text-2xl font-bold"> {loaderData.name}</h1>

          <fetcher.Form
            method="post"
            className="flex flex-col justify-center items-center gap-10"
          >
            <div className="box">
              <label htmlFor="" className="text-2xl font-bold">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="ms-2 outline-none text-black rounded-md py-2 px-4"
                name="name"
                value={loaderData.name}
                onChange={(e) => ""}
              />
            </div>
            <div className="box">
              <label htmlFor="" className="text-2xl font-bold">
                Age:
              </label>
              <input
                type="text"
                placeholder="Enter Age "
                value={loaderData.age}
                className="ms-2 outline-none text-black rounded-md py-2 px-4"
                name="age"
              />
            </div>
            <div className="box">
              <label htmlFor="" className="text-2xl font-bold">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                value={loaderData.email}
                className="ms-2 outline-none text-black rounded-md py-2 px-4"
                name="email"
              />
            </div>
            <div className="box">
              <button
                type="submit"
                className="bg-cyan-700 py-2 px-8 rounded-md hover:bg-cyan-800 font-bold"
              >
                Submit
              </button>
            </div>
          </fetcher.Form>

          <p>{actionOriginated}</p>
        </div>
      </div>
    </>
  );
}

export default UserCreate;
