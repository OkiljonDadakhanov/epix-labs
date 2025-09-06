"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Menu,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  MonitorSmartphone,
  ServerCog,
  Rocket,
  Briefcase,
  Send,
} from "lucide-react";

export default function EpixLabsBrandSite() {
  // ---- Smooth scroll (CSS) + AOS ----
  useEffect(() => {
    // Smooth scroll (no need for polyfill)
    document.documentElement.style.scrollBehavior = "smooth";
    // AOS animations
    AOS.init({ duration: 750, once: true, easing: "ease-out-quart" });
  }, []);

  // ---- Form state / validation ----
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (key: keyof typeof form, value: string) => {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    if (!form.message.trim()) e.message = "Please enter a short message describing your project";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setSent(true);
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
        setTimeout(() => setSent(false), 3500);
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ---- Content ----
  const services: { title: string; desc: string; icon: React.ReactNode }[] = [
    {
      title: "Web Development",
      desc: "Modern, SEO-friendly web apps with Next.js and TypeScript.",
      icon: <MonitorSmartphone className="h-6 w-6" aria-hidden />,
    },
    {
      title: "Mobile Apps",
      desc: "Smooth cross-platform apps with React Native.",
      icon: <Rocket className="h-6 w-6" aria-hidden />,
    },
    {
      title: "Cloud & DevOps",
      desc: "CI/CD, autoscaling, observability, and cost optimization.",
      icon: <ServerCog className="h-6 w-6" aria-hidden />,
    },
  ];

  const caseStudies: {
    title: string;
    tag: string;
    img: string;
    href: string;
  }[] = [
    {
      title: "EpixRent - Car Rental Service",
      tag: "Next.js · Postgres · Docker · AWS CDK · DevOps",
      img: "/car.jpg",
      href: "https://info.epixrent.uz/",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/50 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="#home"
            className="group flex items-center gap-3"
            aria-label="EpixLabs Home"
          >
            <Image
              src="/union.png" // make sure this file exists in /public
              alt="EpixLabs Logo"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            <span className="text-xl font-bold tracking-tight [font-family:var(--font-brand,inherit)]">
              <span className="text-[#001334]">Epix</span>
              <span className="text-[#0FE7A8]">Labs</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#services" className="hover:text-[#001334]">
              Services
            </a>
            <a href="#work" className="hover:text-[#001334]">
              Work
            </a>
            <a href="#about" className="hover:text-[#001334]">
              About
            </a>
            <a href="#contact" className="hover:text-[#001334]">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden rounded-xl bg-[#001334] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 md:inline-block"
            >
              Start a Project
            </Link>
            <button
              className="inline-flex items-center rounded-xl border border-slate-300 p-2 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(15,231,168,0.18),transparent_60%),linear-gradient(180deg,#f8fafc,white)]" />
        <div
          className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-24 lg:px-8"
          data-aos="fade-up"
        >
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-[#0FE7A8]" />
              Trusted engineering partner
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl [font-family:var(--font-brand,inherit)]">
              Digital products that look sharp and scale smoothly
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-700">
              We design and build web, mobile, and cloud solutions. Clean UI,
              reliable architecture, and measurable outcomes—delivered with
              speed and care.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-[#001334] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Our Work
              </a>
            </div>
            <ul className="mt-6 grid w-full grid-cols-2 gap-4 text-sm text-slate-700 sm:grid-cols-4">
              {[
                ["5+", "Projects"],
                ["3+", "Partners"],
                ["90%", "Uptime"],
                ["<200ms", "TTFB"],
              ].map(([n, label]) => (
                <li
                  key={label}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                >
                  <div className="text-lg font-bold text-[#001334]">{n}</div>
                  <div className="text-xs text-slate-600">{label}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-delay="150">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <Image
                src="/company.jpg"
                alt="EpixLabs office"
                width={960}
                height={640}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 to-transparent p-4">
                <p className="text-sm font-medium text-white">
                  Design · Engineering · DevOps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-16 sm:py-20 scroll-mt-24">
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl [font-family:var(--font-brand,inherit)]">
              What we do
            </h2>
            <p className="mt-3 text-slate-700">
              Focused expertise across product, engineering, and infrastructure.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-transparent transition hover:shadow-md hover:ring-[#0FE7A8]/30"
                data-aos="zoom-in-up"
                data-aos-delay={i * 80}
              >
                <div className="flex items-center gap-3 text-[#001334]">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0FE7A8]/15 text-[#001334]">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
            {[
              "Next.js",
              "TypeScript",
              "React Native",
              "PostgreSQL",
              "Docker",
              "AWS",
            ].map((t, i) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={200 + i * 70}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-slate-50 py-16 sm:py-20 scroll-mt-24">
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl [font-family:var(--font-brand,inherit)]">
              Selected work
            </h2>
            <p className="mt-3 text-slate-700">
              A snapshot of recent projects we’ve delivered.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Link
                key={c.title}
                href={c.href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                <div className="relative">
                  <Image
                    src={c.img}
                    alt={c.title}
                    width={800}
                    height={600}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute left-3 top-3 rounded-md bg-[#001334] px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/90">
                    {c.tag}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[#001334]">
                    <Briefcase className="h-4 w-4" />
                    <h3 className="text-base font-semibold">{c.title}</h3>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#001334]">
                    View details <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#001334] py-16 text-white sm:py-20 scroll-mt-24"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_85%_20%,rgba(15,231,168,0.18),transparent_60%)]" />
        <div
          className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8"
          data-aos="fade-up"
        >
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl [font-family:var(--font-brand,inherit)]">
              About EpixLabs
            </h2>
            <p className="mt-4 max-w-xl text-slate-200">
              We blend design thinking with robust engineering. From discovery
              to deployment, our process prioritizes clarity, reliability, and
              speed.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Discovery & UX",
                "Architecture",
                "Delivery speed",
                "Observability",
              ].map((i, idx) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm"
                  data-aos="fade-right"
                  data-aos-delay={idx * 90}
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#0FE7A8]/20 text-[#0FE7A8]">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative" data-aos="zoom-in">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
              <div className="grid grid-cols-2 gap-4 text-center">
                {[
                  ["4.9/5", "Avg. rating"],
                  ["<2w", "MVP launch"],
                  ["24/7", "Support"],
                  ["NDA", "Friendly"],
                ].map(([n, l], i) => (
                  <div
                    key={l}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                    data-aos="fade-up"
                    data-aos-delay={i * 110}
                  >
                    <div className="text-lg font-bold">{n}</div>
                    <div className="text-xs text-slate-200">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-16 sm:py-20 scroll-mt-24">
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl [font-family:var(--font-brand,inherit)]">
              Let’s build something
            </h2>
            <p className="mt-3 text-slate-700">
              Tell us about your idea—we’ll reply within one business day.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              value="info@epixlabs.uz"
              href="mailto:info@epixlabs.uz"
            />
            <ContactCard
              icon={<Phone className="h-5 w-5" />}
              title="Phone"
              value="+998 (91) 352 82 81"
              href="tel:+998913528281"
            />
            <ContactCard
              icon={<MapPin className="h-5 w-5" />}
              title="Office"
              value="Tashkent, Uzbekistan"
              href="https://maps.app.goo.gl/"
            />
          </div>

          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {sent ? (
              <div className="py-10 text-center text-emerald-600 font-semibold animate-pulse">
                ✅ Message sent. We’ll get back to you soon!
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                <label className="text-sm">
                  <span className="mb-1 block font-semibold text-slate-800">
                    Name
                  </span>
                  <input
                    className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:border-[#0FE7A8] ${
                      errors.name ? "border-red-500" : "border-slate-300"
                    }`}
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => onChange("name", e.target.value)}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500">{errors.name}</span>
                  )}
                </label>

                <label className="text-sm">
                  <span className="mb-1 block font-semibold text-slate-800">
                    Email
                  </span>
                  <input
                    type="email"
                    className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:border-[#0FE7A8] ${
                      errors.email ? "border-red-500" : "border-slate-300"
                    }`}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => onChange("email", e.target.value)}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500">{errors.email}</span>
                  )}
                </label>

                <label className="text-sm">
                  <span className="mb-1 block font-semibold text-slate-800">
                    Phone
                  </span>
                  <input
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0FE7A8]"
                    placeholder="+998 90 123 45 67"
                    value={form.phone}
                    onChange={(e) => onChange("phone", e.target.value)}
                  />
                </label>

                <label className="text-sm">
                  <span className="mb-1 block font-semibold text-slate-800">
                    Company
                  </span>
                  <input
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0FE7A8]"
                    placeholder="Company (optional)"
                    value={form.company}
                    onChange={(e) => onChange("company", e.target.value)}
                  />
                </label>

                <label className="col-span-full text-sm">
                  <span className="mb-1 block font-semibold text-slate-800">
                    Project Brief
                  </span>
                  <textarea
                    rows={4}
                    className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:border-[#0FE7A8] ${
                      errors.message ? "border-red-500" : "border-slate-300"
                    }`}
                    placeholder="A few sentences about your project..."
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500">
                      {errors.message}
                    </span>
                  )}
                </label>

                <div className="col-span-full">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0FE7A8] px-5 py-3 text-sm font-semibold text-[#001334] transition hover:opacity-90 disabled:opacity-60 cursor-pointer"
                  >
                    <Send className="h-4 w-4 " />
                    {submitting ? "Sending..." : "Send Request"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-slate-600 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} EpixLabs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-slate-900">
              Services
            </a>
            <a href="#work" className="hover:text-slate-900">
              Work
            </a>
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Brand helpers */}
      <style jsx global>{`
        :root {
          --brand-mint: #0fe7a8;
          --brand-navy: #001334;
        }
        @font-face {
          font-family: "Coolvetica";
          src: url("/fonts/Coolvetica.woff2") format("woff2");
          font-weight: 400 800;
          font-style: normal;
          font-display: swap;
        }
        [font-family: var(--font-brand, inherit)], .font-brand {
          font-family: "Coolvetica", system-ui, -apple-system, Segoe UI, Roboto,
            "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        }
      `}</style>
    </main>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div
      className="flex h-full flex-col items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:shadow-md"
      data-aos="fade-up"
    >
      <div className="flex items-center gap-2 text-[#001334]">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0FE7A8]/20 text-[#001334]">
          {icon}
        </span>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-slate-700">{value}</p>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    <div>{content}</div>
  );
}
