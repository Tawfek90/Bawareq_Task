import Navbar from "@/components/Navbar/Navbar";
import Competitions from "@/components/competitions/Competitions";
import Pricings from "@/components/pricing/Pricings";
import Statictcs from "@/components/statistcs/Statictcs";
import Alerts from "@/components/alerts/Alerts";
import Platform from "@/components/platform/Platform";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Competitions />
      <Pricings />
      <Statictcs />
      <Alerts />
      <Platform />
      <Footer />
    </>
  );
}
