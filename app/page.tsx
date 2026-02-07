import BackgroundGradient from "@/components/landing/background-gradient";
import CTASection from "@/components/landing/cta-section";
import FeaturesSection from "@/components/landing/features-section";
import HeroSection from "@/components/landing/hero-section";
import HowItWorksSection from "@/components/landing/how-it-works-section";
import PricingSection from "@/components/landing/pricing-section";
import { MotionDiv } from "@/components/ui/motion-div";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundGradient />
      <div className="relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FeaturesSection />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HowItWorksSection />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CTASection />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <PricingSection />
        </MotionDiv>
      </div>
    </div>
  );
}
