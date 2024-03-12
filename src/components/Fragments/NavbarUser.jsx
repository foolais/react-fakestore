import { AiOutlineUser } from "react-icons/ai";
import TextIcon from "../Elements/TextIcon";
import { useNavigate } from "react-router-dom";

const NavbarUser = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("user");
  return (
    <div className="w-full p-4 min-h-20 max-h-20 border-b-2 border-slate-200 flex items-center gap-3 bg-ternary sticky top-0">
      {username ? (
        <>
          <div className="w-12 h-12 rounded-full bg-slate-200"></div>
          <div className="flex flex-col items-start">
            <span>{username}</span>
            <span className="font-light text-sm">{username}@mail.com</span>
          </div>
        </>
      ) : (
        <div className="w-full flex items-center ml-4">
          <TextIcon title="Log in" onClick={() => navigate("/login")}>
            <AiOutlineUser size={25} />
          </TextIcon>
        </div>
      )}
    </div>
  );
};

export default NavbarUser;
