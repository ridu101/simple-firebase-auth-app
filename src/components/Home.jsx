const Home = () => {
    return (
        <div className="min-h-[calc(100vh-72px)] bg-slate-100 px-6">
            <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl items-center justify-center">
                
                <div className="text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Welcome
                    </p>

                    <h1 className="mb-4 text-5xl font-bold text-slate-900">
                        This is Home
                    </h1>

                    <p className="mx-auto max-w-lg text-lg text-slate-600">
                        Welcome to our simple Firebase authentication application.
                    </p>

                    <button className="mt-7 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg">
                        Get Started
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Home;