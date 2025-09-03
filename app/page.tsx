"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function EpixLabsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-slate-800">EpixLabs</span>
        </div>
        <nav className="hidden md:flex gap-6 text-slate-600 font-medium">
          <a href="#about" className="hover:text-emerald-600">
            About
          </a>
          <a href="#services" className="hover:text-emerald-600">
            Services
          </a>
          <a href="#contact" className="hover:text-emerald-600">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700"
        >
          Get in Touch
        </a>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-8 lg:px-20 py-20 gap-10">
        <div className="max-w-2xl space-y-6">
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
              className="rounded-md bg-emerald-600 px-6 py-3 text-white shadow hover:bg-emerald-700"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="rounded-md border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-100"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="w-full max-w-md">
          <Image
            src="/company.jpg" // optional hero image
            alt="EpixLabs Office"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
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
            {[
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
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-6 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="text-slate-600 mt-2">{s.desc}</p>
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
            Have a project or idea? Let’s build something together.
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
              value="+998 (90) 123-45-67"
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
    </main>
  );
}

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="text-slate-700">{value}</p>
    </div>
  );
}
