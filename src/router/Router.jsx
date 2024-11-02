import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import MyLocation from "../pages/MyLocation";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import FoodMenu from "../pages/FoodMenu";
import FoodDetails from "../pages/foodDetails/FoodDetails";
import Flavors from "../pages/Flavors";
import MyCart from "../pages/myCart";
import CheckOut from "../pages/CheckOut";
import About from "../pages/About";
import UserProfile from "../pages/UserProfile";
import MyOrder from "../pages/MyOrder";
import TermsOfUse from "../pages/TermsOfUser";
import Privacy from "../pages/Privacy";
import MobileLogin from "../components/MobileLogin";
// import Text from "../Text";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/myLocation',
                element: <MyLocation></MyLocation>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/foodmenu',
                element: <FoodMenu></FoodMenu>
            },
            {
                path: '/details',
                element: <FoodDetails></FoodDetails>
            },
            {
                path: '/flavors',
                element: <Flavors></Flavors>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/userprofile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/myorder',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/termsofuser',
                element: <TermsOfUse></TermsOfUse>
            },
            {
                path: '/privacy',
                element: <Privacy></Privacy>
            },
            {
                path: '/mobile',
                element: <MobileLogin></MobileLogin>
            }

        ]
    }
])
export default Router;