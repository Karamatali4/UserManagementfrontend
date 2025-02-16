import axios from "axios";
import {  redirect } from "react-router-dom";

export async function action({ params }) {
  await axios.delete(`${import.meta.env.VITE_URL_API}/users/${params.id}`);
  return redirect('/users');
}

function DeleteUser() {

  return (
    <>
    
    </>
  )
}

export default DeleteUser