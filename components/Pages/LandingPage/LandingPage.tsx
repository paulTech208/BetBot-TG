import Layout from "@/components/Layouts"
import HeroSection from "./HeroSection"
import Connect from "./Connect"
import Flow from "./Flow"
import Plan from "./Plan"
import Benefit from "./Benefits"
import AboutToken from "./AboutToken"
import Genesis from "./Genesis"
import OurTeam from "./OurTeam"
import RoadMap from "./RoadMap"
import FAQ from "./FAQ"
import AirDrop from "./AirDrop"
import BitBot from "./BitBot"
import ReferModal from "@/components/ReferModal"

const LandingPage = () => (
  <Layout type="base">
    <HeroSection />
    <Connect />
    <Flow />
    <Plan />
    <Benefit />
    <AboutToken />
    <Genesis />
    <OurTeam />
    <RoadMap />
    <FAQ />
    <AirDrop />
    <BitBot />
    <ReferModal />
  </Layout>
)

export default LandingPage
