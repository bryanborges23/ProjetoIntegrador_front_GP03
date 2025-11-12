import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CityBubbles from "@/components/CityBubbles";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import JoinTeam from "@/components/JoinTeam";
import PlaneMessage from "@/components/PlaneMessage";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CityBubbles />
      <AboutUs />
      <Testimonials />
      <JoinTeam />
      <PlaneMessage />
      <Footer />
    </div>
  );
};

export default Index;
