import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Job_Category_Lists from "../Job_Category_Lists/Job_Category_Lists";
import Featured_Jobs from "../Featured_Jobs/Featured_Jobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Job_Category_Lists></Job_Category_Lists>
            <Featured_Jobs></Featured_Jobs>
        </div>
    );
};

export default Home;