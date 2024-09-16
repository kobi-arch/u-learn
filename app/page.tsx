"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  GraduationCap,
  BookOpen,
  Users,
  ArrowRight,
  Globe,
  Award,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b border-blue-100">
        <Link className="flex items-center justify-center" href="#">
          <GraduationCap className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-2xl font-bold text-blue-500">U-Learn</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="#courses"
          >
            Courses
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-400 to-blue-600">
          <div className="container px-4 md:px-6">
            <div
              className={`flex flex-col items-center space-y-4 text-center transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Empowering Sierra Leone Through Education
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  For Easy, Simplified and Premium Quality Learning. Accessible
                  Education FOR ALL
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-blue-500 hover:bg-blue-50">
                  Start Learning
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-blue-500"
                >
                  Explore Courses
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-50"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-blue-800">
              Why Choose U-Learn?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Quality Content",
                  description:
                    "Access premium educational materials curated by experts in various fields.",
                },
                {
                  icon: Users,
                  title: "Inclusive Learning",
                  description:
                    "Education for all, regardless of background, location, or economic status.",
                },
                {
                  icon: Globe,
                  title: "Global Perspective",
                  description:
                    "Connect with learners and educators from around the world.",
                },
                {
                  icon: Zap,
                  title: "Interactive Learning",
                  description:
                    "Engage with dynamic, interactive content for better understanding.",
                },
                {
                  icon: Award,
                  title: "Recognized Certifications",
                  description:
                    "Earn certificates recognized by educational institutions and employers.",
                },
                {
                  icon: GraduationCap,
                  title: "Empowering Youth",
                  description:
                    "Created by young aspirants for the future of Sierra Leone and beyond.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-blue-800">
                    {feature.title}
                  </h3>
                  <p className="text-blue-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div
                className={`space-y-4 transition-all duration-1000 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                  About U-Learn
                </h2>
                <p className="max-w-[600px] text-blue-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  U-Learn is a revolutionary platform created by young aspirants
                  of the Republic of Sierra Leone. Our mission is to empower
                  society and strive for universal inclusion in terms of
                  educational excellence.
                </p>
                <p className="max-w-[600px] text-blue-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We believe that education is the cornerstone of progress and
                  development. By providing accessible, high-quality learning
                  resources, we aim to bridge the educational gap and foster a
                  new generation of skilled, knowledgeable individuals who will
                  drive Sierra Leone's future.
                </p>
                <Button className="inline-flex items-center bg-blue-500 text-white hover:bg-blue-600">
                  Learn More About Our Mission{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div
                className={`flex items-center justify-center transition-all duration-1000 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <img
                  alt="Students learning"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height={410}
                  src="/girl.webp"
                  width={550}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="courses"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-50"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-blue-800">
              Our Popular Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Introduction to Computer Science",
                  description:
                    "Learn the basics of programming and computer science concepts.",
                },
                {
                  title: "Sierra Leone History and Culture",
                  description:
                    "Explore the rich history and diverse culture of Sierra Leone.",
                },
                {
                  title: "Sustainable Agriculture Practices",
                  description:
                    "Discover modern, eco-friendly farming techniques for improved yields.",
                },
                {
                  title: "Business Entrepreneurship",
                  description:
                    "Develop skills to start and grow your own business in Sierra Leone.",
                },
                {
                  title: "English Language Proficiency",
                  description:
                    "Enhance your English language skills for academic and professional success.",
                },
                {
                  title: "Health and Nutrition Fundamentals",
                  description:
                    "Learn about maintaining good health and nutrition in local contexts.",
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-bold mb-2 text-blue-800">
                    {course.title}
                  </h3>
                  <p className="text-blue-600 mb-4">{course.description}</p>
                  <Button
                    variant="outline"
                    className="text-blue-500 border-blue-500 hover:bg-blue-50"
                  >
                    Enroll Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-blue-800">
              What Our Students Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Aminata Kamara",
                  quote:
                    "U-Learn has opened up a world of opportunities for me. I can now access quality education from my home in Freetown.",
                },
                {
                  name: "Mohammed Sesay",
                  quote:
                    "The courses on U-Learn are engaging and relevant to our local context. It's helping me prepare for a better future.",
                },
                {
                  name: "Fatmata Conteh",
                  quote:
                    "As a working mother, U-Learn's flexibility allows me to continue my education at my own pace. It's truly empowering.",
                },
                {
                  name: "Ibrahim Koroma",
                  quote:
                    "The platform is user-friendly and the content is top-notch. U-Learn is revolutionizing education in Sierra Leone.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-blue-50 p-6 rounded-lg transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <p className="text-blue-600 mb-4">"{testimonial.quote}"</p>
                  <p className="font-bold text-blue-800">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] text-blue-600 md:text-xl">
                  Have questions or want to learn more? Reach out to us! We're
                  here to support your educational journey.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input
                    className="max-w-lg flex-1 bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your name"
                    type="text"
                  />
                  <Input
                    className="max-w-lg flex-1 bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your email"
                    type="email"
                  />
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 placeholder:text-blue-400"
                    placeholder="Your message"
                  />
                  <Button
                    type="submit"
                    className="bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-100">
        <p className="text-xs text-blue-600">
          © 2023 U-Learn. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-blue-500 hover:text-blue-700"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-blue-500 hover:text-blue-700"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-blue-500 hover:text-blue-700"
            href="#"
          >
            Cookie Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
