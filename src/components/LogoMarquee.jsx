import { Marquee } from "./magicui/marquee";
import { motion } from "motion/react";
import {
  Shield,
  File,
  ChartNoAxesColumnIncreasing,
  Globe,
  Rss,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

const LogoMarquee = () => {
  const primaryRow = [
    {
      id: 1,
      logo: Shield,
      color: "from-yellow-400 via-orange-500 to-yellow-600",
    },
    {
      id: 2,
      logo: Rss,
      color: "from-orange-600 via-rose-600 to-violet-600",
    },
    {
      id: 3,
      logo: Globe,
      color: "from-cyan-400 via-blue-500 to-indigo-600",
    },
    {
      id: 4,
      logo: ChartNoAxesColumnIncreasing,
      color: "from-gray-600 via-gray-500 to-gray-400",
    },
    {
      id: 5,
      logo: File,
      color: "from-green-500 via-teal-500 to-emerald-600",
    },
    {
      id: 6,
      logo: HeartHandshake,
      color: "from-orange-600 via-rose-600 to-violet-600",
    },
  ];

  const secondaryRow = [
    {
      id: 1,
      logo: Shield,
      color: "from-yellow-400 via-orange-500 to-yellow-600",
    },
    {
      id: 2,
      logo: Rss,
      color: "from-orange-600 via-rose-600 to-violet-600",
    },
    {
      id: 3,
      logo: HeartHandshake,
      color: "from-orange-600 via-rose-600 to-violet-600",
    },
    {
      id: 4,
      logo: ChartNoAxesColumnIncreasing,
      color: "from-gray-600 via-gray-500 to-gray-400",
    },
    {
      id: 5,
      logo: Globe,
      color: "from-cyan-400 via-blue-500 to-indigo-600",
    },
    {
      id: 6,
      logo: File,
      color: "from-green-500 via-teal-500 to-emerald-600",
    },
  ];

  return (
    <div className="bg-black py-14">
      <div className="relative">
        {/* first row */}
        <Marquee className="[--duration:10s]" reverse="true">
          {primaryRow.map((item) => (
            <motion.div
              key={item.id}
              className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: Math.random() * 2.5,
                duration: 0.6,
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <item.logo className="size-full" />
              <div
                className={`${item.color} pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r opacity-70 blur-[20px] filter`}
              ></div>
            </motion.div>
          ))}
        </Marquee>

        {/* second row */}
        <Marquee className="[--duration:25s]" reverse="true">
          {secondaryRow.map((item) => (
            <motion.div
              key={item.id}
              className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: Math.random() * 2.5,
                duration: 0.6,
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <item.logo className="size-full" />
              <div
                className={`${item.color} pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r opacity-70 blur-[20px] filter`}
              ></div>
            </motion.div>
          ))}
        </Marquee>

        {/* third row */}
        <Marquee className="[--duration:20s]" reverse="true">
          {primaryRow.map((item) => (
            <motion.div
              key={item.id}
              className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: Math.random() * 2.5,
                duration: 0.6,
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <item.logo className="size-full" />
              <div
                className={`${item.color} pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r opacity-70 blur-[20px] filter`}
              ></div>
            </motion.div>
          ))}
        </Marquee>

        {/* fourth row */}
        <Marquee className="[--duration:30s]" reverse="true">
          {secondaryRow.map((item) => (
            <motion.div
              key={item.id}
              className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: Math.random() * 2.5,
                duration: 0.6,
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <item.logo className="size-full" />
              <div
                className={`${item.color} pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r opacity-70 blur-[20px] filter`}
              ></div>
            </motion.div>
          ))}
        </Marquee>

        {/* fifth row */}
        <Marquee className="[--duration:20s]" reverse="true">
          {primaryRow.map((item) => (
            <motion.div
              key={item.id}
              className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: Math.random() * 2.5,
                duration: 0.6,
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <item.logo className="size-full" />
              <div
                className={`${item.color} pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r opacity-70 blur-[20px] filter`}
              ></div>
            </motion.div>
          ))}
        </Marquee>

        {/* sixth row */}
        <Marquee className="[--duration:30s]" reverse="true">
          {secondaryRow.map((item) => (
            <motion.div
              key={item.id}
              className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: Math.random() * 2.5,
                duration: 0.6,
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <item.logo className="size-full" />
              <div
                className={`${item.color} pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r opacity-70 blur-[20px] filter`}
              ></div>
            </motion.div>
          ))}
        </Marquee>

        {/* text content overlay */}
        <div className="absolute inset-x-0 bottom-[150px] z-10">
          <div className="mx-auto size-24 rounded-[2rem] border bg-white/10 p-4 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
            <HeartHandshake className="w-full h-full text-black dark:text-white " />
          </div>
          <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
            <h1 className="text-3xl font-bold lg:text-4xl">
              Stop wasting time on design.
            </h1>
            <p className="mt-2">
              Start your 7-day free trial. No credit card required.
            </p>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 group mt-4 rounded-[2rem] px-6"
              href="/"
            >
              Get Started
              <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </div>
          <div className="absolute inset-0 -z-10 rounded-full  bg-backtround opacity-40 blur-xl dark:bg-background"></div>
        </div>

        {/* gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-background to-70% dark:to-background"></div>
      </div>
    </div>
  );
};

export default LogoMarquee;
