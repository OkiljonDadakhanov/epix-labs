"use client";
import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Car } from "lucide-react";
import Link from "next/link";

// Smooth scroll for anchor links
if (typeof window !== "undefined") {
  if (document && !document.body.classList.contains("smooth-scroll")) {
    document.body.classList.add("smooth-scroll");
    const style = document.createElement("style");
    style.innerHTML = `html { scroll-behavior: smooth; }`;
    document.head.appendChild(style);
  }
}

interface ServiceItem {
  title: string;
  desc: string;
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export default function EpixLabsPage() {
  const services: ServiceItem[] = [
    {
      title: "Web Development",
      desc: "Modern, responsive, and scalable web apps built with React, Next.js, and more.",
    },
    {
      title: "Mobile Apps",
      desc: "Seamless cross-platform experiences with React Native and Flutter.",
    },
    {
      title: "Cloud & DevOps",
      desc: "CI/CD pipelines, scalable infrastructure, and optimized cloud solutions.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 shadow-sm bg-white/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-2xl hover:scale-105 transition-transform duration-200"
          >
            <Car className="h-7 w-7 text-emerald-600 animate-bounce" />
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
              EpixLabs
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 text-slate-600 font-medium">
          <a href="#about" className="hover:text-emerald-600 transition-colors">
            About
          </a>
          <a
            href="#services"
            className="hover:text-emerald-600 transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-emerald-600 transition-colors"
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700 transition-colors"
        >
          Get in Touch
        </a>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-8 lg:px-20 py-20 gap-10">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Building Digital Solutions with{" "}
            <span className="text-emerald-600">Impact</span>
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            EpixLabs is a technology company specializing in web and mobile
            development, cloud solutions, and digital innovation. We help
            startups and enterprises accelerate growth with scalable,
            user-friendly, and high-performance applications.
          </p>
          <div className="flex gap-4">
            <a
              href="#services"
              className="rounded-md bg-emerald-600 px-6 py-3 text-white shadow hover:bg-emerald-700 transition-colors"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="rounded-md border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="w-full max-w-md animate-fade-in-up-delay">
          <Image
            src="/company.jpg"
            alt="EpixLabs Office"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 lg:px-20 py-16 bg-white">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">About EpixLabs</h2>
          <p className="text-slate-700 leading-relaxed">
            Founded with a vision to bridge technology and business, EpixLabs
            provides end-to-end solutions from idea to execution. Our expertise
            spans modern web frameworks, mobile development, API design, and
            cloud infrastructure. We prioritize clean design, scalable systems,
            and impactful results.
          </p>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="px-8 lg:px-20 py-16 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-5xl mx-auto space-y-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={`service-${index}`}
                className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 mt-2">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 lg:px-20 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
          <p className="text-slate-700">
            Have a project or idea? Let`s build something together.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 text-left">
            <ContactCard
              icon={<Mail className="h-5 w-5 text-emerald-600" />}
              title="Email"
              value="info@epixlabz.uz"
            />
            <ContactCard
              icon={<Phone className="h-5 w-5 text-emerald-600" />}
              title="Phone"
              value="+998 (91) 352 82 81"
            />
            <ContactCard
              icon={<MapPin className="h-5 w-5 text-emerald-600" />}
              title="Office"
              value="Tashkent, Uzbekistan"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 lg:px-20 py-6 bg-slate-900 text-slate-300 text-center">
        <p>© {new Date().getFullYear()} EpixLabs. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fadeInUp 0.7s ease-out 0.2s both;
        }
      `}</style>
    </main>
  );
}

function ContactCard({ icon, title, value }: ContactCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col items-start gap-2 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="text-slate-700">{value}</p>
    </div>
  );
}
