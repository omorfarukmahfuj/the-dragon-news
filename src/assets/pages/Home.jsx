import Header from "./shared/Header";
import Navbar from './shared/Navbar';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2 className="text-3xl font-bold">This is Home</h2>
    </div>
  );
};

export default Home;