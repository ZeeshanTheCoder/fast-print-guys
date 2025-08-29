"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import maskgroup from "@/assets/images/guide-mask-group.png";
import bannerimg from "@/assets/images/banner/publishing-banner.png";
import ourBlogBGImg from "@/assets/images/our-blog-bg-img.png";
import img1 from "@/assets/images/Group-1261153897.png";
import img3 from "@/assets/images/Group-1261153896.png";
import a5Image from "@/assets/images/image-30-1.png";
import usTradeImage from "@/assets/images/image-31-1.png";
import usLetterImage from "@/assets/images/image-32-1.png";
import { FaDownload } from "react-icons/fa";
import Faq from "@/components/Faq";

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

        <div className="relative z-10 max-w-7xl mx-16 px-4 py-16 space-y-16">
          <h2 className="text-4xl font-bold text-center mb-7">
            Fast, Affordable Book Publishing Services for <br />
            <span className="custom-text-gradient">
              {" "}
              Self-Published Authors
            </span>
          </h2>

          <p className="text-center mb-7">
            Looking for professional and affordable{" "}
            <strong>book publishing services? </strong>At <strong>Fast Print Guys,</strong> we
            help authors turn their manuscripts into beautifully published books
            — ready for sale on <strong>Amazon KDP, Kindle, Barnes & Noble, IngramSpark,</strong>
            and more.
          </p>

          <p className="text-center">
              Whether you’re new to <strong>self-publishing</strong> or a seasoned author, we
            provide <strong>end-to-end publishing solutions</strong> that save time, reduce
            hassle, and maximize visibility.
          </p>

          {/* Feature 2 */}
          <div>
             <h2 className="text-4xl font-bold text-center mb-7">
            What We Can
            <span className="custom-text-gradient">
              {" "}
              Help You With
            </span>
          </h2>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 text-center md:text-left">
              <p className="uppercase text-lg font-semibold text-[#2A428C] mb-2">
                CREATE
              </p>
              <h3 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
                Free New User{" "}
                <span className="custom-text-gradient">Guide</span>
              </h3>
              <p className="text-gray-700 mb-6 text-base md:text-lg">
                Explore how to get started with our services using our free user
                guide. Learn how to upload, format, and print your first
                project.
              </p>
              <button className="custom-btn-gradient text-white font-semibold py-2 px-4 rounded-full">
                Read More
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-60 h-60 sm:w-90 sm:h-90">
                <Image
                  src={img3}
                  alt="Free New User Guide"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Popular Book Formats */}
        <motion.h2
          className="text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Popular Book <span className="custom-text-gradient"> Formats</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-5 py-10">
          {/* A5 Format Card */}
          <div className="group bg-gray-100 rounded-2xl shadow-md w-full max-w-[350px] transition duration-300 cursor-pointer overflow-hidden flex flex-col hover:bg-gradient-to-b from-[#0096CD] to-[#016AB3] transform hover:scale-105 hover:shadow-2xl">
            <div className="p-6 flex flex-col h-full">
              <img
                src="https://fastprintguys.com/wp-content/uploads/2025/05/image-31-1.png"
                alt="US Trade Book"
                className="w-full h-44 object-cover border-none rounded-2xl mb-5"
              />
              <div className="flex justify-between items-baseline mb-2">
                <div className="text-lg font-semibold text-gray-900 group-hover:text-white">
                  A5
                </div>
                <div className="text-sm text-gray-500 group-hover:text-white">
                  8.83 X 8.27 In | 148 X 210 Ym
                </div>
              </div>
              <div className="h-px bg-gray-200 group-hover:bg-white my-4 transition-all duration-300"></div>
              <p className="text-sm text-gray-700 group-hover:text-white leading-relaxed mb-3">
                Bookstore Quality Printing At Affordable Costs, Our A5 Paperback
                Is Perfect
              </p>
              <div className="text-sm font-bold text-gray-600 group-hover:text-white mb-1">
                MOST POPULAR FORMAT
              </div>
              <ul className="list-disc ml-5 text-sm text-gray-700 group-hover:text-white mb-4 space-y-1">
                <li>Paperback</li>
                <li>Standard Black &amp; White</li>
                <li>60# Paper</li>
              </ul>
              <div className="mt-auto text-base font-bold text-gray-900 group-hover:text-white">
                Starting At 2.55 USD
              </div>
            </div>
          </div>

          {/* US Trade Format Card */}
          <div className="group bg-gray-100 rounded-2xl shadow-md w-full max-w-[350px] transition duration-300 cursor-pointer overflow-hidden flex flex-col hover:bg-gradient-to-b from-[#0096CD] to-[#016AB3] transform hover:scale-105 hover:shadow-2xl">
            <div className="p-6 flex flex-col h-full">
              <img
                src="https://fastprintguys.com/wp-content/uploads/2025/05/image-31-1.png"
                alt="US Trade Book"
                className="w-full h-44 object-cover border-none rounded-2xl mb-5"
              />
              <div className="flex justify-between items-baseline mb-2">
                <div className="text-lg font-semibold text-gray-900 group-hover:text-white">
                  US Trade
                </div>
                <div className="text-sm text-gray-500 group-hover:text-white">
                  6 X 9 In | 152 X 229 Ym
                </div>
              </div>
              <div className="h-px bg-gray-200 group-hover:bg-white my-4 transition-all duration-300"></div>
              <p className="text-sm text-gray-700 group-hover:text-white leading-relaxed mb-3">
                Casewrap With Glossy Or Matte Finish And A Stiff Cover Board.
              </p>
              <div className="text-sm font-bold text-gray-600 group-hover:text-white mb-1">
                MOST POPULAR FORMAT
              </div>
              <ul className="list-disc ml-5 text-sm text-gray-700 group-hover:text-white mb-4 space-y-1">
                <li>Paperback</li>
                <li>Standard Black &amp; White</li>
                <li>60# Paper</li>
              </ul>
              <div className="mt-auto text-base font-bold text-gray-900 group-hover:text-white">
                Starting At 4.11 USD
              </div>
            </div>
          </div>

          {/* US Letter Format Card */}

          <div className="group bg-gray-100 rounded-2xl shadow-md w-full max-w-[350px] transition duration-300 cursor-pointer overflow-hidden flex flex-col hover:bg-gradient-to-b from-[#0096CD] to-[#016AB3] transform hover:scale-105 hover:shadow-2xl">
            <div className="p-6 flex flex-col h-full">
              <img
                src="https://fastprintguys.com/wp-content/uploads/2025/05/image-31-1.png"
                alt="US Trade Book"
                className="w-full h-44 object-cover border-none rounded-2xl mb-5"
              />
              <div className="flex justify-between items-baseline mb-2">
                <div className="text-lg font-semibold text-gray-900 group-hover:text-white">
                  US Letter
                </div>
                <div className="text-sm text-gray-500 group-hover:text-white">
                  8.5 X 11 In | 216 X 279 Ym
                </div>
              </div>
              <div className="h-px bg-gray-200 group-hover:bg-white my-4 transition-all duration-300"></div>
              <p className="text-sm text-gray-700 group-hover:text-white leading-relaxed mb-3">
                The Best Format For Manuals, Guides, Or Lookbooks, Our Full
                Color Paperback.
              </p>
              <div className="text-sm font-bold text-gray-600 group-hover:text-white mb-1">
                MOST POPULAR FORMAT
              </div>
              <ul className="list-disc ml-5 text-sm text-gray-700 group-hover:text-white mb-4 space-y-1">
                <li>Hardcover</li>
                <li>Standard Color</li>
                <li>80# Paper</li>
              </ul>
              <div className="mt-auto text-base font-bold text-gray-900 group-hover:text-white">
                Starting At 11.43 USD
              </div>
            </div>
          </div>
          <section className="w-full bg-white pt-16 px-4 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 border-y border-dashed border-blue-400 py-12">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Book Design{" "}
                  <span className="custom-text-gradient">Templates</span>
                </h2>
                <p className="text-gray-700 text-sm md:text-base max-w-xl mb-6">
                  Select Your Book Size And Download A Free Design Bundle. The
                  Bundle Includes Book Page And Cover Templates For InDesign,
                  Photoshop, And Word. As Well As Our Book Creation Guide.
                </p>

                <label
                  htmlFor="bookSize"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Select Your Book Size
                </label>

                <div className="flex items-center gap-2 mb-6">
                  <select
                    className="w-full md:w-[350px] px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    defaultValue=""
                  >
                    <option disabled value="">
                      Choose a PDF document
                    </option>
                    <option value="a5">
                      A5: 5.83 x 8.27 in | 148 x 210 mm
                    </option>
                    <option value="us-trade">
                      US Trade: 6 x 9 in | 152 x 229 mm
                    </option>
                    <option value="us-letter">
                      US Letter: 8.5 x 11 in | 216 x 279 mm
                    </option>
                    <option value="whitepaper">Research Whitepaper</option>
                  </select>

                  <button className="custom-btn-gradient text-white p-4 px-10  rounded-md transition">
                    <FaDownload />
                  </button>
                </div>

                <h3 className="text-lg font-semibold mb-1">
                  Already Know Your Page Count?
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Use Our Pricing Calculator To See Print Costs And Download A
                  Custom Cover Template Using Your Exact Page Count.
                </p>
              </div>

              {/* Right Image */}
              <div className="flex-1 flex justify-center lg:justify-end">
                <img
                  src="https://fastprintguys.com/wp-content/uploads/2025/05/Group-1261153732.png"
                  alt="Laptop Graphic"
                  className="w-full max-w-[500px] h-auto object-contain"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* FAQ */}
      <Faq />
    </>
  );
};

export default Publishing;
