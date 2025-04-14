import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import "../styles/Home.css";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <>
      <section className="home">
        <Hero />
        <Technologies />
        <Footer />
        <button>Logout</button>
      </section>
    </>
  );
};

export default Home;
