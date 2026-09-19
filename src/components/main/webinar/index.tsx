import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  Tv2,
  Lock,
  Compass,
  ArrowRight,
  BarChart2,
  Percent,
  AlertTriangle,
  Volume2,
  FileEdit,
  GitBranch,
  Brain,
  CheckCircle2,
  Play,
  Target,
  X,
  BarChart3,
  ShieldCheck,
  ChevronLeft,
  Maximize2,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

const PaymentContext = createContext<null | { paymentFunction: () => void }>(
  null,
);

function usePaymentContext() {
  const paymentContext = useContext(PaymentContext);

  if (!paymentContext) {
    throw new Error("PaymentContext needed");
  }

  return paymentContext;
}

export function Webinar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    const userAmount = 9;

    // @ts-ignore no-need
    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_live_Tdopgxpn6sPJOL", // Replace with your actual Razorpay Key ID
      amount: Math.round(userAmount * 100), // Amount in paise (₹9 = 900 paise)
      currency: "INR",
      name: "SANJIB ACADEMY",
      description: "Webinar Registration",
      handler: function () {
        // Triggered on successful payment
        // Redirects to your target URL with the payment ID attached
        window.location.href = `https://chat.whatsapp.com/FInjLzOR8zy28M0A5DEIbV`;
      },
      prefill: {
        name: "Test User",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    // @ts-ignore no-need
    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response: any) {
      alert("Payment Failed: " + response.error.description);
    });

    rzp.open();
  };

  return (
    <PaymentContext value={{ paymentFunction: handlePayment }}>
      <TradingWorkshopHero />
      <TradingPainPointsSection />
      <TradingResultsLaptopSection />
      <PointsChart />
      <InsideWorkshopSection />
      {/* <TradersFeedbackSection /> */}
      <TradersWallOfLoveSection />
    </PaymentContext>
  );
}

const inclusions = [
  "3 Hours Live Mentorship",
  "Master The FNO Trading Setup™",
  "Bonus: PDF + Recording + Community",
];

