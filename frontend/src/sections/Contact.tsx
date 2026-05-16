import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import toast from "react-hot-toast";
import { Mail, MessageCircle, Clock, Globe, CheckCircle } from "lucide-react";

const SERVICE_OPTIONS = [
  "Resume Writing",
  "LinkedIn Optimisation",
  "Naukri Profile Boost",
  "Combo / Bundle Pack",
  "Not sure — need advice",
];
const AUDIENCE_OPTIONS = [
  "Fresher / Student",
  "Experienced Professional",
  
];

const TRUST_POINTS = [
 
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [audience, setAudience] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    if (!name || !service) {
      toast.error("Please enter your name and select a service first.");
      return;
    }
    const text = encodeURIComponent(
      "Hi! I'm " +
        name +
        ".\n\nInterested in: " +
        service +
        "\nAudience: " +
        (audience || "Not specified") +
        "\n\n" +
        message
    );
    window.open(
      "https://wa.me/" + SITE_CONFIG.whatsapp + "?text=" + text,
      "_blank"
    );
  };

  const handleEmail = () => {
    if (!name || !email) {
      toast.error("Please enter your name and email first.");
      return;
    }
    const subject = encodeURIComponent(
      "Resume Service Enquiry — " + (service || "General")
    );
    const body = encodeURIComponent(
      "Hi CareerElevate Team,\n\nName: " +
        name +
        "\nEmail: " +
        email +
        "\nPhone: " +
        (phone || "Not provided") +
        "\nI am a: " +
        (audience || "Not specified") +
        "\nService: " +
        (service || "Not specified") +
        "\n\nMessage:\n" +
        (message || "I would like to know more.") +
        "\n\nThanks!"
    );
    window.open(
      "mailto:" +
        SITE_CONFIG.email +
        "?subject=" +
        subject +
        "&body=" +
        body
    );
  };

  return (
    <section id="contact" className="py-10 px-6 bg-bg">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Get In Touch"
          title="Start Your Career<br/>Transformation Today"
        />

        {/* Grid: equal-height columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* ── Left card ── */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col gap-4">

            {/* Top: contact details */}
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-500 leading-relaxed">
                Have questions or ready to get started? Reach out via WhatsApp
                or email.
              </p>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center text-accent flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted mb-0.5">Email</div>
                  <div className="text-sm font-medium">{SITE_CONFIG.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center text-accent flex-shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted mb-0.5">WhatsApp</div>
                  <div className="text-sm font-medium">
                    {SITE_CONFIG.whatsappDisplay}
                  </div>
                </div>
              </div>

            

              
            </div>

      

            {/* Bottom: CTA */}
            <a
              href={"https://wa.me/" + SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-syne font-bold text-sm px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 w-full"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* ── Right card: form ── */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
            <h3 className="font-bold text-base mb-4 text-gray-900">
              Book a Consultation
            </h3>

            <div className="flex flex-col gap-3 flex-1">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-600 font-medium mb-1 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-black placeholder:text-gray-400 outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 font-medium mb-1 block">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98XXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-black placeholder:text-gray-400 outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-600 font-medium mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-black placeholder:text-gray-400 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-xs text-gray-600 font-medium mb-1 block">
                  I Am A...
                </label>
                <select
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-black outline-none focus:border-orange-500"
                >
                  <option value="">Select...</option>
                  {AUDIENCE_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-600 font-medium mb-1 block">
                  Service Interested In
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-black outline-none focus:border-orange-500"
                >
                  <option value="">Select a service...</option>
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-600 font-medium mb-1 block">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Any specific goals or requirements?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-black placeholder:text-gray-400 outline-none focus:border-orange-500 resize-none"
                />
              </div>

              {/* Buttons pinned to bottom */}
              <div className="grid grid-cols-2 gap-3 mt-auto pt-1">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 bg-green-500 text-white text-sm py-2.5 rounded-md hover:bg-green-600 transition"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </button>
                <button
                  type="button"
                  onClick={handleEmail}
                  className="flex items-center justify-center gap-2 bg-orange-500 text-white text-sm py-2.5 rounded-md hover:bg-orange-600 transition"
                >
                  <Mail size={15} />
                  Send Email
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}