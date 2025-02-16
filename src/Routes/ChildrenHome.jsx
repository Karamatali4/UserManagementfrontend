import img from "../assets/user.jpg";
function ChildrenHome() {
  return (
    <>
    <div className="w-[100%] container flex justify-around items-center h-[40rem]">
        <div className="box ">
            <h2 className="font-bold text-2xl mb-6">User Management System </h2>
<p className="text-justify w-[25rem] font-bold text-gray-700">
Welcome to the User Management System, an efficient tool designed to manage user profiles seamlessly. This system allows users to create, view, edit, and delete user profiles. Each user profile contains essential information such as the user's name, age, and email address. The intuitive interface ensures that all actions, from creating new users to updating existing ones, can be performed effortlessly. </p>
        </div>
        <div className="box ">
            <img src={img} className="w-[40rem] rounded-2xl" alt="img" />
        </div>
    </div>
    </>
  )
}

export default ChildrenHome
