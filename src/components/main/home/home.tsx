import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CandlestickChart,
  ChevronRight,
  Clock3,
  LineChart,
  Play,
  Search,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

const navItems = ["Programs", "Courses", "Mentors", "Learning Path", "Stories"];

const categories = [
  {
    icon: CandlestickChart,
    title: "Technical Analysis",
    description:
      "Charts, price action, market structure and disciplined execution.",
    courses: "12 Courses",
  },
  {
    icon: TrendingUp,
    title: "Options Trading",
    description: "Learn option buying, selling, hedging and risk management.",
    courses: "9 Courses",
  },
  {
    icon: LineChart,
    title: "Price Action",
    description: "Understand liquidity, structure and institutional behaviour.",
    courses: "8 Courses",
  },
  {
    icon: WalletCards,
    title: "Risk Management",
    description: "Build disciplined position sizing and capital protection.",
    courses: "6 Courses",
  },
];

const courses = [
  {
    id: 1,
    tag: "BESTSELLER",
    title: "Master The Cashflow Trading Setup™",
    description:
      "A structured framework to understand market structure, liquidity sweeps and momentum.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=900",
    mentor: "Sanjib Gangully",
    rating: "4.9",
    reviews: "2,846",
    students: "12,500+",
    duration: "18 Hours",
    price: "₹1,999",
    oldPrice: "₹4,999",
  },
  {
    id: 2,
    tag: "POPULAR",
    title: "Options Selling & Hedging Masterclass",
    description:
      "Build structured option-selling systems with defined exposure, hedging and disciplined execution.",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=900",
    mentor: "Sanjib Gangully",
    rating: "4.8",
    reviews: "1,936",
    students: "8,200+",
    duration: "15 Hours",
    price: "₹1,499",
    oldPrice: "₹3,999",
  },
  {
    id: 3,
    tag: "NEW",
    title: "Price Action From Beginner to Advanced",
    description:
      "Understand clean charts, support, resistance, breakouts, liquidity and high-probability setups.",
    image:
      "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=900",
    mentor: "Sanjib Gangully",
    rating: "4.9",
    reviews: "892",
    students: "4,900+",
    duration: "12 Hours",
    price: "₹999",
    oldPrice: "₹2,499",
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Structured Learning",
    description:
      "Progress from fundamentals to advanced execution through carefully designed learning paths.",
  },
  {
    icon: Users,
    title: "Practitioner-led",
    description:
      "Learn from active market practitioners with years of real trading experience.",
  },
  {
    icon: ShieldCheck,
    title: "Risk First",
    description:
      "Risk management and disciplined execution are taught before profit expectations.",
  },
  {
    icon: Play,
    title: "Learn Anytime",
    description:
      "Access lessons, recordings and resources whenever you need them.",
  },
];

const stats = [
  {
    value: "35K+",
    label: "Learners Guided",
  },
  {
    value: "17+",
    label: "Years in Markets",
  },
  {
    value: "25+",
    label: "Courses & Workshops",
  },
  {
    value: "4.9",
    label: "Average Rating",
  },
];

