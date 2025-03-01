import { Marquee } from "./magicui/marquee";
import {
  Shield,
  File,
  ChartNoAxesColumnIncreasing,
  Globe,
  Rss,
  HeartHandshake,
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
      {/* first row */}
      <Marquee className=" [--duration:10s]" reverse="true">
        {primaryRow.map((item) => (
          <div
            key={item.id}
            className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            style={{ opacity: 1 }}
          >
            <item.logo className="size-full" />
            <div
              className={`${item.color} pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r opacity-70 blur-[20px] filter`}
            ></div>
          </div>
        ))}
      </Marquee>

      {/* second row */}
      <Marquee className="[--duration:25s]" reverse="true">
        {secondaryRow.map((item) => (
          <div
            key={item.id}
            className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            style={{ opacity: 1 }}
          >
            <item.logo className="size-full" />
            <div
              className={`${item.color} pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r opacity-70 blur-[20px] filter`}
            ></div>
          </div>
        ))}
      </Marquee>

      {/* third row */}
      <Marquee className="[--duration:20s]" reverse="true">
        {primaryRow.map((item) => (
          <div
            key={item.id}
            className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            style={{ opacity: 1 }}
          >
            <item.logo className="size-full" />
            <div
              className={`${item.color} pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r opacity-70 blur-[20px] filter`}
            ></div>
          </div>
        ))}
      </Marquee>

      {/* fourth row */}
      <Marquee className="[--duration:30s]" reverse="true">
        {secondaryRow.map((item) => (
          <div
            key={item.id}
            className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            style={{ opacity: 1 }}
          >
            <item.logo className="size-full" />
            <div
              className={`${item.color} pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r opacity-70 blur-[20px] filter`}
            ></div>
          </div>
        ))}
      </Marquee>

      {/* fifth row */}
      <Marquee className="[--duration:20s]" reverse="true">
        {primaryRow.map((item) => (
          <div
            key={item.id}
            className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            style={{ opacity: 1 }}
          >
            <item.logo className="size-full" />
            <div
              className={`${item.color} pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r opacity-70 blur-[20px] filter`}
            ></div>
          </div>
        ))}
      </Marquee>

      {/* sixth row */}
      <Marquee className="[--duration:30s]" reverse="true">
        {secondaryRow.map((item) => (
          <div
            key={item.id}
            className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            style={{ opacity: 1 }}
          >
            <item.logo className="size-full" />
            <div
              className={`${item.color} pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r opacity-70 blur-[20px] filter`}
            ></div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
