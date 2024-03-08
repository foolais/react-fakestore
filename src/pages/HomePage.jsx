import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="w-full min-h-screen grid justify-items-center content-center bg-primary">
      <h1>HomePage</h1>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default HomePage;
