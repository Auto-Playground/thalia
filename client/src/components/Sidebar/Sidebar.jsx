import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { TbFileReport } from "react-icons/tb";
function Sidebar() {
  return (
    <>
      <div className="w-72 h-screen shadow-lg rounded-lg bg-gray-900 fixed">
        <div className="flex justify-start items-start flex-col mx-3 my-3">
          <button className="flex items-center px-4 py-2 rounded-md w-full mt-8">
            <MdDashboard className="text-primary" />
            <Link className="ml-4 font-bold text-gray-500" to={"/admin"}>
              Dash Board
            </Link>
          </button>
          <button className="flex items-center px-4 py-2 rounded-md w-full mt-8">
            <FaUsers className="text-primary" />
            <Link
              className="ml-4 font-bold text-gray-500"
              to={"/admin/managment"}
            >
              User Managment
            </Link>
          </button>
          <button className="flex items-center px-4 py-2 rounded-md w-full mt-8">
            <TbFileReport className="text-primary" />
            <Link className="ml-4 font-bold text-gray-500" to={"/admin/rights"}>
              Rights Management
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;