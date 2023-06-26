import Home from "./page/Home/Home";
import Account from "./page/Account/Account";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Lecturer from "./page/Lecturer/Lecturer";
import CourseDetails from "./page/CourseDetails/CourseDetails";
import ContactUs from "./page/ContactUs/ContactUs";
import DetailsWebLog from "./page/DetailsWebLog/DetailsWebLog";

const routes = [
    {path: '/' , element:<Home/>},
    {path: '/Account' , element:<Account/>},
    {path: '/Login' , element:<Login/>},
    {path: '/Register' , element:<Register/>},
    {path: '/Lecturer' , element:<Lecturer/>},
    {path: '/CourseDetails/:id' , element:<CourseDetails/>},
    {path: '/ContactUs' , element:<ContactUs/>},
    {path: '/DetailsWebLog/:id' , element:<DetailsWebLog/>},
    
]

export default routes