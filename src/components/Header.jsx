import { NavLink } from "react-router";

const Header = () => {
    return (
        <nav className="bg-slate-900 px-6 py-4 shadow-lg">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
                
                <h2 className="text-2xl font-bold text-white">
                    My Authentication  App
                </h2>

                <div className="flex items-center gap-3">
                    <NavLink
                        to="/"
                        className="rounded-lg px-4 py-2 font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/login"
                        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
                    >
                        Login
                    </NavLink>
                </div>

            </div>
        </nav>
    );
};

export default Header;