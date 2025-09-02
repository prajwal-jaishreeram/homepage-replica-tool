import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { VideoSection } from "@/components/VideoSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <VideoSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
