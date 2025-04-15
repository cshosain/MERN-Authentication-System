import { useContext } from "react";
import Hero from "../components/Hero.jsx";
import Technologies from "../components/Technologies.jsx";
import "../styles/Home.css";
import { toast } from "react-toastify";
import axios from "axios";
import Context from "../contexts/Context.js";
import { Navigate } from "react-router-dom";
import Footer from "../layout/Footer.jsx";

const Home = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  const logout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setUser(null);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.error(err);
      });
  };

  if (!isAuthenticated) {
    return <Navigate to={"/auth"} />;
  }

  return (
    <>
      <section className="home">
        <Hero />
        {/* <Instructor /> */}
        <Technologies />
        <Footer />
        <button onClick={logout}>Logout</button>
      </section>
    </>
  );
};

export default Home;
