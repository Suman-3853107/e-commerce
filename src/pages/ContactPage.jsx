import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaHeadset,
  FaTruck,
  FaQuestionCircle,
} from "react-icons/fa";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Your message has been sent ✅");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white px-4 py-16">
    <div className="max-w-7xl mx-auto space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold text-primary mb-4">
          Get in Touch with Us
        </h1>
        <p className="text-muted text-lg">
          Questions or concerns? Our support team is always available to help!
        </p>
      </section>

      {/* Image Banner */}
      <section className="overflow-hidden rounded-3xl shadow-xl" data-aos="zoom-in">
        <img
          src="/images/contact-banner.jpg"
          alt="Customer Service"
          className="w-full h-80 object-cover"
        />
      </section>

      {/* Info Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-muted" data-aos="fade-up">
        {[{
          icon: <FaHeadset />,
          title: "24/7 Support",
          text: "Chat or email us anytime."
        }, {
          icon: <FaTruck />,
          title: "Fast Delivery",
          text: "Real-time order updates."
        }, {
          icon: <FaQuestionCircle />,
          title: "Help Center",
          text: "Quick answers to your questions."
        }].map((item, i) => (
          <div key={i} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-3xl text-primary mb-3">{item.icon}</div>
            <h4 className="text-xl font-semibold text-black mb-1">{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      {/* Contact Form Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start" data-aos="fade-up">
        <div className="hidden md:block">
          <img
            src="/images/getInTouch.jpg"
            alt="Get in Touch"
            className="w-full rounded-3xl object-cover h-full shadow-xl"
          />
        </div>

        {/* Form Card */}
        <div className=" ">
          <h3 className="text-3xl font-bold text-primary mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            {["name", "email", "subject", "message"].map((field, i) => (
              <div key={i}>
                <label className="block text-sm text-muted mb-1 capitalize">{field}</label>
                {field === "message" ? (
                  <textarea
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-100 rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={
                      field === "name"
                        ? "Jane Doe"
                        : field === "email"
                        ? "you@example.com"
                        : "Enter here..."
                    }
                    className="w-full px-4 py-2 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center" data-aos="fade-up">
        {[
          { icon: <FaPhoneAlt />, line1: "+1 (234) 567-8901", line2: "24/7 Phone Support" },
          { icon: <FaEnvelope />, line1: "support@shopyvia.com", line2: "Avg reply: 30 min" },
          { icon: <FaMapMarkerAlt />, line1: "Business City, 12345", line2: "Mon–Fri: 9AM–6PM" },
          {
            icon: (
              <div className="flex justify-center gap-4 text-xl">
                <FaFacebook className="hover:text-blue-600 transition" />
                <FaTwitter className="hover:text-blue-400 transition" />
                <FaInstagram className="hover:text-pink-500 transition" />
              </div>
            ),
            line1: "Follow Us",
            line2: "@shopyvia socials",
          },
        ].map((info, i) => (
          <div key={i} className="p-4 bg-white/50 rounded-xl backdrop-blur-sm shadow">
            <div className="text-primary text-2xl mb-2">{info.icon}</div>
            <p className="text-black font-semibold">{info.line1}</p>
            <p className="text-sm text-muted">{info.line2}</p>
          </div>
        ))}
      </section>
    </div>
  </div>
);}
export default ContactPage;
