import AboutUs from "../../../components/AboutUs/AboutUs";
import Features from "../../../components/Features/Features";
import Footer from "../../../components/Footer/Footer";
import Landing from "../../../components/Landing/Landing";
import UserHome from "../../../components/UserHome/UserHome";

export default function Home() {
  const user = localStorage.getItem("user");
  return (
    <>
      {user ? (
        <UserHome />
      ) : (
        <>
          <Landing />
          <AboutUs />
          <Features />
        </>
      )}
      <Footer />
    </>
  );
}
