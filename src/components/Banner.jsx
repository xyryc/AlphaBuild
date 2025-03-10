import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { Particles } from "./magicui/particles";
import { Button } from "./ui/button";
import { BorderBeam } from "./magicui/border-beam";

const Banner = () => {
  return (
    <>
      <div className="relative flex h-[550px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <span className="z-10 whitespace-pre-wrap">
          {/* animated shiny text */}
          <div className="z-10 flex items-center justify-center">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="text-xs inline-flex items-center justify-center px-3 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Magic UI Template</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>

          {/* text contents */}
          <div className="text-center max-w-96 sm:max-w-screen-sm lg:max-w-screen-lg mx-auto mt-6 tracking-tight">
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-[500] text-pretty">
              Magic UI is the new way to build landing pages.
            </h1>

            <p className="max-w-screen-sm mx-auto text-[1.25rem] mt-6 text-gray-400">
              Beautifully designed, animated components and templates built with
              Tailwind CSS, React, and Framer Motion.
            </p>

            <Button className="mt-10">
              Get Started for free <ArrowRightIcon />
            </Button>
          </div>
        </span>

        <Particles
          className="absolute inset-0 z-0"
          quantity={25}
          ease={80}
          color={"#ffffff"}
          refresh
        />
      </div>

      {/* bottom screenshot section */}
      <div className="px-6 lg:px-16 relative">
        <div className="overflow-hidden mt-16 relative container mx-auto rounded-xl z-10">
          <img
            src="hero-dark.png"
            alt="image"
            className="w-full h-full object-cover border-2 rounded-xl"
          />

          <BorderBeam duration={12} size={200} />
        </div>

        {/* Glowing Background */}
        <div className="absolute inset-x-0 top-0 flex justify-center items-center">
          <div className="absolute top-0 w-full h-[80vw] max-w-[1000px] max-h-[20px] lg:max-h-[300px] rounded-full bg-gradient-to-b from-orange-300 via-orange-300 to-black opacity-45 blur-[200px]" />
        </div>

        {/* Gradient overlay */}
        <div className="absolute z-20 inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-background to-70% dark:to-background"></div>
      </div>
    </>
  );
};

export default Banner;