export function TradingWorkshopHero() {
  const { paymentFunction } = usePaymentContext();

  const actualPrice = 199;
  const discountedPrice = 9;

  const percentage = 100 - (discountedPrice / actualPrice) * 100;

  return (
    <main className="text-accent-100 font-brand-primary selection:bg-secondary-500 relative min-h-screen w-full overflow-hidden bg-[#070b0e] p-4 antialiased selection:text-black sm:p-6 lg:p-12">
      {/* Background Ambience / Glows */}
      <div
        className="pointer-events-none absolute -top-40 left-10 h-96 w-96 rounded-full opacity-15 blur-[140px]"
        style={{ backgroundColor: "var(--secondary-500)" }}
      />
      <div
        className="pointer-events-none absolute top-1/3 right-10 h-96 w-96 rounded-full opacity-10 blur-[160px]"
        style={{ backgroundColor: "var(--primary-500)" }}
      />

      {/* Main Container with Container Query Enabled */}
      <div className="@container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-8 lg:gap-12 @4xl:grid-cols-12">
          {/* LEFT COLUMN: Main Info & Details */}
          <section className="flex flex-col gap-6 @4xl:col-span-7">
            {/* Tag Badge */}
            <div className="border-secondary-900/60 bg-secondary-950/40 inline-flex items-center gap-2 self-start rounded-full border px-3.5 py-1.5 backdrop-blur-md">
              <Compass className="text-secondary-400 h-3.5 w-3.5" />
              <span className="text-secondary-200 text-[11px] font-bold tracking-wider uppercase">
                THE ULTIMATE OPTION HEDGING FRAMEWORK
              </span>
            </div>

            {/* Headings */}
            <div className="space-y-3">
              {/* Learn the Art of F&O Selling + Hedging */}
              {/* Without Depending on Complex Charts or Technical Indicators */}
              <h1 className="text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-5xl">
                <span className="text-foreground">
                  <span>Learn the </span>
                </span>{" "}
                <span className="text-secondary-300">
                  Art of F&O Selling + Hedging
                </span>{" "}
                <span className="text-primary-400 mt-1 block font-extrabold">
                  Without Depending on Complex Charts or Technical Indicators
                </span>
              </h1>

              <h2 className="text-accent-200/90 pt-1 text-lg font-medium sm:text-xl">
                Discover how options selling and hedging can be combined into a
                structured framework designed to manage risk, define exposure
                and make more disciplined F&O decisions.
              </h2>
            </div>

            {/* Descriptions */}
            <div className="text-accent-300/80 max-w-2xl space-y-3 text-sm leading-relaxed sm:text-base">
              <p>
                Learn how markets move and how to analyse price action with a
                simple and structured Method.
              </p>
              Experienced
              <p>
                No 10-indicator setups. No guesswork. No FOMO. Just one
                complete, logical Options trading Method.
              </p>
              <p>
                No “magic strategy.” No guaranteed returns. Just a structured
                approach to understanding F&O risk and hedging.
              </p>
            </div>

            {/* Event Meta Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <div className="border-secondary-900/50 text-accent-200 inline-flex items-center gap-2 rounded-lg border bg-[#0c1613]/80 px-3 py-2 text-xs font-medium">
                <Calendar className="text-secondary-400 h-4 w-4" />
                <span>19th July 2026</span>
              </div>
              <div className="border-secondary-900/50 text-accent-200 inline-flex items-center gap-2 rounded-lg border bg-[#0c1613]/80 px-3 py-2 text-xs font-medium">
                <Clock className="text-secondary-400 h-4 w-4" />
                <span>8 PM – 10 PM IST</span>
              </div>
              <div className="border-secondary-900/50 text-accent-200 inline-flex items-center gap-2 rounded-lg border bg-[#0c1613]/80 px-3 py-2 text-xs font-medium">
                <Tv2 className="text-secondary-400 h-4 w-4" />
                <span>100% Live Online</span>
              </div>
            </div>

            {/* MENTOR CARD (Uses child container query) */}
            <div className="@container/mentor mt-4">
              <div className="group border-accent-900/50 hover:border-accent-800/80 relative overflow-hidden rounded-2xl border bg-[#0b1115]/90 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 sm:p-6">
                <div className="grid grid-cols-1 items-center gap-5 @md/mentor:grid-cols-12">
                  {/* Avatar/Image */}
                  <div className="bg-accent-950 border-accent-900/40 relative aspect-square max-w-35 overflow-hidden rounded-xl border shadow-inner @md/mentor:col-span-4">
                    <img
                      src={`/webinar-images/sanjib-gangully-1.jpeg`}
                      alt="Sanjib Ganguly"
                      className="h-full w-full object-cover object-top contrast-125 grayscale"
                    />
                  </div>

                  {/* Mentor Info */}
                  <div className="flex flex-col justify-between space-y-3 @md/mentor:col-span-8">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-accent-50 text-xl font-bold tracking-tight">
                          Sanjib Ganguly
                        </h3>
                        <ArrowRight className="text-accent-500 group-hover:text-accent-300 h-4 w-4 opacity-60 transition-all group-hover:translate-x-1" />
                      </div>

                      <div className="mt-1">
                        <span className="bg-secondary-950 border-secondary-800/60 text-secondary-400 inline-block rounded-sm border px-2 py-0.5 text-[10px] font-extrabold tracking-wider uppercase">
                          MENTOR & TRADING EXPERT
                        </span>
                      </div>

                      <p className="text-accent-100 mt-2 text-xs font-semibold">
                        Experienced Trader
                      </p>
                      {/* <p className="text-accent-400 mt-0.5 text-[11px]">
                        Industry Expert at Motilal Oswal Wealth Management
                      </p> */}
                    </div>

                    {/* Stats Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="border-accent-900/80 bg-accent-950/70 text-accent-300 rounded border px-2.5 py-1 text-[10px] font-semibold tracking-wide">
                        7+ YRS ACTIVE MARKETS
                      </span>
                      <span className="border-accent-900/80 bg-accent-950/70 text-accent-300 rounded border px-2.5 py-1 text-[10px] font-semibold tracking-wide">
                        10,000+ HAPPY STUDENTS
                      </span>
                    </div>

                    {/* Media / Podcasts Tags */}
                    <div className="text-accent-400/90 space-y-1 pt-1 text-[10px] font-medium">
                      <div>
                        MEDIA:{" "}
                        <span className="text-accent-300">
                          YOUTUBE, INSTAGRAM, FACEBOOK
                        </span>
                      </div>
                      {/* <div className="text-primary-300/90 flex items-center gap-1.5">
                        <Mic className="text-primary-400 h-3 w-3" />
                        <span>PODCAST: DHAN & UPSURGE</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN: Pricing & Checkout Card */}
          <aside className="w-full @4xl:col-span-5">
            <div className="border-secondary-900/40 sticky top-6 rounded-2xl border bg-[#08100e]/95 p-6 shadow-2xl backdrop-blur-xl transition-all sm:p-8">
              {/* Registration Status */}
              <div className="mb-6 text-center">
                <span className="text-[11px] font-bold tracking-widest text-red-500 uppercase">
                  REGISTRATION OPEN
                </span>

                {/* Price Display */}
                <div className="mt-3 flex items-baseline justify-center gap-3">
                  <span className="text-accent-500 text-xl font-semibold line-through sm:text-2xl">
                    ₹{actualPrice}
                  </span>
                  <span className="text-accent-50 text-4xl font-black tracking-tight sm:text-5xl">
                    ₹{discountedPrice}
                  </span>
                </div>

                {/* Discount Tag */}
                <span className="text-primary-300 mt-2 inline-block text-xs font-black tracking-wider">
                  {percentage.toFixed(0)}% OFF TODAY
                </span>
              </div>

              {/* What's Included */}
              <div className="border-accent-900/40 border-t pt-6">
                <h4 className="text-accent-400 mb-4 text-[11px] font-bold tracking-wider uppercase">
                  WHAT'S INCLUDED:
                </h4>

                <ul className="space-y-3.5">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-secondary-400 mt-0.5 h-4 w-4 shrink-0" />
                      <span className="text-accent-200/90 text-xs leading-tight font-medium sm:text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call-to-Action Button */}
              <button
                type="button"
                onClick={paymentFunction}
                className="text-secondary-950 shadow-secondary-500/20 mt-8 flex w-full animate-bounce items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-extrabold tracking-wider uppercase shadow-lg transition-all duration-200 hover:brightness-110 active:scale-[0.99] sm:text-base"
                style={{ backgroundColor: "var(--secondary-400)" }}
              >
                SECURE MY SEAT — ₹9
              </button>

              {/* Trust Badge */}
              <div className="text-accent-400/80 mt-4 flex items-center justify-center gap-1.5 text-[11px]">
                <Lock className="text-accent-400 h-3 w-3" />
                <span>Secure Checkout via Razorpay</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export interface PainPointItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  // title: string;
  description: string;
  hasPrefixEmoji?: boolean;
}

const painPoints: PainPointItem[] = [
  {
    id: "info-overload",
    icon: BarChart2,
    // title: "Information Overload",
    description:
      "Entering a trade and suddenly seeing the market move against you.",
  },
  {
    id: "lack-structure",
    icon: Percent,
    // title: "Lack of a Structured Process",
    description: "Watching profits disappear during unexpected volatility.",
  },
  {
    id: "discipline",
    icon: AlertTriangle,
    // title: "Difficulty Maintaining Discipline",
    description:
      "Taking an option-selling position without knowing how to protect it.",
  },
  {
    id: "noise",
    icon: Volume2,
    // title: "Market Noise & Distractions",
    description: "Exiting too early because of fear.",
  },
  {
    id: "trade-planning",
    icon: FileEdit,
    // title: "Unclear Trade Planning",
    description: "Holding losing positions hoping for a reversal.",
  },
  {
    id: "psychology",
    icon: Brain,
    // title: "Trading Psychology Challenges",
    description:
      "Knowing individual option strategies but not knowing when and how to protect them.",
    hasPrefixEmoji: true,
  },
];

export function TradingPainPointsSection() {
  return (
    <section className="text-accent-100 font-brand-primary selection:bg-secondary-500 relative w-full overflow-hidden bg-[#070b0e] px-4 py-16 selection:text-black sm:px-6 lg:px-12">
      {/* Background Ambience / Glows */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 h-80 w-2xl -translate-x-1/2 rounded-full opacity-10 blur-[160px]"
        style={{ backgroundColor: "var(--primary-700)" }}
      />
      <div
        className="pointer-events-none absolute bottom-4 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full opacity-15 blur-[140px]"
        style={{ backgroundColor: "var(--secondary-500)" }}
      />

      {/* Container Query Shell */}
      <div className="@container mx-auto flex max-w-6xl flex-col items-center">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl space-y-4 text-center sm:mb-16">
          <h2 className="text-3xl leading-[1.2] font-extrabold tracking-tight sm:text-4xl @2xl:text-5xl">
            <span className="text-accent-50 block">
              Why Do Many F&O Traders Struggle
            </span>
            {/* <span className="mt-1 block text-red-500">
              They Need A Better Framework.
            </span> */}
          </h2>
          {/* <p className="text-accent-300/80 mx-auto max-w-xl text-sm leading-relaxed sm:text-base">
            If you are currently facing any of these issues, it is not your
            fault. The industry is designed to overwhelm you.
          </p> */}
        </div>

        {/* Responsive Grid with Container Query Breakpoints */}
        <div className="grid w-full grid-cols-1 gap-5 sm:gap-6 @lg:grid-cols-2 @4xl:grid-cols-3">
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group border-accent-900/50 hover:border-accent-800/80 relative rounded-2xl border bg-[#0c1216]/90 p-6 backdrop-blur-md transition-all duration-300 hover:bg-[#0f171c] sm:p-7"
              >
                {/* Icon Container */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 transition-colors group-hover:border-red-500/35">
                  <Icon className="h-5 w-5 stroke-[1.75] text-red-400" />
                </div>

                {/* Title */}
                <h3 className="text-accent-50 mb-2 flex items-center gap-1.5 text-base font-bold tracking-tight sm:text-lg">
                  {/* {item.hasPrefixEmoji && <span className="text-base">🧠</span>} */}
                  {/* <span>{item.title}</span> */}
                </h3>

                {/* Description */}
                <p className="text-accent-400 text-xs leading-relaxed sm:text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Pill / Solution Badge */}
        <div className="border-secondary-700/60 mt-12 inline-flex flex-col items-center gap-2.5 rounded-full border bg-[#091512]/90 px-5 py-3 shadow-[0_0_24px_-4px_rgba(104,193,0,0.15)] backdrop-blur-md sm:mt-16">
          <div className={cn(`flex gap-2`)}>
            <CheckCircle2 className="text-secondary-400 h-4 w-4 shrink-0" />
            <span className="text-accent-100 text-xs font-semibold tracking-wide sm:text-sm">
              The problem isn't always finding another strategy.
            </span>
          </div>
          <div className={cn(`flex gap-2`)}>
            <CheckCircle2 className="text-secondary-400 h-4 w-4 shrink-0" />
            <span className="text-accent-100 text-xs font-semibold tracking-wide sm:text-sm">
              Sometimes the bigger problem is knowing how to manage the position
              after entering it.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// export function TradingSetupFrameworkSection() {
//   return (
//     <section className="font-brand-primary text-foreground relative w-full overflow-hidden bg-[#030812] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
//       {/* subtle background ambience */}
//       <div
//         className="pointer-events-none absolute top-10 left-1/2 h-72 w-175 max-w-full -translate-x-1/2 rounded-full opacity-[0.05] blur-[150px]"
//         style={{ backgroundColor: "var(--secondary-400)" }}
//       />

//       <div className="relative mx-auto max-w-6xl">
//         {/* Header */}
//         <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-11">
//           <h2 className="text-accent-50 text-[28px] leading-tight font-semibold tracking-tight sm:text-[36px] lg:text-[40px]">
//             Master The FNO Trading Setup
//           </h2>

//           <p className="text-accent-100 mt-5 text-sm font-semibold sm:text-base">
//             A Structured Framework For Understanding Market Behaviour
//           </p>

//           <p className="mx-auto mt-7 max-w-3xl text-[13px] leading-5 text-[#8aa6ff] sm:text-sm sm:leading-6">
//             Instead of reacting to moving averages or RSI, traders learn how to
//             understand true market dynamics:
//             <br className="hidden sm:block" />
//             <span className="sm:ml-1">
//               Structure, Liquidity Sweeps, and Momentum.
//             </span>
//           </p>
//         </div>

//         {/* Outer Card */}
//         <div className="border-secondary-500/25 hover:border-secondary-400/40 relative rounded-[15px] border bg-[#0b151a] px-4 py-8 shadow-[0_0_25px_rgba(134,241,0,0.12),0_0_60px_rgba(134,241,0,0.06)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(134,241,0,0.18),0_0_80px_rgba(134,241,0,0.10)] sm:px-8 sm:py-9 lg:px-10">
//           {/* Card Heading */}
//           <div className="mb-8 text-center">
//             <p className="text-secondary-400 mb-2 text-[10px] font-extrabold tracking-[0.08em] uppercase sm:text-[11px]">
//               Visual Execution Flow
//             </p>

//             <h3 className="text-accent-50 text-lg font-bold tracking-tight sm:text-xl">
//               Anatomy of a Master The FNO Hedging Trading Setup
//             </h3>
//           </div>

//           {/* Chart Box */}
//           <div className="border-accent-950 overflow-hidden rounded-[11px] border bg-[#05070c]">
//             <div className="overflow-x-auto">
//               <div className="min-w-190 px-4 py-5 sm:px-7 sm:py-7">
//                 <svg
//                   viewBox="0 0 900 340"
//                   className="block h-auto w-full"
//                   role="img"
//                   aria-label="Three phase Master The FNO Hedging Trading Setup diagram"
//                 >
//                   {/* ============================= */}
//                   {/* PHASE BACKGROUNDS */}
//                   {/* ============================= */}

//                   <rect
//                     x="55"
//                     y="24"
//                     width="255"
//                     height="290"
//                     rx="10"
//                     fill="#0a0d15"
//                   />

//                   <rect
//                     x="320"
//                     y="24"
//                     width="188"
//                     height="290"
//                     rx="10"
//                     fill="#100a11"
//                   />

//                   <rect
//                     x="518"
//                     y="24"
//                     width="348"
//                     height="290"
//                     rx="10"
//                     fill="#071514"
//                   />

//                   {/* ============================= */}
//                   {/* AXIS */}
//                   {/* ============================= */}

//                   <line
//                     x1="30"
//                     y1="24"
//                     x2="30"
//                     y2="325"
//                     stroke="#242a32"
//                     strokeWidth="2"
//                   />

//                   <line
//                     x1="30"
//                     y1="325"
//                     x2="866"
//                     y2="325"
//                     stroke="#242a32"
//                     strokeWidth="2"
//                   />

//                   {/* ============================= */}
//                   {/* PHASE 1 STRUCTURE */}
//                   {/* ============================= */}

//                   <polyline
//                     points="
//                       42,290
//                       123,209
//                       169,233
//                       270,99
//                       319,142
//                     "
//                     fill="none"
//                     stroke="#45505f"
//                     strokeWidth="5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />

//                   {/* resistance horizontal guide */}
//                   <line
//                     x1="216"
//                     y1="82"
//                     x2="351"
//                     y2="82"
//                     stroke="#8f7900"
//                     strokeWidth="1.5"
//                     strokeDasharray="5 4"
//                   />

//                   {/* resistance badge */}
//                   <rect
//                     x="215"
//                     y="82"
//                     width="175"
//                     height="28"
//                     rx="6"
//                     fill="#292600"
//                     stroke="#5c5400"
//                     strokeWidth="1"
//                   />

//                   <text
//                     x="302"
//                     y="100"
//                     fill="#f4da00"
//                     fontSize="12"
//                     fontWeight="800"
//                     textAnchor="middle"
//                     letterSpacing="0.6"
//                   >
//                     RESISTANCE / LIQUIDITY
//                   </text>

//                   {/* ============================= */}
//                   {/* PHASE 2 SWEEP / RETAIL TRAP */}
//                   {/* ============================= */}

//                   <polyline
//                     points="
//                       319,142
//                       412,48
//                       459,187
//                     "
//                     fill="none"
//                     stroke="#ff4d54"
//                     strokeWidth="5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />

//                   <circle cx="412" cy="48" r="7" fill="#ff4d54" />

//                   <text
//                     x="412"
//                     y="25"
//                     fill="#ff4d54"
//                     fontSize="12"
//                     fontWeight="800"
//                     textAnchor="middle"
//                     letterSpacing="1"
//                   >
//                     RETAIL TRAP
//                   </text>

//                   {/* ============================= */}
//                   {/* PHASE 3 BULLISH */}
//                   {/* ============================= */}

//                   <polyline
//                     points="
//                       459,187
//                       540,152
//                       586,176
//                       829,48
//                     "
//                     fill="none"
//                     stroke="#00f5a0"
//                     strokeWidth="5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />

//                   {/* setup point */}
//                   <circle
//                     cx="586"
//                     cy="176"
//                     r="10"
//                     fill="#00f5a0"
//                     opacity="0.24"
//                   />

//                   <circle cx="586" cy="176" r="7" fill="#00f5a0" />

//                   {/* vertical setup line */}
//                   <line
//                     x1="586"
//                     y1="186"
//                     x2="586"
//                     y2="231"
//                     stroke="#00b777"
//                     strokeWidth="2.5"
//                     strokeDasharray="8 7"
//                     strokeLinecap="round"
//                   >
//                     <animate
//                       attributeName="stroke-dashoffset"
//                       from="0"
//                       to="-30"
//                       dur="1s"
//                       repeatCount="indefinite"
//                     />
//                   </line>

//                   {/* bullish zone */}
//                   <text
//                     x="827"
//                     y="30"
//                     fill="#00f5a0"
//                     fontSize="15"
//                     fontWeight="800"
//                     textAnchor="end"
//                   >
//                     BULLISH ZONE
//                   </text>

//                   {/* movement arrow */}
//                   <polygon points="681,122 707,124 687,141" fill="#00f5a0" />

//                   {/* setup title */}
//                   <text
//                     x="586"
//                     y="242"
//                     fill="#00f5a0"
//                     fontSize="12"
//                     fontWeight="800"
//                     textAnchor="middle"
//                     letterSpacing="0.5"
//                   >
//                     Master The FNO Hedging Trading Setup
//                   </text>

//                   {/* stoploss badge */}
//                   <rect
//                     x="528"
//                     y="258"
//                     width="116"
//                     height="25"
//                     rx="5"
//                     fill="#251214"
//                   />

//                   <text
//                     x="586"
//                     y="275"
//                     fill="#ff5157"
//                     fontSize="10"
//                     fontWeight="800"
//                     textAnchor="middle"
//                     letterSpacing="1"
//                   >
//                     STOP LOSS
//                   </text>

//                   {/* ============================= */}
//                   {/* PHASE LABELS */}
//                   {/* ============================= */}

//                   <text
//                     x="183"
//                     y="303"
//                     fill="#aeb8ca"
//                     fontSize="11"
//                     textAnchor="middle"
//                     letterSpacing="1.3"
//                   >
//                     PHASE 1: STRUCTURE
//                   </text>

//                   <text
//                     x="414"
//                     y="303"
//                     fill="#aeb8ca"
//                     fontSize="11"
//                     textAnchor="middle"
//                     letterSpacing="1.3"
//                   >
//                     PHASE 2: SWEEP
//                   </text>

//                   <text
//                     x="692"
//                     y="303"
//                     fill="#00f5a0"
//                     fontSize="11"
//                     fontWeight="800"
//                     textAnchor="middle"
//                     letterSpacing="0.5"
//                   >
//                     PHASE 3: Master The FNO Hedging Trading Setup
//                   </text>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

const workshopPillars = [
  {
    id: 1,
    title:
      "Learn How Professional Traders Think About F&O Selling & Risk Management",
    description:
      "Discover how hedging can help option traders approach market uncertainty with a more structured risk-management framework.",
    icon: Target,
    side: "left",
    tone: "green",
  },
  {
    id: 2,
    title: "What If Your F&O Position Had a Risk-Management Layer?",
    description:
      "Hedging is a risk-management approach designed to offset or reduce the impact of adverse price movements in a portfolio or position.",
    icon: GitBranch,
    side: "right",
    tone: "yellow",
  },
  {
    id: 3,
    title: "Why Understand F&O Hedging?",
    description:
      "Understanding F&O hedging can help traders develop a more structured approach to risk management. It can improve awareness of potential downside, risk-reward, volatility and position management, while helping traders prepare for different market scenarios rather than relying entirely on market predictions. The objective is to build a disciplined mindset focused not only on potential returns, but also on understanding and managing risk.",
    icon: ShieldCheck,
    side: "left",
    tone: "green",
  },
  {
    id: 4,
    title: "Want to Go Beyond the Webinar?",
    description:
      "For traders who want to go deeper, we have developed a structured F&O Selling & Hedging Learning Program focused on understanding risk, position management and practical application.",
    icon: Clock,
    side: "right",
    tone: "yellow",
  },
  {
    id: 5,
    title:
      "Ready to Understand F&O Selling From a Risk-Management Perspective?",
    description:
      "Join our upcoming educational webinar and discover why professional-style risk management can be an important part of derivative trading.",
    icon: BarChart3,
    side: "left",
    tone: "green",
  },
];

export function InsideWorkshopSection() {
  return (
    <section className="font-brand-primary text-foreground relative w-full overflow-hidden bg-[#03070d] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-150 w-60 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] blur-[130px]"
        style={{ backgroundColor: "var(--secondary-500)" }}
      />

      <div className="relative mx-auto max-w-250">
        {/* ========================= */}
        {/* SECTION HEADER */}
        {/* ========================= */}

        <div className="mb-12 text-center sm:mb-14">
          <h2 className="text-accent-50 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Inside The Workshop
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="text-secondary-400 text-sm leading-none">✦</span>

            <p className="text-secondary-400 text-[10px] font-extrabold tracking-[0.02em] uppercase sm:text-[11px]">
              5 CORE PILLARS OF MASTER THE FNO Hedging TRADING SETUP™
            </p>
          </div>
        </div>

        {/* ========================= */}
        {/* DESKTOP TIMELINE */}
        {/* ========================= */}

        <div className="relative hidden md:block">
          {/* Center glowing line */}
          <div className="absolute top-12.5 bottom-12.5 left-1/2 z-0 -translate-x-1/2">
            {/* Glow */}
            <div className="from-secondary-500/20 via-primary-400/20 to-secondary-500/20 absolute inset-y-0 left-1/2 w-3 -translate-x-1/2 bg-linear-to-b blur-lg" />

            {/* Main line */}
            <div className="from-secondary-500 via-primary-400 to-secondary-500 relative h-full w-0.5 bg-linear-to-b shadow-[0_0_10px_rgba(134,241,0,0.25)]" />
          </div>

          <div className="relative z-10 space-y-7.5">
            {workshopPillars.map((item) => {
              const Icon = item.icon;
              const isLeft = item.side === "left";
              const isGreen = item.tone === "green";

              return (
                <div
                  key={item.id}
                  className="grid min-h-21 grid-cols-[1fr_82px_1fr] items-center"
                >
                  {/* LEFT SIDE */}
                  <div className="flex justify-end">
                    {isLeft && (
                      <WorkshopPillarCard
                        title={`${item.id}. ${item.title}`}
                        description={item.description}
                        align="right"
                      />
                    )}
                  </div>

                  {/* CENTER ICON */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className={[
                        "relative flex h-7.75 w-7.75 items-center justify-center rounded-full border bg-[#04090d]",
                        isGreen
                          ? "border-secondary-400 text-secondary-400 shadow-[0_0_16px_rgba(134,241,0,0.30)]"
                          : "border-yellow-400 text-yellow-300 shadow-[0_0_16px_rgba(250,204,21,0.28)]",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "absolute inset-0.75 rounded-full",
                          isGreen ? "bg-secondary-500/5" : "bg-yellow-400/5",
                        ].join(" ")}
                      />

                      <Icon
                        className="relative z-10 h-3.25 w-3.25"
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex justify-start">
                    {!isLeft && (
                      <WorkshopPillarCard
                        title={`${item.id}. ${item.title}`}
                        description={item.description}
                        align="left"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================= */}
        {/* MOBILE TIMELINE */}
        {/* ========================= */}

        <div className="relative md:hidden">
          {/* Vertical line */}
          <div className="absolute top-4 bottom-4 left-3.75">
            <div className="from-secondary-500/15 via-primary-400/15 to-secondary-500/15 absolute inset-y-0 left-1/2 w-3 -translate-x-1/2 bg-linear-to-b blur-md" />

            <div className="from-secondary-500 via-primary-400 to-secondary-500 relative h-full w-0.5 bg-linear-to-b" />
          </div>

          <div className="relative z-10 space-y-7">
            {workshopPillars.map((item) => {
              const Icon = item.icon;
              const isGreen = item.tone === "green";

              return (
                <div
                  key={item.id}
                  className="grid grid-cols-[32px_1fr] items-center gap-4"
                >
                  {/* Icon */}
                  <div
                    className={[
                      "relative flex h-7.75 w-7.75 items-center justify-center rounded-full border bg-[#04090d]",
                      isGreen
                        ? "border-secondary-400 text-secondary-400 shadow-[0_0_15px_rgba(134,241,0,0.28)]"
                        : "border-yellow-400 text-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.25)]",
                    ].join(" ")}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                  </div>

                  <WorkshopPillarCard
                    title={`${item.id}. ${item.title}`}
                    description={item.description}
                    align="left"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

interface WorkshopPillarCardProps {
  title: string;
  description: string;
  align: "left" | "right";
}

function WorkshopPillarCard({
  title,
  description,
  align,
}: WorkshopPillarCardProps) {
  return (
    <div
      className={[
        "border-accent-900/50 relative w-full max-w-85",
        "rounded-[11px] border bg-[#0b0f14]",
        "px-5 py-4",
        "shadow-[0_8px_25px_rgba(0,0,0,0.22)]",
        "transition-all duration-300",
        "hover:border-secondary-500/20",
        "hover:shadow-[0_0_25px_rgba(134,241,0,0.06)]",
        align === "right" ? "text-right" : "text-left",
      ].join(" ")}
    >
      {/* Very subtle inner highlight */}
      <div className="via-accent-200/5 pointer-events-none absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent to-transparent" />

      <h3 className="text-accent-50 text-[14px] leading-snug font-bold tracking-tight sm:text-[20px]">
        {title}
      </h3>

      <p className="text-accent-400 mt-2 text-[10px] leading-[1.6] sm:text-[14px]">
        {description}
      </p>
    </div>
  );
}

export interface TestimonialVideo {
  id: string;
  name: string;
  role: string;
  location: string;
  videoTitle: string;
  videoSubtitle: string;
  thumbnailUrl: string;
  videoEmbedUrl: string;
}

const testimonials: TestimonialVideo[] = [
  {
    id: "1",
    name: "Mr. Nadin Rath",
    role: "Director",
    location: "IT Company USA",
    videoTitle: "Mr. Nadin Rath's Trading Journey",
    videoSubtitle: "Animesh K. - Mentor & Pro Trad...",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    name: "Dr. Priya Shah",
    role: "Surgeon",
    location: "Bengaluru",
    videoTitle: "How Dr. Priya Shah Works with Setup",
    videoSubtitle: "Animesh K. - Mentor & Pro Trad...",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "3",
    name: "Mr. Navneet Maurya",
    role: "Sr. Mechanical Engineer",
    location: "Kanpur",
    videoTitle: "Mr. Navneet's Inspiring Shift",
    videoSubtitle: "Animesh K. - Mentor & Pro Trad...",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "4",
    name: "Mr. Bhaskar Bose",
    role: "Retired IT Professional",
    location: "Noida",
    videoTitle: "From Market Anxiety to Calm",
    videoSubtitle: "Animesh K. - Mentor & Pro Trad...",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "5",
    name: "Dr. Srinivas Babu",
    role: "Sr. Doctor",
    location: "Bengaluru",
    videoTitle: "Dr. Srinivas Babu Shares Insight",
    videoSubtitle: "Animesh K. - Mentor & Pro Trad...",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
];

export function TradersFeedbackSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="text-accent-100 font-brand-primary selection:bg-secondary-500 relative w-full overflow-hidden bg-[#05080c] px-4 py-16 selection:text-black sm:px-6 lg:px-8">
      {/* Background Ambience / Glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-72 w-xl -translate-x-1/2 rounded-full opacity-15 blur-[160px]"
        style={{ backgroundColor: "var(--primary-600)" }}
      />

      {/* Main Container Query Wrapper */}
      <div className="@container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-14">
          <h2 className="text-accent-50 text-3xl font-extrabold tracking-tight sm:text-4xl @3xl:text-5xl">
            Traders Feedback
          </h2>
          <p className="text-accent-300/80 px-4 text-xs leading-relaxed font-normal sm:text-sm">
            Hear directly from traders who have transformed their FNO Hedging
            Setup.
          </p>
        </div>

        {/* Video Reel Cards Carousel / Grid */}
        <div className="grid grid-cols-1 gap-4 lg:gap-5 @xs:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-5">
          {testimonials.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveVideo(item.videoEmbedUrl)}
              className="group hover:border-secondary-500/70 relative flex aspect-9/16 cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-[#1e3458]/70 bg-linear-to-b from-[#13243f] to-[#0d1727] p-3 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Card Top: Profile Header */}
              <div className="z-10 flex items-start gap-2.5">
                <div className="border-secondary-500/50 bg-accent-950 h-8 w-8 shrink-0 overflow-hidden rounded-full border">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="text-accent-50 truncate text-[11px] font-bold">
                    {item.videoTitle}
                  </p>
                  <p className="text-accent-400 truncate text-[9px]">
                    {item.videoSubtitle}
                  </p>
                  <p className="text-accent-50 mt-1 truncate text-[11px] font-bold">
                    {item.name}
                  </p>
                  <p className="text-accent-300/80 truncate text-[9px]">
                    {item.role} - {item.location}
                  </p>
                </div>
              </div>

              {/* Card Middle: Video Thumbnail with YouTube Red Play Button */}
              <div className="relative my-auto aspect-4/5 w-full overflow-hidden rounded-xl border border-[#233857] bg-black shadow-md">
                <img
                  src={item.thumbnailUrl}
                  alt={item.name}
                  className="h-full w-full object-cover brightness-95 filter transition-transform duration-500 group-hover:scale-105"
                />

                {/* Play Button Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-8.5 w-12 items-center justify-center rounded-xl bg-red-600 shadow-lg shadow-red-950/60 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500">
                    <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
                  </div>
                </div>
              </div>

              {/* Card Bottom: Footer Details */}
              <div className="z-10 space-y-2 border-t border-[#1a2d48] pt-1">
                <div className="text-accent-400 flex items-center justify-between text-[8px]">
                  <div>
                    <span className="block opacity-70">
                      Designed & Developed by
                    </span>
                    <span className="text-accent-200 font-bold">
                      Animesh K.
                    </span>
                  </div>
                  <button
                    type="button"
                    className="text-accent-100 rounded bg-[#1a2d48] px-2 py-1 text-[8px] font-bold hover:text-white"
                  >
                    Book Your Seat Today
                  </button>
                </div>

                {/* Sponsoring / Credential Logo Strip */}
                <div className="flex items-center justify-between gap-1 rounded bg-white/95 px-1 py-1 text-[7px] font-extrabold tracking-tight text-black">
                  <span className="text-[8px] font-black text-red-600">
                    NSE
                  </span>
                  <span className="text-[#3b5998]">motilal</span>
                  <span className="font-serif text-blue-600">TV</span>
                  <span className="text-black">Dhan</span>
                  <span className="text-orange-600">⚡</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="border-accent-800 relative aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="text-accent-100 absolute top-3 right-3 z-10 rounded-full bg-black/70 p-2 transition-colors hover:text-white"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <iframe
              src={`${activeVideo}?autoplay=1`}
              title="Trader Testimonial"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

interface WallOfLoveTestimonial {
  id: string;
  name: string;
  location: string;
  initials: string;
  review: string;
  avatarTone?: "green" | "orange" | "yellow";
}

const wallOfLoveTestimonials: WallOfLoveTestimonial[] = [
  {
    id: "rahul",
    name: "Rahul M.",
    location: "MUMBAI",
    initials: "RM",
    review:
      '"Finally a logical strategy that doesn\'t rely on 15 indicators. Master The FNO Hedging Trading Setup changed my perspective completely."',
  },
  {
    id: "gaurav",
    name: "Gaurav H.",
    location: "NAGPUR",
    initials: "GH",
    review:
      '"The psychology section hit hard. I realized exactly where I was going wrong."',
    avatarTone: "orange",
  },
  {
    id: "nitin",
    name: "Nitin W.",
    location: "PATNA",
    initials: "NW",
    review:
      '"Simple and effective. No lagging indicators, just pure institutional logic."',
  },
  {
    id: "rakesh",
    name: "Rakesh S.",
    location: "KANPUR",
    initials: "RS",
    review:
      '"Highly structured approach. The visual execution flow makes so much sense."',
  },
  {
    id: "simran",
    name: "Simran K.",
    location: "LUDHIANA",
    initials: "SK",
    review:
      '"I am a beginner and I could grasp everything easily. Great teaching style."',
    avatarTone: "yellow",
  },
  {
    id: "vikas",
    name: "Vikas A.",
    location: "AGRA",
    initials: "VA",
    review:
      '"The recording access is a lifesaver. I\'ve rewatched it 3 times to perfect my entries."',
  },
  {
    id: "tushar",
    name: "Tushar M.",
    location: "VADODARA",
    initials: "TM",
    review:
      '"The real deal. Animesh doesn\'t sugarcoat anything, just teaches what actually works."',
  },
  {
    id: "kavita",
    name: "Kavita D.",
    location: "NASHIK",
    initials: "KD",
    review:
      '"My confidence in pulling the trigger has skyrocketed. Thanks to Master The FNO Hedging Trading Setup Method."',
  },
  {
    id: "aditya",
    name: "Aditya L.",
    location: "RAJKOT",
    initials: "AL",
    review:
      '"Absolutely brilliant. I\'ve recovered my previous losses just by waiting for this setup."',
  },
];

const testimonialColumns = [
  [wallOfLoveTestimonials[0], wallOfLoveTestimonials[1]],
  [
    wallOfLoveTestimonials[2],
    wallOfLoveTestimonials[3],
    wallOfLoveTestimonials[4],
  ],
  [wallOfLoveTestimonials[5], wallOfLoveTestimonials[6]],
  [wallOfLoveTestimonials[7], wallOfLoveTestimonials[8]],
];

export function TradersWallOfLoveSection() {
  return (
    <section className="font-brand-primary text-foreground relative w-full overflow-hidden bg-[#03070d] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Background ambience */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-72 w-162.5 -translate-x-1/2 rounded-full opacity-[0.035] blur-[150px]"
        style={{ backgroundColor: "var(--secondary-500)" }}
      />

      <div className="@container relative mx-auto max-w-277.5">
        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <h2 className="text-accent-50 text-[30px] leading-tight font-extrabold tracking-[-0.03em] sm:text-[38px] lg:text-[42px]">
            Traders Wall of Love
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[12px] leading-[1.65] font-medium text-[#87a6ff] sm:text-[13px]">
            Hear from 24 of the 35,000+ traders who have transformed their
            execution with Master
            <br className="hidden sm:block" /> The FNO Hedging Trading Setup™.
          </p>
        </div>

        {/* ========================= */}
        {/* DESKTOP STAGGERED GRID */}
        {/* ========================= */}

        <div className="hidden grid-cols-4 gap-5 lg:grid">
          {testimonialColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-5">
              {column.map((testimonial) => (
                <WallOfLoveCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          ))}
        </div>

        {/* ========================= */}
        {/* TABLET */}
        {/* ========================= */}

        <div className="hidden grid-cols-2 gap-5 sm:grid lg:hidden">
          {wallOfLoveTestimonials.map((testimonial) => (
            <WallOfLoveCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* ========================= */}
        {/* MOBILE */}
        {/* ========================= */}

        <div className="grid grid-cols-1 gap-4 sm:hidden">
          {wallOfLoveTestimonials.map((testimonial) => (
            <WallOfLoveCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WallOfLoveCard({
  testimonial,
}: {
  testimonial: WallOfLoveTestimonial;
}) {
  const avatarClasses =
    testimonial.avatarTone === "orange"
      ? "border-orange-600/45 bg-orange-950/50 text-orange-400"
      : testimonial.avatarTone === "yellow"
        ? "border-yellow-500/45 bg-yellow-950/40 text-yellow-400"
        : "border-emerald-500/45 bg-emerald-950/55 text-emerald-400";

  return (
    <article className="border-accent-900/45 group hover:border-secondary-500/15 relative w-full overflow-hidden rounded-[14px] border bg-[#090d13] px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(134,241,0,0.04)]">
      {/* subtle top highlight */}
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />

      {/* Stars */}
      <div className="mb-2.5 flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            viewBox="0 0 24 24"
            className="h-3.25 w-3.25 fill-yellow-400 text-yellow-400"
            aria-hidden="true"
          >
            <path d="M12 2.4l2.86 5.8 6.4.93-4.63 4.51 1.09 6.37L12 17l-5.72 3.01 1.09-6.37-4.63-4.51 6.4-.93L12 2.4z" />
          </svg>
        ))}
      </div>

      {/* Review */}
      <p className="text-accent-200/90 text-[12px] leading-[1.55] font-medium sm:text-[12.5px]">
        {testimonial.review}
      </p>

      {/* User */}
      <div className="mt-5 flex items-center gap-3">
        <div
          className={`flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full border text-[11px] font-extrabold ${avatarClasses} `}
        >
          {testimonial.initials}
        </div>

        <div className="min-w-0">
          <p className="text-accent-50 truncate text-[11px] font-bold">
            {testimonial.name}
          </p>

          <p className="text-accent-500 mt-0.5 text-[8px] font-semibold tracking-[0.11em] uppercase">
            {testimonial.location}
          </p>
        </div>
      </div>
    </article>
  );
}

interface TradingResult {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
}

const tradingResults: TradingResult[] = [
  {
    id: 1,
    image: "/webinar-images/image-1.jpeg",
    title: "Bank Nifty — Trade Result",
    subtitle: "Entry → Exit",
  },
  {
    id: 2,
    image: "/webinar-images/image-2.jpeg",
    title: "Nifty — Trade Result",
    subtitle: "Structured Setup",
  },
  {
    id: 3,
    image: "/webinar-images/image-3.jpeg",
    title: "Option Selling — Result",
    subtitle: "Risk Defined Setup",
  },
];

export function TradingResultsLaptopSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeResult = tradingResults[activeIndex];

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === tradingResults.length - 1 ? 0 : current + 1,
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? tradingResults.length - 1 : current - 1,
    );
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#03070d] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Background Glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 h-80 w-175 max-w-full -translate-x-1/2 rounded-full opacity-[0.07] blur-[140px]"
          style={{ backgroundColor: "var(--secondary-500)" }}
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Header */}
          {/* <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
            <div className="border-secondary-500/20 bg-secondary-500/5 mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5">
              <TrendingUp className="text-secondary-400 h-3.5 w-3.5" />

              <span className="text-secondary-400 text-[10px] font-bold tracking-[0.14em] uppercase">
                Real Trading Results
              </span>
            </div>

            <h2 className="text-accent-50 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              What If F&O Trading Was Approached Differently{" "}
            </h2>

            <div className={cn(`pt-10 *:mb-2`)}>
              <p>Instead of asking:</p>
              <p>“Where will the market go?”</p>
              <p>A structured hedging approach asks:</p>
              <p>
                “What happens to my position if the market moves up, down, or
                becomes highly volatile?”
              </p>
              <p>This shifts the focus from prediction → preparation.</p>
            </div>

            <h2 className="text-accent-50 pt-20 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              In This Webinar, Discover the Benefits of Combining F&O Selling
              With Hedging{" "}
              <span className="text-secondary-400">In Action</span>
            </h2>

            <div className={cn(`m-auto max-w-max pt-10 *:mb-2`)}>
              <ul className={cn(`flex list-disc flex-col items-start`)}>
                <li className={cn(``)}>Defined and controlled risk</li>
                <li className={cn(``)}>Strategic option selling</li>
                <li className={cn(``)}>Protection against adverse movements</li>
                <li className={cn(``)}>Position structuring</li>
                <li className={cn(``)}>Risk-to-reward planning</li>
                <li className={cn(``)}>Volatility-aware decision making</li>
                <li className={cn(``)}>Position adjustment concepts</li>
                <li className={cn(``)}>Scenario-based trade management</li>
                <li className={cn(``)}>More disciplined F&O execution</li>
              </ul>
            </div>

            <div className="border-secondary-700/60 mt-12 inline-flex flex-col items-center gap-2.5 rounded-full border bg-[#091512]/90 px-5 py-3 shadow-[0_0_24px_-4px_rgba(104,193,0,0.15)] backdrop-blur-md sm:mt-16">
              <div className={cn(`flex gap-2`)}>
                <CheckCircle2 className="text-secondary-400 h-4 w-4 shrink-0" />
                <span className="text-accent-100 text-xs font-semibold tracking-wide sm:text-sm">
                  The problem isn't always finding another strategy.
                </span>
              </div>
              <div className={cn(`flex gap-2`)}>
                <CheckCircle2 className="text-secondary-400 h-4 w-4 shrink-0" />
                <span className="text-accent-100 text-xs font-semibold tracking-wide sm:text-sm">
                  Sometimes the bigger problem is knowing how to manage the
                  position after entering it.
                </span>
              </div>
            </div>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#87a6ff] sm:text-base">
              Explore real trade examples and understand how the framework can
              be applied to different market conditions.
            </p>
          </div> */}

          {/* Main Card */}
          <div className="border-secondary-500/15 relative overflow-hidden rounded-3xl border bg-[#080e13] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-8 lg:p-12">
            {/* Card Glow */}
            <div className="bg-secondary-500/5 pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-[100px]" />

            {/* Top Label */}
            <div className="relative z-10 mb-8 flex items-center justify-between">
              <div>
                <p className="text-secondary-400 text-[10px] font-bold tracking-[0.15em] uppercase">
                  Trade Breakdown
                </p>

                <h3 className="text-accent-50 mt-1 text-base font-bold sm:text-lg">
                  {activeResult.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsFullscreen(true)}
                className="border-accent-800/60 bg-accent-950/60 text-accent-300 hover:border-secondary-500/40 hover:text-secondary-400 flex h-9 w-9 items-center justify-center rounded-lg border transition-all"
                aria-label="View trading result fullscreen"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>

            {/* Laptop */}
            <div className="relative mx-auto w-full max-w-4xl">
              <LaptopMockup image={activeResult.image} />

              {/* Laptop Caption */}
              <div className="mt-5 text-center">
                <p className="text-accent-200 text-xs font-semibold">
                  {activeResult.title}
                </p>

                {activeResult.subtitle && (
                  <p className="text-accent-500 mt-1 text-[10px]">
                    {activeResult.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Navigation */}
            {tradingResults.length > 1 && (
              <div className="relative z-10 mt-8 flex items-center justify-center gap-5">
                <button
                  type="button"
                  onClick={previousSlide}
                  className="border-accent-800 text-accent-300 hover:border-secondary-500/40 hover:text-secondary-400 flex h-10 w-10 items-center justify-center rounded-full border bg-[#0b1116] transition-all"
                  aria-label="Previous trading result"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {tradingResults.map((result, index) => (
                    <button
                      key={result.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show trading result ${index + 1}`}
                      className={[
                        "h-1.5 rounded-full transition-all duration-300",
                        index === activeIndex
                          ? "bg-secondary-400 w-7"
                          : "bg-accent-700 hover:bg-accent-500 w-1.5",
                      ].join(" ")}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="border-accent-800 text-accent-300 hover:border-secondary-500/40 hover:text-secondary-400 flex h-10 w-10 items-center justify-center rounded-full border bg-[#0b1116] transition-all"
                  aria-label="Next trading result"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* Small Trust / Disclaimer */}
          <p className="text-accent-600 mx-auto mt-5 max-w-2xl text-center text-[9px] leading-relaxed">
            Trading involves market risk. Past performance or example trades
            shown here do not guarantee future results.
          </p>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
            aria-label="Close fullscreen"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="border-accent-800 max-h-[90vh] max-w-6xl overflow-hidden rounded-xl border bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeResult.image}
              alt={activeResult.title}
              className="max-h-[90vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

function PointsChart() {
  const { paymentFunction } = usePaymentContext();
  return (
    <div className={cn(`bg-[#03070d]`)}>
      <section className="mx-auto max-w-3xl pt-10 font-sans text-white">
        <div>
          <h2 className="text-accent-500 mb-3 text-4xl font-bold">
            What If F&O Trading Was Approached Differently?
          </h2>

          <p className="mb-2 text-gray-300">Instead of asking:</p>
          <p className="mb-4 font-medium text-gray-200">
            “Where will the market go?”
          </p>

          <p className="mb-2 text-gray-300">
            A structured hedging approach asks:
          </p>
          <p className="mb-4 font-medium text-gray-200">
            “What happens to my position if the market moves up, down, or
            becomes highly volatile?”
          </p>

          <p className="font-medium text-gray-300">
            This shifts the focus from prediction → preparation.
          </p>
        </div>

        <div>
          <p className="mb-3 text-gray-300">
            You will understand the concept of:
          </p>

          <ul className="mb-4 list-inside list-disc space-y-2 text-gray-300">
            <li>Defined and controlled risk</li>
            <li>Strategic option selling</li>
            <li>Protection against adverse movements</li>
            <li>Position structuring</li>
            <li>Risk-to-reward planning</li>
            <li>Volatility-aware decision making</li>
            <li>Position adjustment concepts</li>
            <li>Scenario-based trade management</li>
            <li>More disciplined F&O execution</li>
          </ul>

          <p className="text-sm text-gray-400 italic">
            Without revealing the complete course methodology.
          </p>
        </div>
      </section>

      <div className="min-h-screen p-8 font-sans text-white">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-accent-500 mb-3 text-4xl font-bold">
            Without Charts &amp; Indicators
          </h2>

          <h3 className="text-xl font-bold">
            Can F&amp;O Decision-Making Be More Systematic?
          </h3>

          <p className="text-base text-gray-200">
            Many traders associate options trading with:
          </p>

          <div className="font-semibold tracking-wide text-white">
            Candlestick &rarr; Indicators &rarr; Signals &rarr; Entry
          </div>

          <p className="text-base text-gray-200">
            But options can also be approached through a{" "}
            <span className="font-bold">rules-based framework</span> involving
            factors such as:
          </p>

          <ul className="list-inside list-disc space-y-2 pl-2 text-gray-200">
            <li>Market movement scenarios</li>
            <li>Option positioning</li>
            <li>Risk exposure</li>
            <li>Volatility</li>
            <li>Time to expiry</li>
            <li>Premium behaviour</li>
            <li>Position Greeks</li>
            <li>Maximum acceptable risk</li>
            <li>Hedging requirements</li>
            <li>Adjustment triggers</li>
          </ul>
        </div>

        <div className="p-8 font-sans text-white">
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-lg text-gray-300">Marketing headline:</p>
            <div className="space-y-2 border-l-4 border-gray-700 pl-4">
              <h2 className="text-sm font-bold md:text-lg">
                Less Dependence on &ldquo;What Does the Chart Say?&rdquo;
              </h2>
              <h2 className="text-sm font-bold md:text-lg">
                More Focus on &ldquo;What Is My Risk?&rdquo;
              </h2>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-base text-gray-200">Traditional approach</p>

          <div className="font-semibold tracking-wide text-white">
            Chart → Indicator → Signal → Trade
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-6 pt-6">
          <p className="text-base text-gray-200">Risk-managed approach</p>

          <div className="font-semibold tracking-wide text-white">
            Market Scenario → Position → Risk → Hedge → Adjustment → Exit
          </div>
        </div>
      </div>

      <div>
        <div className="p-8 font-sans text-white">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-accent-500 mb-3 text-4xl font-bold">
              Why Do Experienced Traders Think About Hedging?
            </h2>
            <p className="text-sm md:text-lg">
              Hedging can potentially help traders:
            </p>

            <h2 className="text-lg font-bold text-gray-300">
              🛡 Manage downside exposure
            </h2>
            <p className="text-sm md:text-lg">
              A hedge may help reduce the impact of an adverse market move.
            </p>

            <h2 className="text-lg font-bold text-gray-300">
              📉 Control catastrophic-loss risk
            </h2>
            <p className="text-sm md:text-lg">
              Rather than leaving the position completely exposed, traders can
              structure protection around it.
            </p>

            <h2 className="text-lg font-bold text-gray-300">
              🧠 Reduce emotional decision-making
            </h2>
            <p className="text-sm md:text-lg">
              Predefined rules can reduce impulsive decisions during volatile
              markets.
            </p>

            <h2 className="text-lg font-bold text-gray-300">
              ⚖️ Structure risk and reward
            </h2>
            <p className="text-sm md:text-lg">
              Instead of focusing only on potential profit, traders can consider
              the risk they are taking to pursue that profit.
            </p>

            <h2 className="text-lg font-bold text-gray-300">
              ⏳ Understand the impact of time
            </h2>
            <p className="text-sm md:text-lg">
              Option positions behave differently as expiry approaches.
              Understanding time decay can become an important part of position
              management
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-accent-500 mb-3 text-4xl font-bold">
            The “Four Market Scenarios”
          </h2>

          <h3 className="text-xl font-bold">
            What Happens to Your Position When the Market…?
          </h3>

          <h2 className="text-lg font-bold text-gray-300">📈 Moves Up</h2>
          <p className="text-sm md:text-lg">
            Can your position handle a strong upside move?
          </p>

          <h2 className="text-lg font-bold text-gray-300">📉 Moves Down</h2>
          <p className="text-sm md:text-lg">
            What happens if the market falls faster than expected?
          </p>

          <h2 className="text-lg font-bold text-gray-300">
            ↔️ Remains Range-Bound
          </h2>
          <p className="text-sm md:text-lg">
            How does time decay potentially affect an option-selling position?
          </p>

          <h2 className="text-lg font-bold text-gray-300">
            ⚡ Volatility Explodes
          </h2>
          <p className="text-sm md:text-lg">
            What happens when option premiums and risk change rapidly?
          </p>
        </div>

        <div className="p-8 font-sans text-white">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="space-y-2 border-l-4 border-gray-700 pl-4">
              <h2 className="text-sm font-bold md:text-lg">
                A professional mindset doesn't prepare for only one market
                direction. It prepares for multiple scenarios.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-3xl font-sans text-white">
        <h2 className="text-accent-500 mb-3 text-4xl font-bold">
          Risk Management Section
        </h2>

        <h2 className="mb-3 text-xl font-semibold">
          The Real Power May Not Be the Entry
        </h2>

        <p className="mb-3 text-gray-300">
          Many traders spend enormous time searching for:
        </p>

        <ul className="mb-6 list-inside list-disc space-y-1 text-gray-300">
          <li>The perfect entry</li>
          <li>The perfect indicator</li>
          <li>The perfect setup</li>
          <li>The perfect prediction</li>
        </ul>

        <p className="mb-4 text-gray-300">
          But professional risk management starts with different questions:
        </p>

        <div className="space-y-2 border-l-2 border-gray-600 pl-4 text-gray-200">
          <p className="font-medium">How much can I lose?</p>
          <p className="font-medium">Where is my risk concentrated?</p>
          <p className="font-medium">
            What happens if the market moves against me?
          </p>
          <p className="font-medium">When should I adjust?</p>
          <p className="font-medium">When should I exit?</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl pt-10 font-sans text-white">
        <h2 className="text-accent-500 mb-3 text-4xl font-bold">
          F&O Selling Benefits — Carefully Worded
        </h2>

        <h2 className="mb-3 text-xl font-semibold">
          Why Do Traders Consider Option Selling?
        </h2>

        <p className="mb-3 text-gray-300">
          Option selling is often discussed because option premiums are
          influenced by factors including:
        </p>

        <ul className="mb-6 list-inside list-disc space-y-1 text-gray-300">
          <li>Time decay</li>
          <li>Implied volatility</li>
          <li>Underlying price movement</li>
          <li>Demand and supply of options</li>
          <li>Expiry dynamics</li>
        </ul>

        <p className="mb-3 text-gray-300">
          Potential advantages of structured option selling may include:
        </p>

        <ul className="mb-6 list-inside list-disc space-y-1 text-gray-300">
          <li>Ability to build probability-oriented positions</li>
          <li>Potential benefit from time decay</li>
          <li>Flexible position construction</li>
          <li>Multiple ways to define or modify risk</li>
          <li>Ability to combine selling with protective options</li>
        </ul>

        <div className="border-l-2 border-gray-600 py-1 pl-4 text-xl font-semibold text-gray-200">
          <p>
            Option selling also carries substantial risks and can result in
            significant losses. Hedging reduces certain risks but does not
            eliminate risk.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl pt-10 font-sans text-white">
        <h2 className="text-accent-500 mb-3 text-4xl font-bold">
          The “No Indicator Dependency”
        </h2>

        <h2 className="mb-3 text-xl font-semibold">
          You Don't Need 10 Indicators to Understand Risk
        </h2>

        <p className="mb-2 text-gray-300">
          Instead of showing a screen filled with:
        </p>

        <p className="mb-4 font-mono text-gray-300">
          RSI + MACD + Stochastic + Bollinger Bands + Moving Averages + dozens
          of signals...
        </p>

        <p className="mb-4 text-gray-300">Show:</p>

        <div className="mb-6 space-y-3 font-semibold">
          <p>POSITION</p>
          <p className="text-gray-500">↓</p>
          <p>RISK</p>
          <p className="text-gray-500">↓</p>
          <p>HEDGE</p>
          <p className="text-gray-500">↓</p>
          <p>ADJUSTMENT</p>
          <p className="text-gray-500">↓</p>
          <p>EXIT</p>
        </div>

        <div className="border-l-2 border-gray-600 py-1 pl-4 text-xl font-semibold text-gray-200">
          <p className="font-medium">
            From Indicator Overload to Risk-Based Thinking
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl pt-10 font-sans text-white">
        <h2 className="text-accent-500 mb-3 text-4xl font-bold">
          What You'll Discover in the Webinar
        </h2>

        <p className="mb-2 text-gray-300 italic">
          Don't disclose the actual course curriculum.
        </p>

        <p className="mb-4 text-gray-300">Use curiosity-based statements:</p>

        <h2 className="mb-3 text-xl font-semibold">You'll Get a Preview of:</h2>

        <ul className="list-inside list-disc space-y-2 text-gray-300">
          <li>How option selling fundamentally works</li>
          <li>Why naked exposure can be dangerous</li>
          <li>Why hedging matters</li>
          <li>How traders think about defined-risk structures</li>
          <li>How market scenarios can influence position management</li>
          <li>Why position adjustments matter</li>
          <li>How time and volatility can affect option positions</li>
          <li>
            How a rules-based framework can reduce emotional decision-making
          </li>
          <li>
            The difference between{" "}
            <strong className="text-white">taking risk</strong> and{" "}
            <strong className="text-white">managing risk</strong>
          </li>
        </ul>
      </section>

      <section className="mx-auto max-w-3xl space-y-8 pt-10 font-sans text-white">
        <div>
          <h2 className="text-accent-500 mb-3 text-4xl font-bold">
            Who Should Attend?
          </h2>
          <p className="mb-4 font-semibold text-gray-300">
            This Webinar May Be Useful For:
          </p>

          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="font-bold text-white">Beginner Traders</h3>
              <p>
                Want to understand the fundamentals of option selling and
                hedging.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white">Existing Option Traders</h3>
              <p>
                Already trading options but want to understand risk management
                better.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white">Option Sellers</h3>
              <p>Want to learn why hedging and position management matter.</p>
            </div>

            <div>
              <h3 className="font-bold text-white">Working Professionals</h3>
              <p>
                Looking for a more structured way to study F&O rather than
                continuously watching charts.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white">Experienced Traders</h3>
              <p>
                Interested in advanced concepts of portfolio protection and
                position adjustment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-8 pt-10 font-sans text-white">
        <div>
          <h2 className="text-accent-500 mb-3 text-4xl font-bold">
            Who Should NOT Attend?
          </h2>
          <p className="mb-3 text-gray-400 italic">
            This is a powerful credibility section.
          </p>

          <p className="mb-3 font-semibold text-gray-300">
            This Webinar Is NOT For You If:
          </p>

          <ul className="mb-6 list-inside list-disc space-y-2 text-gray-300">
            <li>You are looking for guaranteed returns</li>
            <li>You want a "100% accuracy" strategy</li>
            <li>You believe options trading is risk-free</li>
            <li>You want a magic indicator</li>
            <li>You expect guaranteed monthly income</li>
            <li>You are unwilling to understand risk</li>
          </ul>

          <p className="mb-2 font-semibold text-white">Strong line:</p>

          <div className="border-l-2 border-gray-600 py-1 pl-4 text-gray-200">
            <p className="font-medium">
              This is about learning a framework—not buying a promise.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-8 pt-10 font-sans text-white">
        <div className="space-y-4">
          <h2 className="mb-4 text-xl font-semibold">
            Ready to Look at F&O Differently?
          </h2>

          <div className="space-y-2 border-l-2 border-gray-600 py-1 pl-4 text-gray-200">
            <p className="font-medium">
              Stop thinking only about “Where will the market go?”
            </p>
            <p className="font-medium">
              Start thinking about “How can I structure and manage my risk?”
            </p>
          </div>

          <div className="pt-4">
            <div className="font-bold">JOIN THE WEBINAR</div>
          </div>

          <div className="flex items-center space-x-2 pt-2 text-sm">
            <span>Learn</span>
            <span>→</span>
            <span>Understand</span>
            <span>→</span>
            <span>Evaluate</span>
            <span>→</span>
            <span>Decide</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-8 pt-10 font-sans text-white">
        <div>
          <h2 className="mb-3 text-xl font-semibold">Limited Webinar Seats</h2>

          <div className="mb-4 border-l-2 border-gray-600 py-1 pl-4 text-gray-200">
            <p>
              We are keeping the session limited so that participants can follow
              the concepts properly.
            </p>
          </div>

          <div className="mb-4 pt-2">
            <button
              className="animate-bounce rounded bg-green-500 px-6 py-3 font-bold text-black transition-colors hover:bg-gray-200"
              onClick={paymentFunction}
            >
              Reserve Your Seat Now @9
            </button>
          </div>

          <p className="text-sm font-bold text-gray-400 italic">
            Avoid fake countdowns or artificial scarcity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-8 pt-10 font-sans text-white">
        <div className="space-y-4">
          <h2 className="text-accent-500 mb-3 text-4xl font-bold">
            Disclaimer — Important
          </h2>
          <p className="text-gray-300">
            Put a visible disclaimer near the CTA and again at the bottom of the
            page.
          </p>

          <h3 className="font-semibold text-white">Risk Disclaimer</h3>

          <div className="border-l-2 border-gray-600 py-1 pl-4 text-sm leading-relaxed text-gray-300">
            <p>
              <strong className="text-white">Disclaimer:</strong> This
              webinar/course is strictly for educational and informational
              purposes only and should not be construed as investment advice,
              financial advice, research advice, or a recommendation to buy or
              sell any security, derivative, or financial instrument. Futures &
              Options trading involves substantial risk and may result in
              significant financial losses, including the loss of capital.
              Option selling can involve substantial and, in certain
              circumstances, theoretically unlimited losses depending on the
              position structure. Hedging may reduce certain risks but does not
              eliminate losses or guarantee profits. Examples, illustrations,
              hypothetical scenarios, and past performance, if any, are for
              educational purposes only and do not guarantee future results.
              Participants should independently evaluate their financial
              circumstances, risk tolerance and suitability and consult a
              SEBI-registered investment adviser or other appropriately
              qualified professional before making investment decisions.
            </p>
          </div>

          <div className="mt-10 border-l-2 border-gray-600 py-1 pl-4 text-lg text-gray-200">
            <p className="font-medium">
              No profit, return, accuracy, or income is guaranteed or promised.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-8 pt-10 font-sans text-white">
        <div className="border-l-2 border-gray-600 py-1 pl-4 text-lg text-gray-200">
          <p className="font-medium italic">
            “F&O Selling Is Not Just About Collecting Premium. It's About
            Understanding, Structuring and Managing Risk.”
          </p>
        </div>

        <div className="border-l-2 border-gray-600 py-1 pl-4 text-lg text-gray-200">
          <p className="font-medium italic">
            “Learn a Rules-Based Approach to F&O Selling & Hedging — Without
            Depending on Conventional Chart Reading or a Screen Full of
            Indicators.”
          </p>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   LAPTOP MOCKUP
   ============================================================ */

function LaptopMockup({ image }: { image: string }) {
  return (
    <div className="relative mx-auto w-full">
      {/* Laptop Screen Outer Body */}
      <div className="relative mx-auto w-[92%] sm:w-[88%]">
        {/* Screen Bezel */}
        <div className="relative rounded-t-xl border-[5px] border-[#242b32] bg-[#050709] p-1.25 shadow-[0_0_0_1px_#11161b,0_25px_50px_rgba(0,0,0,0.5)] sm:rounded-t-2xl sm:border-[7px] sm:p-1.75">
          {/* Camera */}
          <div className="absolute top-0.5 left-1/2 z-20 h-1 w-1 -translate-x-1/2 rounded-full bg-[#15191d] sm:top-0.75 sm:h-1.5 sm:w-1.5" />

          {/* Screen */}
          <div className="relative aspect-video overflow-hidden rounded-[3px] bg-black">
            <img
              src={image}
              alt="Trading result"
              className="h-full w-full object-cover"
            />

            {/* Screen Reflection */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/6 via-transparent to-transparent" />
          </div>
        </div>

        {/* Laptop Hinge */}
        <div className="relative mx-auto h-1 w-[96%] bg-linear-to-r from-transparent via-[#444b52] to-transparent sm:h-1.5" />

        {/* Laptop Base */}
        <div className="relative mx-auto h-5 w-full">
          {/* Main Base */}
          <div className="absolute inset-x-0 top-0 h-3 rounded-b-[45%] bg-linear-to-b from-[#444b52] via-[#292f35] to-[#171c21] shadow-[0_8px_20px_rgba(0,0,0,0.5)] sm:h-4" />

          {/* Front Lip */}
          <div className="absolute top-2 left-1/2 h-2 w-[28%] -translate-x-1/2 rounded-b-xl bg-[#3a4148] sm:top-3 sm:h-2.5" />

          {/* Base Highlight */}
          <div className="absolute top-0 right-[8%] left-[8%] h-px bg-white/10" />
        </div>
      </div>

      {/* Laptop Shadow */}
      <div className="absolute -bottom-3 left-1/2 h-8 w-[75%] -translate-x-1/2 rounded-full bg-black/70 blur-xl" />
    </div>
  );
}
