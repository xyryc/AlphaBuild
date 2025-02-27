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
        <span className="pointer-events-none z-10 whitespace-pre-wrap">
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

          {/* text */}
          <div className="text-center max-w-screen-lg mx-auto mt-6 tracking-tight">
            <h1 className="text-8xl font-[500]">
              Magic UI is the new way to build landing pages.
            </h1>

            <p className="max-w-screen-sm mx-auto text-[1.25rem] mt-6 opacity-75">
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
          quantity={20}
          ease={80}
          color={"#ffffff"}
          refresh
        />
      </div>

      <div className="mt-16 relative container mx-auto rounded-xl overflow-hidden">
        <div>
          <img
            src="hero-dark.png"
            alt="image"
            className="w-full h-full object-cover border-2 overflow-hidden rounded-xl"
          />
        </div>

        <BorderBeam duration={12} size={200} />
      </div>
    </>
  );
};

export default Banner;
