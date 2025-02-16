import axios from "axios";
import React from "react";

export const loader = async ({ params }) => {
  const res = await axios.get(`https://dummyjson.com/users`);
  return res.data;
};

function store() {
  return <></>;
}

export default store;
