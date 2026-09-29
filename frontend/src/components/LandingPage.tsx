
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Bell,
  BookOpen,
  BarChart3,
  CalendarCheck,
  X,
  Menu,
  ShieldCheck,
  HelpCircle,
  Mail,
  ChevronDown,
} from "lucide-react";

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
    details:
      "Class Management helps you organize your classes and keep classroom information accessible in one place. It makes class-related information easier to manage and helps you maintain an organized classroom workflow.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Student Records",
    description:
      "Keep student information organized and make classroom records easier to manage.",
    details:
      "Student Records helps you keep student information organized. It provides a convenient way to access, review, and maintain student details and classroom records.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Bell,
    title: "Notifications",
    description:
      "Stay informed about classroom announcements and important updates.",
    details:
      "Notifications help you stay informed about classroom announcements and important updates. They make it easier to keep track of information that may need your attention.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: BarChart3,
    title: "Reports & Overview",
    description:
      "View classroom information and reports through a clear, organized dashboard.",
    details:
      "Reports & Overview gives you a clearer view of available classroom information and reports. Use the dashboard to review information and understand your classroom at a glance.",
    color: "bg-emerald-100 text-emerald-600",
  },
];

const faqs = [
  {
    question: "What is CheckMate?",
    answer:
      "CheckMate is a classroom management system designed to help organize class information, student records, notifications, and reports in one place.",
  },
  {
    question: "Who can use CheckMate?",
    answer:
      "CheckMate is intended for authorized users of your classroom management system. Available features depend on the access provided to your account.",
  },
  {
    question: "How do I log in?",
    answer:
      "Click Log In or Get Started and enter your account credentials on the login screen.",
  },
  {
    question: "How can I manage student records?",
    answer:
      "After logging in, open Student Records if it is available to your account. Use the tools provided to access and manage student information.",
  },
  {
    question: "What if I cannot log in?",
    answer:
      "Check that your credentials are correct. If you still cannot access your account, contact your system administrator.",
  },
];

type Feature = (typeof features)[number];

