"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import maskgroup from "@/assets/images/guide-mask-group.png";
import bannerimg from "@/assets/images/banner/publishing-banner.png";
import ourBlogBGImg from "@/assets/images/our-blog-bg-img.png";
import img1 from "@/assets/images/image-36.png";
import img2 from "@/assets/images/image-37.png";
import img3 from "@/assets/images/image-39.png";
import img4 from "@/assets/images/image-40.png";
import img5 from "@/assets/images/image-41.png";
import img6 from "@/assets/images/image-42.png";
import img7 from "@/assets/images/image-43.png";
import svg from "@/assets/images/Group-1261153889.png";
import img8 from "@/assets/images/Group-1261153871.png";
import { FaDownload } from "react-icons/fa";
import Faq from "@/components/Faq";

const services = [
  {
    title: "Amazon KDP & Kindle Publishing",
    description:
      "We know the ins and outs of Amazon KDP. From formatting to metadata, we’ll make sure your book is ready for Kindle and optimized to get noticed.",
    image: img1,
  },
  {
    title: "Professional Book Formatting",
    description:
      "No more worrying about margins, fonts, or page numbers. We’ll format your book for print and digital, ensuring it looks great everywhere.",
    image: img2,
  },
  {
    title: "Custom Cover Design",
    description:
      "Your cover is your first impression. We’ll create a market-ready design that reflects your story and grabs attention.",
    image: img3,
  },
  {
    title: "Print-on-Demand (POD)",
    description:
      "No big print runs or upfront costs — just print copies when you need them. Simple, smart, and budget-friendly.",
    image: img4,
  },
  {
    title: "Professional Book Formatting",
    description:
      "Ready to turn your book into an audiobook? We work with skilled narrators to bring your words to life and distribute your audio on platforms like Audible.",
    image: img5,
  },
  {
    title: "Custom Cover Design",
    description:
      "Your cover is your first impression. We’ll create a market-ready design that reflects your story and grabs attention.",
    image: img6,
  },
  {
    title: "Print-on-Demand (POD)",
    description:
      "No big print runs or upfront costs — just print copies when you need them. Simple, smart, and budget-friendly.",
    image: img7,
  },
];

const Publishing = () => {
  return (
    <>
      {/* Banner */}
      <div className="relative bg-[#443201] border-purple-500 overflow-hidden">
        <Image
          src={maskgroup}
          alt="Mask Group"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        <motion.div
          className="relative px-6 py-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="flex-1 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Book Publishing Services,</span>
              <br />
              <span className="text-yellow-400">Fast Print Guys</span>
            </h1>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Create your own book as a gift! With international custom book
              printing and no order minimum, you can have books printed & bound
              in hardcover, paperback, coil bound, or saddle stitch. Print a
              novel, children’s book, cookbook, magazine, or any kind of book
              you can think of.
            </p>
          </motion.div>

          <motion.div
            className="flex-1 flex items-center justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative">
              <Image
                src={bannerimg}
                alt="Guide and Template Illustration"
                className="h-auto max-w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Features */}
      <div className="relative bg-white overflow-hidden border-t-4 border-blue-600">
        <Image
          src={ourBlogBGImg}
          alt="Gradient Background"
          fill
          className="object-cover opacity-100"
          priority
        />

        <div className="relative z-10 max-w-7xl mx-5 sm:mx-16 px-4 py-16 space-y-16">
          <h2 className="text-4xl font-bold text-center mb-7">
            Fast, Affordable Book Publishing Services for <br />
            <span className="custom-text-gradient">
              {" "}
              Self-Published Authors
            </span>
          </h2>

          <p className="text-center mb-7">
            Looking for professional and affordable{" "}
            <strong>book publishing services? </strong>At{" "}
            <strong>Fast Print Guys,</strong> we help authors turn their
            manuscripts into beautifully published books — ready for sale on{" "}
            <strong>Amazon KDP, Kindle, Barnes & Noble, IngramSpark,</strong>
            and more.
          </p>

          <p className="text-center">
            Whether you’re new to <strong>self-publishing</strong> or a seasoned
            author, we provide <strong>end-to-end publishing solutions</strong>{" "}
            that save time, reduce hassle, and maximize visibility.
          </p>

          {/* Feature 2 */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-7">
              What We Can
              <span className="custom-text-gradient"> Help You With</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-[48%] lg:w-[23%] bg-white rounded-xl hover:bg-[#346AB3] group shadow-md hover:shadow-2xl hover:shadow-blue-900 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="m-2 h-48 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg group-hover:text-white font-bold text-center text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 group-hover:text-white text-center text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature 3 */}
          <div className="mt-5">
            <Image src={svg} alt="decorative" className="mx-auto" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <section className="w-full px-6 py-6 bg-white">
          {/* Top Section: Text + Image */}
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Why Authors Love
                <span className="custom-text-gradient"> Working with Us</span>
              </h3>
              <div className="mx-5">
                <ul className="list-disc pl-5 text-gray-800 space-y-2 mb-6">
                  <li>Over 8 years helping authors publish professionally</li>
                  <li>
                    A real team of friendly experts — no bots, no templates
                  </li>
                  <li>Fast, reliable service with open communication</li>
                  <li>Affordable packages without surprise fees</li>
                  <li>Solutions for every genre and publishing goal</li>
                </ul>
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-black mb-2">
                For Every Kind of Author and
                <br />
                <span className="custom-text-gradient">Every Kind of Book</span>
              </h4>
              <p className="text-gray-700">
                Whether you're writing fiction, non-fiction, a children’s book,
                a memoir, or a cookbook — we’re here to help make it happen.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 max-w-[500px] w-full mx-auto">
              <Image
                src={img8}
                alt="FastPrint Guys illustration"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl px-6 py-10 text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Let’s Publish Your Book Together
            </h3>
            <p className="text-white max-w-4xl mx-auto mb-6 text-sm md:text-base">
              You’ve done the hard part — now let us take it from here. At Fast
              Print Guys, we treat your book like it’s our own. Reach out today,
              and let’s get your book out into the world.
            </p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm md:text-base font-medium px-6 py-3 rounded-full transition-all duration-300">
              Contact Us Now to Get Started
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Publishing;
