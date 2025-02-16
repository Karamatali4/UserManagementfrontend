import axios from "axios";
import { Form, redirect, useFetcher, useLoaderData, useNavigate } from "react-router-dom";

// Action function to handle form submission & update user
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);

  // API request directly inside action
  await axios.put(`${import.meta.env.VITE_URL_API}/users/${params.id}`, userData, {
    headers: { "Content-Type": "application/json" },
  });

  return redirect(`/users`);
};

function UpdateUser() {
  const user = useLoaderData();
  const navigate = useNavigate();
  const fetcher = useFetcher();

  return (
    <div className="container w-[50rem] h-[23rem] bg-cyan-600 m-auto rounded-t-3xl shadow-gray-300 p-5 text-lime-50">
      <h1 className="text-2xl font-bold">Update User: {user.name}</h1>

      <fetcher.Form method="post"  className="flex flex-col justify-center items-center gap-6">
        <div className="box">
          <label className="text-2xl font-bold">Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="ms-2 outline-none text-black rounded-md py-2 px-4"
            name="name"
            defaultValue={user?.name}
            required
          />
        </div>

        <div className="box">
          <label className="text-2xl font-bold">Age:</label>
          <input
            type="number"
            placeholder="Enter Age"
            className="ms-2 outline-none text-black rounded-md py-2 px-4"
            name="age"
            defaultValue={user?.age}
            required
          />
        </div>

        <div className="box">
          <label className="text-2xl font-bold">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="ms-2 outline-none text-black rounded-md py-2 px-4"
            name="email"
            defaultValue={user?.email}
            required
          />
        </div>

        <div className="box flex gap-5">
          <button type="submit" className="bg-cyan-700 py-2 px-8 rounded-md hover:bg-cyan-800 font-bold">
            Save
          </button>
          <button type="button" onClick={() => {
            navigate(-1);
          }} className="bg-gray-500 py-2 px-8 rounded-md hover:bg-gray-700 font-bold">

            Cancel
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
}

export default UpdateUser;
