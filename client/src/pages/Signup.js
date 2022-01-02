import { Link } from 'react-router-dom';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Signup = () => {
  const handleSubmit = () => {
    return null;
  };
  return (
    <div className="lg:w-1/2 lg:mx-auto mx-2 my-auto border-2 py-6 px-4 ">
      <>
        <h1 className="text-xl lg:text-2xl text-left">
          Welcome to StockManager
        </h1>
        <p className="text-gray-500 text-left">Manage your stocks on the go</p>

        <div className="md:flex-1 flex-auto flex-wrap mt-6">
          <form onSubmit={handleSubmit} method="POST" className="p-2 w-auto">
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
              <div className="w-full mt-4">
                <label
                  htmlFor="firstname"
                  className="px-5 pt-1.5 rounded-sm text-sm tracking-tighter"
                >
                  Firstname
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="name"
                  className="text-white py-3 px-5 w-full border-solid border-2 rounded-sm outline-none appearance-none focus:ring-1 focus:border-blue-700"
                  required
                />
              </div>
              <div className="w-full mt-4">
                <label
                  htmlFor="lastname"
                  className="px-5 py-1.5 rounded-sm text-sm tracking-tighter"
                >
                  Lastname
                </label>
                <input
                  id="lastname"
                  type="text"
                  name="name"
                  className="text-white py-3 px-5 w-full border-solid border-2 rounded-sm outline-none appearance-none focus:ring-1 focus:border-blue-700"
                  required
                />
              </div>
            </div>
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
            <p className="m-2">
              <input type="checkbox" />{' '}
              <span>
                By clicking this link you agree to our terms of services
              </span>
            </p>
            <button
              type="submit"
              className="text-white p-4 font-bold tracking-tighter bg-blue-700 w-full mt-6 outline-none appearance-none border-none focus:ring-4 focus:ring-gray-400"
            >
              Sign up
            </button>
            <>
              <p className="text-right text-sm m-2 p-2">
                Don't have an account?{' '}
                <Link to="/login" className="underline text-blue-700">
                  Log in
                </Link>
              </p>
            </>
          </form>
        </div>
      </>
    </div>
  );
};

export default Signup;