export default function LandingPage({ onLogin }: LandingPageProps) {
  const [selectedFeature, setSelectedFeature] =
    useState<Feature | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const SelectedFeatureIcon: Feature["icon"] | null = selectedFeature
    ? selectedFeature.icon
    : null;

  // Close the feature modal with Escape and prevent background scrolling.
  useEffect(() => {
    if (!selectedFeature) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedFeature(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedFeature]);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // All Back buttons return directly to the front page.
  const handleBackToHome = () => {
    setMobileMenuOpen(false);

    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Reusable Back button. It always returns to Home.
  const renderBackButton = (label = "Back to Home") => (
    <div className="mt-10 flex justify-center">
      <button
        type="button"
        onClick={handleBackToHome}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
      >
        <ArrowRight size={16} className="rotate-180" />
        {label}
      </button>
    </div>
  );

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "About", href: "#about" },
    { label: "Privacy", href: "#privacy" },
    { label: "FAQ", href: "#faq" },
    { label: "Help", href: "#help" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
        <nav
          className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
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

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={onLogin}
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:inline-flex"
          >
            Log In
            <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 lg:hidden"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {mobileMenuOpen && (
            <div
              id="mobile-navigation"
              className="absolute left-0 right-0 top-[76px] border-b border-slate-200 bg-white p-5 shadow-xl lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.label === "Privacy"
                      ? "Security & Privacy"
                      : item.label}
                  </a>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    onLogin?.();
                  }}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Log In
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Home / Hero */}
        <section
          id="home"
          className="relative isolate scroll-mt-[76px] overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/80"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-0 -z-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
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
                <span className="text-blue-600">
                  with confidence.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Meet CheckMate, your classroom management companion.
                Organize class information, manage student records,
                receive notifications, and access reports—all in one place.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
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

        {/* Features */}
        <section
          id="features"
          className="scroll-mt-24 bg-white px-5 py-24 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="text-xs font-bold tracking-[0.2em] text-blue-600">
                WHAT CHECKMATE OFFERS
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Everything you need
                <br className="hidden sm:block" />
                to stay organized.
              </h2>
              <p className="mt-5 leading-7 text-slate-500">
                Manage your classroom through tools designed to keep
                important information accessible and organized.
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

                    <button
                      type="button"
                      onClick={() => setSelectedFeature(feature)}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:gap-3"
                    >
                      Learn more
                      <ArrowRight size={16} />
                    </button>
                  </article>
                );
              })}
            </div>
          </div>

          {renderBackButton()}
        </section>

        {/* Dashboard Preview */}
        <section
          id="dashboard"
          className="scroll-mt-24 bg-slate-50 px-5 py-24 sm:px-8 lg:px-12"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-blue-600">
                A CLOSER LOOK
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Your classroom tools,{" "}
                <span className="text-blue-600">in one place.</span>
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-600">
                Get familiar with the CheckMate interface. The system
                brings classroom tools together to make everyday
                information easier to find and manage.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Organize classroom information",
                  "Access available student records",
                  "Review notifications and reports",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />
                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={onLogin}
                className="mt-9 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Explore CheckMate
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-blue-200/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10 sm:p-5">
                <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-4">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-medium text-slate-400">
                    CheckMate Preview
                  </span>
                </div>
                <img
                  src={heroImage}
                  alt="Preview of the CheckMate interface"
                  className="h-auto w-full rounded-xl object-contain"
                  loading="lazy"
                />
                <p className="mt-3 text-center text-xs text-slate-400">
                  CheckMate classroom management interface
                </p>
              </div>
            </div>
          </div>

          {renderBackButton()}
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
        >
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
              type="button"
              onClick={onLogin}
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:bg-blue-50"
            >
              Access CheckMate
              <ArrowRight size={18} />
            </button>
          </div>

          {renderBackButton()}
        </section>

        {/* Security & Privacy */}
        <section
          id="privacy"
          className="scroll-mt-24 bg-blue-50/70 px-5 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <ShieldCheck size={28} />
              </div>
              <span className="mt-5 block text-xs font-bold tracking-[0.2em] text-blue-600">
                SECURITY & PRIVACY
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Handle classroom information responsibly.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Student records contain information that should be handled
                carefully. Keep your login credentials private and follow
                your school’s rules for accessing and managing classroom
                information.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                {
                  title: "Protect your account",
                  description:
                    "Keep your password private and sign out when using a shared device.",
                },
                {
                  title: "Respect student privacy",
                  description:
                    "Access and share student information only when authorized.",
                },
                {
                  title: "Ask for assistance",
                  description:
                    "Contact your system administrator if you notice an account or access issue.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-white p-6"
                >
                  <CheckCircle2
                    size={23}
                    className="mb-4 text-blue-600"
                  />
                  <h3 className="font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {renderBackButton()}
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="scroll-mt-24 bg-white px-5 py-24 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <HelpCircle size={28} />
              </div>
              <span className="mt-5 block text-xs font-bold tracking-[0.2em] text-blue-600">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Got questions?
              </h2>
              <p className="mt-4 leading-7 text-slate-500">
                Find answers to common questions about using CheckMate.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition open:border-blue-200 open:bg-blue-50/30 sm:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-800">
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className="shrink-0 text-slate-500 transition group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-4 pr-5 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {renderBackButton()}
        </section>

        {/* Help */}
        <section
          id="help"
          className="scroll-mt-24 px-5 pb-24 sm:px-8 lg:px-12"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-10 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                  Need help with CheckMate?
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                  If you have trouble logging in or accessing a feature,
                  contact your school or system administrator for help.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onLogin}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Go to Login
              <ArrowRight size={17} />
            </button>
          </div>

          {renderBackButton()}
        </section>
      </main>

      {/* Feature Details Modal */}
      {selectedFeature && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedFeature(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="feature-modal-title"
            className="relative w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl sm:p-9"
          >
            <button
              type="button"
              onClick={() => setSelectedFeature(null)}
              aria-label="Close feature details"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <X size={21} />
            </button>

            <div
              className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${selectedFeature.color}`}
            >
              {SelectedFeatureIcon && (
                <SelectedFeatureIcon size={30} />
              )}
            </div>

            <p className="text-xs font-bold tracking-[0.2em] text-blue-600">
              CHECKMATE FEATURE
            </p>
            <h2
              id="feature-modal-title"
              className="mt-3 pr-8 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
            >
              {selectedFeature.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {selectedFeature.details}
            </p>

            <div className="mt-7 rounded-2xl bg-blue-50 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-blue-600"
                />
                <p className="text-sm leading-6 text-slate-700">
                  CheckMate brings classroom information together in one
                  organized place to help simplify your workflow.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedFeature(null)}
              className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 sm:px-8 md:flex-row lg:px-12">
          <a
            href="#home"
            className="flex items-center gap-2"
            onClick={closeMobileMenu}
          >
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

          <button
            type="button"
            onClick={handleBackToHome}
            className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}