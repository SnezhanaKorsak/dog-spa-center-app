import { WelcomeBanner } from "@/components/welcome-banner";
import { CurrentSpaOffer } from "@/components/current-spa-offer";

const HomePage = async () => {
  return (
    <main>
      <WelcomeBanner />
      <CurrentSpaOffer />
    </main>
  );
};

export default HomePage;
