import React from "react";
import { useLoaderData } from "react-router-dom";

function SingleUser() {
  const users = useLoaderData();
  console.log("single user " ,users)
  if (!users) return <div>Loading...</div>;
  const dumimg = {
    avatar: "https://robohash.org/you.png?size=200x200",
  };
  return (
    <>
      <div className="container w-[50rem] h-[50%] flex bg-cyan-600 m-auto rounded-t-3xl shadow-gray-300">
        <div className=" text-lime-50 m-auto">
          <div className="flex flex-col items-center bg-white border border-gray-200  rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={dumimg.avatar}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {users.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {users.age}
                
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {users.email}
                
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleUser;
