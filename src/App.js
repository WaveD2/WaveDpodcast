import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutItem from "./components/Items/About/AboutItem";
import Testimonials from "./components/Items/Testimonials/Testimonials";
import Benefits from "./components/Items/Benefits/Benefits";
import Recent from "./components/Items/Recent/Recent";
import Sponsor from "./components/Items/Sponsor/Sponsor";
import Article from "./components/Items/Aricle/Aricle";
import About from "./pages/About/About";
import Episodes from "./pages/Episodes/Episodes";
import PageError from "./pages/404/404";
import Blog from "./pages/More/Blog";
import SingerBlog from "./pages/More/SingerBlog";

const App = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header
          active={true}
          text={" Your Daily"}
          title={"Podcast"}
          des={"We cover all kinds of categories and a weekly special guest."}
        />
        <AboutItem />
        <Testimonials
          active={true}
          title={"What our listeners say"}
          des={"Their experience throughout every platform"}
        />
        <Benefits />
        <Recent />
        <Sponsor />
        <Article />
        <Footer />

        {/* <Link to="about">About Us</Link> */}
      </div>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/episodes",
    element: <Episodes />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/singerBlog",
    element: <SingerBlog />,
  },
  {
    path: "*",
    element: <PageError />,
  },
]);
export default App;
