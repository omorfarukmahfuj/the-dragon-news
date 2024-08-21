import Header from "../shared/Header";
import LeftSideNav from "../shared/LeftSideNav";
import Navbar from '../shared/Navbar';
import RightSideNav from "../shared/RightSideNav";
import BreakingNews from './BreakingNews';

const Home = () => {
  return (
    <div className="w-11/12 md:max-w-6xl mx-auto">
      <div className="mb-3 md:mb-6">
        <Header></Header>
        <BreakingNews></BreakingNews>
      </div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 md:mt-16">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl">News coming soon...</h2>
        </div>

        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;