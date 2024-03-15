

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div>
                        <h1 className="text-3xl font-bold ">CookCorner</h1>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">Home</a>
                    <a className="btn btn-ghost text-xl">Recipies</a>
                    <a className="btn btn-ghost text-xl">About </a>
                    <a className="btn btn-ghost text-xl"> Search</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">

                    </button>
                </div>
            </div>
        </div>
    );
};




export default Navbar;
