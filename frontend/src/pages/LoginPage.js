const LoginPage = () => (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Login Page</h1>
      <form className="flex flex-col mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="mb-4 px-4 py-2 border border-gray-300"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="mb-4 px-4 py-2 border border-gray-300"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
  
  export default LoginPage;
  