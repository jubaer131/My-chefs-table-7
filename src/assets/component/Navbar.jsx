import { FaRegUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
    return (
        <div className="mt-5">
            <div className="navbar  ">
                <div className="navbar-start">
                    <div>
                        <h1 className="text-3xl font-bold max-sm:text-2xl ">CookCorner</h1>
                    </div>
                </div>
                <div className="navbar-center max-sm:hidden">
                    <a className="btn btn-ghost text-xl">Home</a>
                    <a className="btn btn-ghost text-xl">Recipies</a>
                    <a className="btn btn-ghost text-xl">About </a>
                    <a className="btn btn-ghost text-xl"> Search</a>
                </div>
                <div className="navbar-end gap-8">

                    <label className="input input-bordered flex items-center gap-2 rounded-3xl h-10 max-sm:w-28 ">
                        <BsSearch></BsSearch>
                        <input type="text" className="grow" placeholder="Search" />
                    </label>


                    <button className="btn btn-ghost btn-circle bg-green-400 ">
                        <FaRegUserCircle className="text-2xl max-sm:text-xl"></FaRegUserCircle>
                    </button>
                </div>
            </div>
        </div>
    );
};




export default Navbar;