const testimonials = [
  {
    initials: "RM",
    name: "Rahul M.",
    role: "Options Trader",
    review:
      "The biggest change was learning to think in terms of process rather than chasing every market move.",
  },
  {
    initials: "PK",
    name: "Priya K.",
    role: "Working Professional",
    review:
      "The learning path is extremely structured. I finally understand why a trade works instead of copying entries.",
  },
  {
    initials: "AS",
    name: "Amit S.",
    role: "Independent Trader",
    review:
      "Risk management and market structure completely changed the way I approach trading.",
  },
];

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="font-brand-primary bg-background text-foreground relative min-h-svh overflow-x-hidden">
      {/* ======================================================= */}
      {/* BACKGROUND */}
      {/* ======================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--accent-950)_1px,transparent_1px),linear-gradient(to_bottom,var(--accent-950)_1px,transparent_1px)] bg-size-[56px_56px] opacity-[0.055] dark:bg-[linear-gradient(to_right,var(--accent-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--accent-100)_1px,transparent_1px)] dark:opacity-[0.08]" />

        <div className="bg-secondary-300/20 dark:bg-secondary-700/10 absolute -top-40 -left-40 h-162.5 w-162.5 rounded-full blur-[170px]" />

        <div className="bg-primary-300/20 dark:bg-primary-700/15 absolute top-125 -right-48 h-162.5 w-162.5 rounded-full blur-[190px]" />

        <div className="bg-accent-300/15 dark:bg-accent-800/10 absolute top-300 left-1/3 h-125 w-175 rounded-full blur-[190px]" />
      </div>

      {/* ======================================================= */}
      {/* CONTENT */}
      {/* ======================================================= */}

      <div className="relative z-10 pt-25.5 sm:pt-27 md:pt-45">
        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section className="mx-auto grid max-w-375 items-center gap-12 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
          {/* Hero left */}

          <div>
            <div className="border-primary-200 bg-primary-50 dark:border-primary-800 dark:bg-primary-950 mb-6 inline-flex max-w-full items-center gap-2 rounded-full border px-4 py-2">
              <BadgeCheck className="text-primary-600 dark:text-primary-300 h-4 w-4 shrink-0" />

              <span className="text-primary-800 dark:text-primary-200 text-[10px] leading-4 font-extrabold tracking-wide uppercase sm:text-[11px]">
                Trading Education Built Differently
              </span>
            </div>

            <h1 className="text-foreground max-w-190 text-[44px] leading-[0.98] font-extrabold tracking-[-0.055em] sm:text-[60px] xl:text-[72px]">
              Learn trading.
              <span className="mt-2 block">
                Build{" "}
                <span className="from-primary-500 via-primary-400 to-secondary-600 dark:from-primary-300 dark:via-primary-400 dark:to-secondary-400 bg-linear-to-r bg-clip-text text-transparent">
                  real skill.
                </span>
              </span>
            </h1>

            <p className="text-accent-700 dark:text-accent-300 mt-7 max-w-162.5 text-[15px] leading-[1.7] font-medium sm:text-[16px]">
              Learn stock market, price action, options trading, risk management
              and disciplined execution through practical programs designed for
              serious learners.
            </p>

            {/* Hero search */}

            <div className="border-accent-200 bg-accent-50 dark:border-accent-800 dark:bg-accent-950 mt-8 flex max-w-162.5 items-center rounded-2xl border p-2 shadow-xl">
              <Search className="text-accent-500 ml-3 h-5 w-5 shrink-0" />

              <input
                placeholder="Search courses, strategies, options..."
                className="placeholder:text-accent-500 text-foreground min-w-0 flex-1 bg-transparent px-3 py-3 text-[12px] outline-none sm:text-[13px]"
              />

              <button
                type="button"
                className="bg-foreground text-background hidden rounded-xl px-6 py-3.5 text-[12px] font-extrabold transition-opacity hover:opacity-90 sm:block"
              >
                Search
              </button>
            </div>

            {/* Trust */}

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {[
                {
                  icon: BadgeCheck,
                  label: "Practitioner-led",
                },
                {
                  icon: Users,
                  label: "35,000+ learners",
                },
                {
                  icon: ShieldCheck,
                  label: "Risk-first approach",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-2">
                    <Icon className="text-secondary-700 dark:text-secondary-400 h-4 w-4" />

                    <span className="text-accent-700 dark:text-accent-300 text-[11px] font-bold">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero learning card */}

          <div className="relative">
            <div className="bg-primary-400/15 dark:bg-primary-600/10 absolute inset-12 rounded-full blur-[120px]" />

            <div className="border-accent-800 bg-accent-950 relative overflow-hidden rounded-3xl border p-5 shadow-2xl sm:rounded-[28px] sm:p-8">
              <div className="bg-secondary-500/10 absolute -top-24 -right-24 h-80 w-80 rounded-full blur-[110px]" />

              <div className="relative z-10">
                <div className="mb-7 flex items-start justify-between gap-5">
                  <div>
                    <p className="text-secondary-300 text-[10px] font-extrabold tracking-[0.15em] uppercase">
                      Featured Learning Path
                    </p>

                    <h2 className="text-accent-50 mt-2 text-[22px] leading-tight font-extrabold sm:text-[26px]">
                      From Beginner to Disciplined Trader
                    </h2>
                  </div>

                  <button
                    type="button"
                    className="border-secondary-500/30 bg-secondary-500/10 text-secondary-300 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border sm:h-12 sm:w-12"
                  >
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    "Market Foundations",
                    "Price Action & Structure",
                    "Options & Derivatives",
                    "Risk & Trade Management",
                    "Execution Psychology",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="border-accent-800 bg-accent-900/35 flex items-center gap-3 rounded-[14px] border px-3 py-4 sm:gap-4 sm:px-4"
                    >
                      <div className="bg-secondary-400 text-secondary-950 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold">
                        {index + 1}
                      </div>

                      <span className="text-accent-100 text-[12px] font-bold sm:text-[13px]">
                        {step}
                      </span>

                      <ChevronRight className="text-accent-500 ml-auto h-4 w-4 shrink-0" />
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="bg-secondary-400 text-secondary-950 hover:bg-secondary-300 mt-6 flex w-full items-center justify-center gap-2 rounded-[14px] px-5 py-4 text-[12px] font-extrabold transition-all"
                >
                  Start Your Learning Journey
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* STATS */}
        {/* ===================================================== */}

        <section className="mx-auto max-w-375 px-4 sm:px-6 lg:px-8">
          <div className="border-accent-200 bg-accent-50/85 dark:border-accent-800 dark:bg-accent-950/80 grid grid-cols-2 overflow-hidden rounded-[20px] border shadow-sm backdrop-blur-xl lg:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`flex min-h-25 flex-col items-center justify-center px-3 py-5 text-center ${
                  index % 2 !== 0
                    ? "border-accent-200 dark:border-accent-800 border-l"
                    : ""
                } ${
                  index >= 2
                    ? "border-accent-200 dark:border-accent-800 border-t"
                    : ""
                } lg:min-h-27.5 lg:border-t-0 ${
                  index !== 0
                    ? "lg:border-accent-200 dark:lg:border-accent-800 lg:border-l"
                    : ""
                } `}
              >
                <strong className="text-foreground text-[24px] font-extrabold tracking-tight sm:text-[28px]">
                  {item.value}
                </strong>

                <span className="text-accent-600 dark:text-accent-400 mt-1 text-[9px] font-bold tracking-[0.08em] uppercase sm:text-[10px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================== */}
        {/* CATEGORIES */}
        {/* ===================================================== */}

        <section className="mx-auto max-w-375 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-9 flex items-end justify-between gap-5">
            <div>
              <p className="text-primary-600 dark:text-primary-300 text-[11px] font-extrabold tracking-[0.12em] uppercase">
                Explore Topics
              </p>

              <h2 className="text-foreground mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Learn what matters in the market.
              </h2>
            </div>

            <button className="text-primary-700 dark:text-primary-300 hidden items-center gap-2 text-[12px] font-extrabold sm:flex">
              View all categories
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="border-accent-200 group bg-accent-50/85 hover:border-primary-300 dark:border-accent-800 dark:bg-accent-950/75 dark:hover:border-primary-700 rounded-[20px] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300 flex h-12 w-12 items-center justify-center rounded-[14px]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-foreground mt-5 text-[17px] font-extrabold">
                    {category.title}
                  </h3>

                  <p className="text-accent-600 dark:text-accent-400 mt-2 text-[12px] leading-6">
                    {category.description}
                  </p>

                  <div className="text-primary-700 dark:text-primary-300 mt-5 flex items-center justify-between text-[11px] font-extrabold">
                    <span>{category.courses}</span>

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ===================================================== */}
        {/* COURSES */}
        {/* ===================================================== */}

        <section className="border-accent-200 bg-accent-100/35 dark:border-accent-800 dark:bg-accent-950/35 border-y">
          <div className="mx-auto max-w-375 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mb-10">
              <p className="text-primary-600 dark:text-primary-300 text-[11px] font-extrabold tracking-[0.12em] uppercase">
                Popular Programs
              </p>

              <div className="mt-2 flex items-end justify-between gap-5">
                <h2 className="text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Learn from our most popular courses.
                </h2>

                <button className="text-primary-700 dark:text-primary-300 hidden items-center gap-2 text-[12px] font-extrabold md:flex">
                  Browse all courses
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => (
                <article
                  key={course.id}
                  className="border-accent-200 group bg-accent-50 dark:border-accent-800 dark:bg-accent-950 overflow-hidden rounded-[22px] border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="bg-accent-200 dark:bg-accent-900 relative aspect-video overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="bg-accent-950/10 dark:bg-accent-950/25 absolute inset-0" />

                    <span className="bg-secondary-400 text-secondary-950 absolute top-4 left-4 rounded-full px-3 py-1.5 text-[9px] font-extrabold tracking-wide">
                      {course.tag}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-foreground line-clamp-2 text-[18px] leading-snug font-extrabold">
                      {course.title}
                    </h3>

                    <p className="text-accent-600 dark:text-accent-400 mt-2 line-clamp-2 text-[12px] leading-5">
                      {course.description}
                    </p>

                    <p className="text-accent-500 dark:text-accent-400 mt-4 text-[11px] font-bold">
                      {course.mentor}
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-primary-700 dark:text-primary-300 text-[12px] font-extrabold">
                        {course.rating}
                      </span>

                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className="text-primary-500 fill-primary-500 dark:text-primary-400 dark:fill-primary-400 h-3.5 w-3.5"
                          />
                        ))}
                      </div>

                      <span className="text-accent-500 dark:text-accent-400 text-[10px]">
                        ({course.reviews})
                      </span>
                    </div>

                    <div className="text-accent-500 dark:text-accent-400 mt-4 flex flex-wrap gap-4 text-[10px] font-semibold">
                      <div className="flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5" />
                        {course.duration}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5" />
                        {course.students}
                      </div>
                    </div>

                    <div className="border-accent-200 dark:border-accent-800 mt-5 flex items-center justify-between border-t pt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-foreground text-[19px] font-extrabold">
                          {course.price}
                        </span>

                        <span className="text-accent-400 dark:text-accent-500 text-[11px] line-through">
                          {course.oldPrice}
                        </span>
                      </div>

                      <button
                        type="button"
                        className="bg-primary-100 text-primary-800 group/btn dark:bg-primary-950 dark:text-primary-300 flex h-10 w-10 items-center justify-center rounded-full"
                      >
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* WHY SANJIB ACADEMY */}
        {/* ===================================================== */}

        <section className="mx-auto max-w-375 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-primary-600 dark:text-primary-300 text-[11px] font-extrabold tracking-[0.12em] uppercase">
                Why Sanjib Academy
              </p>

              <h2 className="text-foreground mt-3 max-w-130 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
                We don't teach you to chase trades.
              </h2>

              <p className="text-accent-600 dark:text-accent-400 mt-5 max-w-135 text-[14px] leading-7">
                The goal is to help learners develop independent market
                thinking, disciplined execution and a repeatable decision-making
                process.
              </p>

              <button
                type="button"
                className="bg-foreground text-background mt-7 flex items-center gap-2 rounded-[13px] px-6 py-4 text-[12px] font-extrabold transition-opacity hover:opacity-90"
              >
                Discover Our Method
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="border-accent-200 bg-accent-50/85 dark:border-accent-800 dark:bg-accent-950/75 rounded-[20px] border p-6 shadow-sm"
                  >
                    <div className="bg-secondary-100 text-secondary-800 dark:bg-secondary-950 dark:text-secondary-300 flex h-11 w-11 items-center justify-center rounded-[13px]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-foreground mt-4 text-[16px] font-extrabold">
                      {feature.title}
                    </h3>

                    <p className="text-accent-600 dark:text-accent-400 mt-2 text-[12px] leading-6">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* MENTOR */}
        {/* ===================================================== */}

        <section className="mx-auto max-w-375 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="border-accent-800 bg-accent-950 relative overflow-hidden rounded-[28px] border px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="bg-secondary-400/10 absolute -top-40 right-0 h-125 w-125 rounded-full blur-[150px]" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-accent-900 mx-auto w-full max-w-100 overflow-hidden rounded-3xl">
                <img
                  src="https://images.pexels.com/photos/37676879/pexels-photo-37676879.jpeg"
                  alt="Sanjib Gangully"
                  className="aspect-4/5 w-full object-cover"
                />
              </div>

              <div>
                <span className="text-secondary-300 text-[10px] font-extrabold tracking-[0.16em] uppercase">
                  Meet Your Mentor
                </span>

                <h2 className="text-accent-50 mt-3 text-3xl font-extrabold sm:text-4xl">
                  Learn from experience, not theory alone.
                </h2>

                <p className="text-accent-300 mt-5 max-w-155 text-[13px] leading-7">
                  Sanjib Gangully brings years of active market experience into
                  a structured learning environment designed to simplify complex
                  concepts and build independent traders.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    "17+ Years in Markets",
                    "35,000+ Learners",
                    "Options & Price Action",
                  ].map((item) => (
                    <span
                      key={item}
                      className="border-accent-800 bg-accent-900/50 text-accent-200 rounded-full border px-4 py-2 text-[10px] font-bold"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="bg-secondary-400 text-secondary-950 hover:bg-secondary-300 mt-8 flex items-center gap-2 rounded-[13px] px-6 py-4 text-[12px] font-extrabold"
                >
                  Meet The Mentor
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* TESTIMONIALS */}
        {/* ===================================================== */}

        <section className="border-accent-200 bg-accent-100/35 dark:border-accent-800 dark:bg-accent-950/35 border-y">
          <div className="mx-auto max-w-375 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto mb-10 max-w-162.5 text-center">
              <p className="text-primary-600 dark:text-primary-300 text-[11px] font-extrabold tracking-[0.12em] uppercase">
                Student Stories
              </p>

              <h2 className="text-foreground mt-2 text-3xl font-extrabold sm:text-4xl">
                Learn from traders who were once where you are.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="border-accent-200 bg-accent-50 dark:border-accent-800 dark:bg-accent-950 rounded-[20px] border p-6 shadow-sm"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="text-primary-500 fill-primary-500 dark:text-primary-400 dark:fill-primary-400 h-4 w-4"
                      />
                    ))}
                  </div>

                  <p className="text-accent-700 dark:text-accent-300 mt-5 text-[13px] leading-6">
                    “{testimonial.review}”
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="bg-secondary-100 text-secondary-800 dark:bg-secondary-950 dark:text-secondary-300 flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-extrabold">
                      {testimonial.initials}
                    </div>

                    <div>
                      <p className="text-foreground text-[12px] font-extrabold">
                        {testimonial.name}
                      </p>

                      <p className="text-accent-500 dark:text-accent-400 mt-0.5 text-[10px]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* CTA */}
        {/* ===================================================== */}

        <section className="mx-auto max-w-375 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="from-primary-800 to-primary-950 dark:from-primary-950 dark:to-accent-950 relative overflow-hidden rounded-[28px] bg-linear-to-br px-6 py-14 text-center sm:px-10">
            <div className="bg-secondary-400/15 absolute -top-28 left-1/2 h-87.5 w-150 -translate-x-1/2 rounded-full blur-[130px]" />

            <div className="relative z-10 mx-auto max-w-187.5">
              <p className="text-secondary-300 text-[10px] font-extrabold tracking-[0.15em] uppercase">
                Start Learning Today
              </p>

              <h2 className="text-accent-50 mt-3 text-3xl font-extrabold sm:text-4xl">
                Build the trader you want to become.
              </h2>

              <p className="text-primary-100 mt-4 text-[13px] leading-7">
                Explore structured trading programs designed around skill,
                discipline and independent decision-making.
              </p>

              <button
                type="button"
                className="bg-secondary-400 text-secondary-950 hover:bg-secondary-300 mt-7 inline-flex items-center gap-2 rounded-[14px] px-7 py-4 text-[12px] font-extrabold transition-colors"
              >
                Explore All Programs
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
