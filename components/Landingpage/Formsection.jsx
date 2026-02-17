"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

const EnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const product = form.products.value;
    const message = form.message.value;
    const place = form.place.value;

    setLoading(true);
    setSuccessMessage("Sending...");

    try {
      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        {
          platform: "PM Billiard  Enquiry Form",
          platformEmail: "machinerysbs@gmail.com",
          name,
          phone,
          email,
          place,
          product,
          message,
        }
      );

      if (data?.success) {
        setSubmitted(true);
        setSuccessMessage("✅ Your enquiry has been submitted successfully!");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}
Place: ${place}
Message: ${message}
Contact: ${phone}`;

        setTimeout(() => {
          window.open(
            `https://wa.me/917042039777?text=${encodeURIComponent(
              whatsappText
            )}`,
            "_blank"
          );
        }, 1000);

        form.reset();
      } else {
        setSuccessMessage("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

return (
  <section className="relative w-full py-16 px-6 bg-gradient-to-br from-[#E5F3FE] to-[#D1E9FA]">

    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center">
        <Image
          src="/try/office4.webp"
          alt="Enquiry illustration"
          width={550}
          height={320}
          className="object-contain drop-shadow-xl"
        />
      </div>

      {/* RIGHT FORM CARD */}
      <div className="relative w-full max-w-xl mx-auto rounded-xl overflow-hidden shadow-2xl">

        {/* Blue Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-blue-800/90 backdrop-blur-md"></div>

        <div className="relative z-10 p-10">

          <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-8">
            Quick Enquiry
          </h2>

          {!submitted ? (
            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Product + Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="products"
                  required
                  disabled={loading}
                  defaultValue=""
                  className="p-3 rounded-lg w-full bg-white text-gray-700 outline-none border border-gray-300 focus:ring-2 focus:ring-teal-400"
                >
                  <option value="" disabled>Select Machine</option>
                  <option value="Paper Cup Making Machine">Paper Cup Making Machine</option>
                  <option value="Paper Die Cutting Machine">Paper Die Cutting Machine</option>
                  <option value="Paper Plate Making Machine">Paper Plate Making Machine</option>
                  <option value="Bio-degradable Bag Making Machine">Bio-degradable Bag Making Machine</option>
                  <option value="Flexoprinting Machine">Flexoprinting Machine</option>
                  <option value="Non Woven Bag Making Machines">Non Woven Bag Making Machines</option>
                  <option value="Offset Bag Printing Machine">Offset Bag Printing Machine</option>
                  <option value="Momo Making Machine">Momo Making Machine</option>
                  <option value="Noodle Making Machine">Noodle Making Machine</option>
                </select>

                <input
                  type="text"
                  name="name"
                  required
                  disabled={loading}
                  placeholder="Your Name"
                  className="p-3 rounded-lg w-full bg-white text-gray-700 outline-none border border-gray-300 focus:ring-2 focus:ring-teal-400"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                  <span className="px-3">🇮🇳</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    disabled={loading}
                    maxLength={10}
                    minLength={10}
                    placeholder="8123456789"
                    className="p-3 flex-1 rounded-lg outline-none bg-transparent"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  required
                  disabled={loading}
                  placeholder="Email Address"
                  className="p-3 rounded-lg w-full bg-white text-gray-700 outline-none border border-gray-300 focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <input
                type="text"
                name="place"
                required
                disabled={loading}
                placeholder="Your City / Place"
                className="p-3 rounded-lg w-full bg-white text-gray-700 outline-none border border-gray-300 focus:ring-2 focus:ring-teal-400"
              />

              <textarea
                name="message"
                required
                disabled={loading}
                placeholder="Tell us your requirement..."
                rows="4"
                className="p-3 rounded-lg w-full bg-white text-gray-700 outline-none border border-gray-300 focus:ring-2 focus:ring-teal-400"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition shadow-md"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>

            </form>
          ) : (
            <p className="text-center text-white font-semibold text-lg">
              {successMessage}
            </p>
          )}

        </div>
      </div>

    </div>
  </section>
);

};

export default EnquiryForm;
