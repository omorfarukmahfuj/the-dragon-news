import { useParams } from "react-router-dom";
import Header from "../shared/Header";
import RightSideNav from "../shared/RightSideNav";
import Navbar from "../shared/Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-col-4 ">
        <div className="col-span-3">
          <h2 className="text-xl">News Detail</h2>
        </div>

        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;