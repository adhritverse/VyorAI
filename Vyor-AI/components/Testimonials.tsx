"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const reviews = [
  {
    name: "Aryan Sharma",
    username: "@aryan_dev",
    body: "The Infinity Plugin SDK reduced our onboarding pipeline from 12 clicks to zero. The conversational commerce experience is unparalleled.",
    img: "https://avatar.vercel.sh/aryan",
  },
  {
    name: "Priya Patel",
    username: "@priya_c",
    body: "Omni-Engine's logical reasoning blew me away. We scaled from 1 to 1M autonomous agents without a single latency spike.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Vikram Singh",
    username: "@v_singh_ai",
    body: "Sub-50ms latency is not a joke. The Developer API feels like it's running locally. The biometric precision on Stress Detection is flawless.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Neha Gupta",
    username: "@neha_builds",
    body: "Integrated AI Virtual Try-On in an afternoon. The Vyor AI ecosystem is exactly what enterprise scalable applications needed.",
    img: "https://avatar.vercel.sh/neha",
  },
  {
    name: "Ravi Kumar",
    username: "@ravi_eng",
    body: "Contextual Intelligence is seamless. My users literally don't have to search anymore, the AI anticipates their needs instantly.",
    img: "https://avatar.vercel.sh/ravi",
  },
  {
    name: "Sowmya Iyer",
    username: "@sowmya_design",
    body: "I've never seen anything like this before. The Neural Workflow SDK bridges design and intelligence so easily.",
    img: "https://avatar.vercel.sh/sowmya",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 sm:w-72 md:w-80 shrink-0 cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl border p-4 sm:p-6",
        "border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300",
        "backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.3)]"
      )}
    >
      <div className="flex flex-row items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        <Image className="rounded-full border border-white/10 w-10 h-10 sm:w-12 sm:h-12" width={48} height={48} alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-[13px] sm:text-sm font-semibold text-white tracking-wide">
            {name}
          </figcaption>
          <p className="text-[11px] sm:text-xs font-medium text-vyor-violet/80">{username}</p>
        </div>
      </div>
      <blockquote className="text-[12px] sm:text-sm text-gray-300 leading-relaxed font-light">{body}</blockquote>
    </figure>
  );
};

function TestimonialMarquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div id="testimonials" className="relative w-full py-10 overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-xl sm:text-3xl lg:text-[40px] font-medium tracking-tight text-white max-w-3xl leading-[1.2]">
          Discover what our community has to say <span className="text-neutral-400">about their VyorAI experience.</span>
        </h2>
      </div>

      <div className="relative flex min-h-[200px] sm:min-h-[400px] w-full flex-col items-center justify-center overflow-hidden">
        <TestimonialMarquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </TestimonialMarquee>
        <TestimonialMarquee reverse pauseOnHover className="[--duration:40s] mt-4 hidden sm:flex">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </TestimonialMarquee>

        {/* Gradient Fades for Marquee Borders */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0D1B2A] to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0D1B2A] to-transparent z-10"></div>
      </div>
    </div>
  );
}

