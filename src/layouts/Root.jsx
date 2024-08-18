import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-11/12 md:max-w-6xl md:px-0 mx-auto font-poppins">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;