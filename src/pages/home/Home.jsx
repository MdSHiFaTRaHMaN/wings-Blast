import FindMenu from "../../components/FindMenu";
import Banner from "./Banner";
import BestFood from "./BestFood";
import FindFlavor from "./FindFlavor";
import OrderCalculator from "./OrderCalculator";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FindMenu ></FindMenu>
            <BestFood></BestFood>
            <FindFlavor></FindFlavor>
            <OrderCalculator></OrderCalculator>
        </div>
    );
};

export default Home;