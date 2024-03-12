import { Link } from "react-router-dom";
import Title from "../Elements/Title";
import { AiOutlineLogout } from "react-icons/ai";
import TextIcon from "../Elements/TextIcon";
import { useNavigate } from "react-router-dom";

const Sidenav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    const username = localStorage.getItem("user");
    if (username) {
      localStorage.removeItem("user");
    }
  };
  return (
    <div className="w-[15%] h-screen fixed bg-ternary p-4 border-r-2 border-slate-200 shadow-md">
      <Title classname="text-3xl mb-4" />
      <Link to={"/login"}>
        <span>Login</span>
      </Link>
      <div className="absolute bottom-14 left-10">
        <TextIcon title="Log out" onClick={handleLogout}>
          <AiOutlineLogout size={25} />
        </TextIcon>
      </div>
    </div>
  );
};

export default Sidenav;
