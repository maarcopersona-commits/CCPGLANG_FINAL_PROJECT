
import { ArrowRight, CheckCircle2, Bell, BookOpen, BarChart3, CalendarCheck } from "lucide-react";
import logo from "../assets/checkmate_logo.jpg";
import heroImage from "../assets/hero.png";

interface LandingPageProps {
  onLogin?: () => void;
}

const features = [
  {
    icon: CalendarCheck,
    title: "Class Management",
    description:
      "Organize your classes and keep important classroom information accessible in one place.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Student Records",
    description:
      "Keep student information organized and make classroom records easier to manage.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Bell,
    title: "Notifications",
    description:
      "Stay informed about classroom announcements and important updates.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: BarChart3,
    title: "Reports & Overview",
    description:
      "View classroom information and reports through a clear, organized dashboard.",
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function LandingPage({ onLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="CheckMate logo"
              className="h-11 w-11 rounded-xl object-contain"
            />
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Check<span className="text-blue-600">Mate</span>
              </span>
              <p className="text-[10px] font-medium tracking-widest text-slate-500">
                CLASSROOM MANAGEMENT
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              About
            </a>
          </div>

          <button
            onClick={onLogin}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Log In
            <ArrowRight size={16} />
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative isolate overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/80"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-0 -z-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
            {/* Hero Text */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold tracking-[0.16em] text-blue-700 sm:text-xs">
                  YOUR CLASSROOM, SIMPLIFIED
                </span>
              </div>

              <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Manage your
                <br />
                classroom
                <br />
                <span className="text-blue-600">with confidence.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Meet CheckMate, your classroom management companion.
                Organize class information, manage student records,
                receive notifications, and access reports—all in one place.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={onLogin}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Get Started
                  <ArrowRight size={19} />
                </button>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-500" />
                  Simple to use
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-500" />
                  Organized workflow
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="absolute -inset-5 rounded-[2rem] bg-blue-200/30 blur-2xl" />

              <div className="relative rounded-3xl border border-white bg-white p-3 shadow-2xl shadow-blue-900/10 sm:p-4">
                <div className="overflow-hidden rounded-2xl bg-slate-50">
                  <img
                    src={heroImage}
                    alt="CheckMate classroom management interface"
                    className="h-auto max-h-[470px] w-full object-contain"
                  />
                </div>
              </div>

              {/* Floating status card */}
              <div className="absolute -left-3 top-10 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:-left-8 sm:p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Stay organized
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Everything in one place
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 right-0 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:-right-5 sm:p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Bell size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Stay updated
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Important class notifications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="scroll-mt-24 bg-white px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="text-xs font-bold tracking-[0.2em] text-blue-600">
                WHAT CHECKMATE OFFERS
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Everything you need
                <br className="hidden sm:block" /> to stay organized.
              </h2>
              <p className="mt-5 leading-7 text-slate-500">
                Manage your classroom through a collection of tools designed
                to keep important information accessible and organized.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="group rounded-2xl border border-slate-200/80 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                  >
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} transition group-hover:scale-105`}
                    >
                      <Icon size={27} />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {feature.description}
                    </p>

                    <a
                      href="#about"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:gap-3"
                    >
                      Learn more <ArrowRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24 px-5 pb-24 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl bg-slate-900 px-7 py-12 sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:px-16">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[0.2em] text-blue-400">
                MEET CHECKMATE
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                A more organized classroom starts here.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Bring your classroom information together with CheckMate.
                Spend less time navigating records and more time focusing
                on your classroom.
              </p>
            </div>

            <button
              onClick={onLogin}
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:bg-blue-50"
            >
              Access CheckMate
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 sm:px-8 md:flex-row lg:px-12">
          <a href="#home" className="flex items-center gap-2">
            <img
              src={logo}
              alt="CheckMate logo"
              className="h-8 w-8 rounded-lg object-contain"
            />
            <span className="font-bold text-slate-800">
              Check<span className="text-blue-600">Mate</span>
            </span>
          </a>

          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} CheckMate. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}