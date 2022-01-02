import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = () => {
    return null;
  };
  return (
    <div>
      <div className="lg:w-1/2 lg:mx-auto mx-2 my-auto border-2 py-6 px-4 ">
        <>
          <h1 className="text-xl lg:text-2xl text-left">Welcome back!</h1>
          <p className="text-gray-500 text-left">
            Manage your stocks on the go
          </p>

          <div className="md:flex-1 flex-auto flex-wrap mt-6">
            <form onSubmit={handleSubmit} method="POST" className="p-2 w-auto">
              <div className="w-full mt-4">
                <label
                  htmlFor="email"
                  className="px-5 py-1.5 text-sm tracking-tighter"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="text-white py-3 px-5 w-full border-solid border-2 rounded-sm rounded-sm outline-none appearance-none focus:ring-1 focus:border-blue-700"
                  required
                />
              </div>
              <div className="w-full mt-4">
                <label
                  htmlFor="password"
                  className="px-5 py-1.5 text-sm tracking-tighter"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="text-white py-3 px-5 w-full border-solid border-2 rounded-sm rounded-sm outline-none appearance-none focus:ring-1 focus:border-blue-700"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white p-4 font-bold tracking-tighter bg-blue-700 w-full mt-6 outline-none appearance-none border-none focus:ring-4 focus:ring-gray-400"
              >
                Log in
              </button>
              <>
                <p className="text-right text-sm m-2 p-2">
                  Already have an account?{' '}
                  <Link to="/signup" className="underline text-blue-700">
                    Sign up
                  </Link>
                </p>
              </>
            </form>
          </div>
        </>
      </div>
    </div>
  );
};

export default Login;
