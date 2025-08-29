import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <section className="w-full py-16 px-6 bg-[#E6EEFA]">
        <div className="max-w-[900px] mx-auto">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
            Got questions about our printing services? Here are the answers to
            some of the most common inquiries from our customers.
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            {[
              {
                question: "What types of printing services do you offer?",
                answer:
                  "Fast Print Guys provide a wide range of printing services including business cards, flyers, posters, banners, books, brochures, calendars, and more. We also offer custom printing solutions tailored to your needs.",
              },
              {
                question: "How quickly can you complete a print job?",
                answer:
                  "We specialize in fast turnaround times. Many standard print jobs can be completed within 24–48 hours, and we offer same-day printing for urgent orders.",
              },
              {
                question: "Do you offer design assistance?",
                answer:
                  "Yes! Our in-house design team can help you create professional and eye-catching designs for your print materials, whether you’re starting from scratch or refining existing artwork.",
              },
              {
                question: "Can you handle bulk printing orders?",
                answer:
                  "Absolutely. We have the capacity and equipment to handle large-volume printing while maintaining high quality and competitive pricing.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-[#081746] rounded-lg overflow-hidden shadow"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={`w-full text-left px-6 py-4 font-semibold flex justify-between items-center transition-colors duration-300 ${
                    openIndex === index ? "bg-[#3B5BBF]" : "hover:bg-[#356BB3]"
                  } text-white`}
                >
                  <span>{faq.question}</span>
                  <span className="text-xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div
                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out bg-white text-black px-6 ${
                      openIndex === index ? "max-h-96 py-4" : "max-h-0"
                    }`}
                  >
                    <div className="opacity-100 transition-opacity duration-500">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
