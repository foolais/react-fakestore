/* eslint-disable react/prop-types */
import Sidenav from "../Fragments/Sidenav";

const ContainerLayouts = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex relative">
      <Sidenav />
      <div className="w-[15%]"></div>
      {children}
    </div>
  );
};

export default ContainerLayouts;
