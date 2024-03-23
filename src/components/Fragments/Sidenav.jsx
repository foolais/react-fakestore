import { Link } from "react-router-dom";
import Title from "../Elements/Title";
import {
  AiOutlineLogout,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineQuestionCircle,
  AiOutlineStar,
} from "react-icons/ai";
import TextIcon from "../Elements/TextIcon";
import { useNavigate } from "react-router-dom";
import ListTextIcon from "../Elements/TextIcon/ListTextIcon";

const Sidenav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    const username = localStorage.getItem("user");
    if (username) {
      localStorage.removeItem("user");
    }
  };

  const sizeIcon = 22;

  const sidenavList = [
    {
      id: 1,
      title: "Homepage",
      icon: <AiOutlineHome size={sizeIcon} />,
    },
    {
      id: 2,
      title: "Cart",
      icon: <AiOutlineShoppingCart size={sizeIcon} />,
    },
    {
      id: 3,
      title: "Favorite",
      icon: <AiOutlineStar size={sizeIcon} />,
    },
    {
      id: 4,
      title: "Profile",
      icon: <AiOutlineUser size={sizeIcon} />,
    },
    {
      id: 5,
      title: "About",
      icon: <AiOutlineQuestionCircle size={sizeIcon} />,
    },
  ];

  return (
    <div className="w-[15%] h-screen fixed bg-ternary p-4 border-r-2 border-slate-200 shadow-md">
      <Title classname="text-3xl mb-4" />
      <ListTextIcon data={sidenavList} />
      <div className="absolute bottom-14">
        <TextIcon title="Log out" onClick={() => handleLogout()}>
          <AiOutlineLogout size={sizeIcon} />
        </TextIcon>
      </div>
    </div>
  );
};

export default Sidenav;
