import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { TbFileReport } from "react-icons/tb";
import { IoBody } from "react-icons/io5";
import { FaBrain } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
function Sidebar() {
  return (
    <>
      <div className="w-72 h-screen shadow-lg rounded-lg bg-gray-900 fixed">
        <div className="flex justify-start items-start flex-col mx-3 my-3">
          <Link className="ml-4 font-bold text-gray-500" to={"/admin"}>
            <button className="flex items-center px-4 py-2 rounded-md w-full mt-8 hover:bg-gray-800">
              <MdDashboard className="text-primary" />
              Dash Board
            </button>
          </Link>
          <Link
            className="ml-4 font-bold text-gray-500"
            to={"/admin/managment"}
          >
            <button className="flex items-center px-4 py-2 rounded-md w-full mt-8 hover:bg-gray-800">
              <FaUsers className="text-primary" />
              User Managment
            </button>
          </Link>
          <Link className="ml-4 font-bold text-gray-500" to={"/admin/rights"}>
            <button className="flex items-center px-4 py-2 rounded-md w-full mt-8 hover:bg-gray-800">
              <TbFileReport className="text-primary" />
              Rights Management
            </button>
          </Link>
          <Link className="ml-4 font-bold text-gray-500" to={"/admin/body"}>
            <button className="flex items-center px-4 py-2 rounded-md w-full mt-8 hover:bg-gray-800">
              <IoBody className="text-primary" />
              My Body
            </button>
          </Link>
          <Link className="ml-4 font-bold text-gray-500" to={"/admin/mind"}>
            <button className="flex items-center px-4 py-2 rounded-md w-full mt-8 hover:bg-gray-800">
              <FaBrain className="text-primary" />
              My Mind
            </button>
          </Link>
          <Link className="ml-4 font-bold text-gray-500" to={"/admin/community"}>
            <button className="flex items-center px-4 py-2 rounded-md w-full mt-8 hover:bg-gray-800">
              <MdGroups3 className="text-primary" />
              Community
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
