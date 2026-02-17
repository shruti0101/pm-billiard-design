"use client";
import React, { useState, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import axios from "axios";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const product = form.products.value;
    const message = form.message.value;

    try {
      const payload = {
        platform: "PM Billiards Snooker Tables Contact Form",
        platformEmail: "info@pmbilliards.com",
        name,
        phone,
        email,
        place: "New Delhi Showroom",
        product,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      if (data?.success) {
        setSubmitted(true);

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}

Message: ${message}

Contact: ${phone}`;

        const waUrl = `https://wa.me/+919999402424?text=${encodeURIComponent(
          whatsappText
        )}`;

        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);

        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Submission failed. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <div
        className="relative bg-cover bg-center h-[60vh] md:h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/snooker2.webp')",
        }}
      >
        <div className="relative z-10 text-white px-6">
          <div className="mx-auto mb-4 h-[2px] w-20 bg-[#EDBC41] rounded-full" />
          <h1 className="text-3xl md:text-6xl font-bold tracking-wide">
            Contact PM Billiards
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-sm md:text-lg text-white/90">
            Premium snooker, pool, and billiard tables crafted for professionals, 
            clubs, and luxury homes. Let’s build your championship table.
          </p>
        </div>

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30" />
      </div>

      {/* ===== CONTACT SECTION ===== */}
      <section className="w-full bg-[#0B1511] py-16 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT — FORM */}
          <div className="bg-[#101C17] shadow-xl rounded-2xl p-8 border border-[#EDBC41]/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Enquire for a Snooker Table
            </h2>

            {!submitted ? (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="p-3 rounded-lg bg-[#0B1511] border border-[#EDBC41]/30 text-white"
                  />

                  <select
                    name="products"
                    required
                    className="p-3 rounded-lg bg-[#0B1511] border border-[#EDBC41]/30 text-white"
                  >
                    <option disabled>Select Product</option>
                    <option value="Professional Snooker Table">
                      Professional Snooker Table
                    </option>
                    <option value="Tournament Pool Table">
                      Tournament Pool Table
                    </option>
                    <option value="Luxury Billiard Table">
                      Luxury Billiard Table
                    </option>
                    <option value="Snooker Cues">
                      Snooker Cues
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="p-3 rounded-lg bg-[#0B1511] border border-[#EDBC41]/30 text-white"
                  />

                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className="p-3 rounded-lg bg-[#0B1511] border border-[#EDBC41]/30 text-white"
                  />
                </div>

                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Your requirements..."
                  className="w-full bg-[#0B1511] border border-[#EDBC41]/30 rounded-lg px-4 py-3 text-white"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#EDBC41] text-black px-8 py-3 rounded-lg font-semibold"
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-[#EDBC41]">
                  🎉 Enquiry Submitted!
                </h3>
                <p className="text-white/80">
                  Our team will contact you shortly.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT — INFO */}
          <div>
            <h3 className="text-2xl font-bold text-[#EDBC41] mb-4">
              Visit Our Showroom
            </h3>

            <p className="text-white/90 mb-6">
              PM Billiards specializes in tournament-grade snooker tables, 
              precision-crafted with premium slate, professional cloth, and 
              handcrafted wooden frames.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#EDBC41] w-6 h-6" />
                <p className="text-white/90">
                  PM Billiards Showroom,  
                  <br />
                  Ranhola Vihar, Najafgarh Road  
                  <br />
                  New Delhi, 110041
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#EDBC41] w-6 h-6" />
                <p className="text-white/90">
                  <a href="tel:9999402424">9999402424</a>,{" "}
                  <a href="tel:8595063087">8595063087</a>
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[#EDBC41] w-6 h-6" />
                <p className="text-white/90">
                  info@pmbilliards.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GOOGLE MAP */}
        <div className="w-full h-[450px] mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.674029824373!2d77.0564707!3d28.6616964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01c4c2d1a55f%3A0x3f38e96f6a92c4b1!2sRanhola%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
