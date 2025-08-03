import React, { useState } from "react";
import { motion } from "framer-motion";
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

  const tiltHover = {
    whileHover: {
      rotateX: -5,
      rotateY: 5,
      scale: 1.03,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };

  const featureCards = [
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      text: "Chat or email us anytime.",
      bg: "from-purple-100 to-purple-50",
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      text: "Real-time order updates.",
      bg: "from-green-100 to-green-50",
    },
    {
      icon: <FaQuestionCircle />,
      title: "Help Center",
      text: "Quick answers to your questions.",
      bg: "from-yellow-100 to-yellow-50",
    },
  ];

  const contactInfoCards = [
    {
      icon: <FaPhoneAlt />,
      line1: "+1 (234) 567-8901",
      line2: "24/7 Phone Support",
      bg: "from-indigo-100 to-indigo-50",
    },
    {
      icon: <FaEnvelope />,
      line1: "support@shopyvia.com",
      line2: "Avg reply: 30 min",
      bg: "from-pink-100 to-pink-50",
    },
    {
      icon: <FaMapMarkerAlt />,
      line1: "Business City, 12345",
      line2: "Mon–Fri: 9AM–6PM",
      bg: "from-orange-100 to-orange-50",
    },
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
      bg: "from-sky-100 to-sky-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white px-4 py-16">
      <div className="max-w-7xl mx-auto space-y-20">
       
        <section className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h1 className="text-5xl font-extrabold text-primary mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-muted text-lg">
            Questions or concerns? Our support team is always available to help!
          </p>
        </section>

       
        <section className="overflow-hidden rounded-3xl shadow-xl" data-aos="zoom-in">
          <img
            src="/images/contact-banner.jpg"
            alt="Customer Service"
            className="w-full h-80 object-cover"
          />
        </section>

        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" data-aos="fade-up">
          {featureCards.map((item, i) => (
            <motion.div
              key={i}
              {...tiltHover}
              style={{ perspective: 1000 }}
              className={`bg-gradient-to-br ${item.bg} p-6 rounded-2xl shadow-xl hover:shadow-2xl border border-white/30 backdrop-blur-sm transition`}
            >
              <div className="text-4xl text-primary mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-black mb-1">{item.title}</h4>
              <p className="text-muted">{item.text}</p>
            </motion.div>
          ))}
        </section>

        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start" data-aos="fade-up">
         
          <div className="block">
            <img
              src="/images/getInTouch.jpg"
              alt="Get in Touch"
              className="w-full h-[250px] md:h-full rounded-3xl object-cover shadow-xl"
            />
          </div>

         
          <div>
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

    
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center" data-aos="fade-up">
          {contactInfoCards.map((info, i) => (
            <motion.div
              key={i}
              {...tiltHover}
              style={{ perspective: 1000 }}
              className={`p-6 bg-gradient-to-br ${info.bg} rounded-xl backdrop-blur-md border border-white/30 shadow-xl hover:shadow-2xl`}
            >
              <div className="text-primary text-2xl mb-3">{info.icon}</div>
              <p className="text-black font-semibold">{info.line1}</p>
              <p className="text-sm text-muted">{info.line2}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
