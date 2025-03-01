import { AnimatePresence, motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import Eclipse from "/eclipse_bg.png";
import { useState } from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import GoogleLogo from "/Google.svg";
import MicrosoftLogo from "/Microsoft.svg";
import GithubLogo from "/GitHub.svg";
import UberLogo from "/Uber.svg";
import NotionLogo from "/Notion.svg";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  // Pricing plans
  const pricing = {
    basic: { monthly: 10, annual: 100 },
    premium: { monthly: 20, annual: 200 },
    enterprise: { monthly: 50, annual: 500 },
    ultimate: { monthly: 80, annual: 800 },
  };

  const features = {
    basic: [
      "AI-powered analytics",
      "Basic support",
      "5 projects limit",
      "Access to basic AI tools",
    ],
    premium: [
      "Advanced AI insights",
      "Priority support",
      "Unlimited projects",
      "Access to all AI tools",
      "Custom integrations",
    ],
    enterprise: [
      "Custom AI solutions",
      "24/7 dedicated support",
      "Unlimited projects",
      "Access to all AI tools",
      "Custom integrations",
      "Data security and compliance",
    ],
    ultimate: [
      "Bespoke AI development",
      "White-glove support",
      "Unlimited projects",
      "Priority access to new AI tools",
      "Custom integrations",
      "Highest data security and compliance",
    ],
  };

  return (
    <div className="text-center relative flex flex-col items-center justify-center min-h-screen bg-black text-white mt-96 pb-16">
      {/* sponsors */}
      <div className="absolute z-20 -top-64 sm:-top-44 px-10">
        <p className="mb-6 text-sm font-semibold text-gray-600">
          TRUSTED BY TEAMS FROM AROUND THE WORLD
        </p>
        <div className="flex flex-wrap gap-x-10 md:gap-x-16 gap-y-6 items-center justify-center invert filter brightness-0 *:px-2 *:h-8 *:w-28 *:object-scale-down">
          <img src={GoogleLogo} alt="Google" />
          <img src={MicrosoftLogo} alt="Microsoft" />
          <img src={GithubLogo} alt="Github" />
          <img src={UberLogo} alt="Uber" />
          <img src={NotionLogo} alt="Notion" />
        </div>
      </div>

      {/* Glowing Background */}
      <div className="absolute lg:inset-0 top-0 flex justify-center items-center">
        <div className="w-[60vw] h-[80vw] max-w-[800px] max-h-[900px] rounded-full bg-gradient-to-b from-orange-300 via-orange-300 to-black opacity-40 blur-[100px]" />
      </div>

      <img src={Eclipse} className="w-screen relative" />

      {/* pricing text content */}
      <div className="mt-52 bg-black z-10 absolute inset-0">
        <span className="text-xl font-bold">Pricing</span>
        <h1 className="text-5xl sm:text-6xl font-bold">Simple pricing for everyone.</h1>
        <p className="text-xl mt-6 max-w-screen-lg mx-auto px-4">
          Choose an <strong>affordable plan</strong> that{"'"}s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>

        {/* switch */}
        <div className="flex justify-center items-center space-x-2 my-8">
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <Label className="text-base">Annual</Label>

          <span className="bg-white font-semibold text-black text-[11px] px-2.5 py-1.5 rounded-full">
            2 MONTHS FREE ✨
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="z-10 mt-96 sm:mt-40 md:mt-0 lg:-mt-20 xl:-mt-72 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto px-4">
        {Object.entries(pricing).map(([plan, price]) => (
          <Card
            key={plan}
            className={`p-4 border bg-black ${
              plan === "premium"
                ? "border-orange-300 border-2"
                : "border-white/20"
            } rounded-2xl`}
          >
            <CardHeader>
              <CardTitle className="text-left font-semibold -mt-4 -ml-2 capitalize">
                {plan}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-left -ml-2 -mt-4 text-sm">
                {plan === "basic"
                  ? "A basic plan for startups and individual users"
                  : plan === "premium"
                  ? "A premium plan for growing businesses"
                  : plan === "enterprise"
                  ? "An enterprise plan with advanced features for large organizations"
                  : "The ultimate plan with all features for industry leaders"}
              </p>
            </CardContent>

            {/* Animated Price */}
            <AnimatePresence mode="wait">
              <motion.p
                key={isAnnual ? "annual" : "monthly"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="text-4xl font-bold text-left mt-5 mb-8"
              >
                ${isAnnual ? price.annual : price.monthly}
                <span className="text-xs font-bold">
                  / {isAnnual ? "year" : "month"}
                </span>
              </motion.p>
            </AnimatePresence>

            {/* Subscribe Button */}
            <Button className="w-full text-lg font-semibold">Subscribe</Button>

            <div className="relative w-full h-1 my-8">
              <div className="absolute inset-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            <ul className="text-left text-xs font-medium space-y-2 mt-6">
              {features[plan].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="bg-green-400 rounded-full p-0.5">
                    <Check className="w-4 h-4" />
                  </span>{" "}
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
