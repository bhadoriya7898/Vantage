import { useState } from "react";
import { ChevronDown } from "lucide-react"; 

export default function ClientPortalLogin() {
  const [activeTab, setActiveTab] = useState("email");
  const [countryCode, setCountryCode] = useState("+91");
  

  const [formData, setFormData] = useState({
    identifier: "", 
    password: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Payload:", {
      type: activeTab,
      countryCode: activeTab === "phone" ? countryCode : null,
      ...formData
    });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white font-sans">
      
      {/* LEFT PANEL */}
      <div className="hidden lg:flex relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f2f2f2] via-[#f6c6a8] to-[#1b5f6d]" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="w-[442px] h-[300px] flex items-center justify-center">
              <img src="/sideimg.png" alt="Vantage" className="object-contain" />
            </div>
          </div>

          <h2 className="text-white text-2xl font-semibold mt-8 drop-shadow-md">
            Vantage | Trading, Redefined.
          </h2>

          <p className="text-white/90 text-sm text-center max-w-sm">
            Login to your Vantage Client Portal for Seamless Trading Experiences
          </p>
        </div>
      </div>

      {/* RIGHT LOGIN PANEL */}
      <div className="flex items-center justify-center px-4">
       {/*LANGUAGE SELECTOR*/}
        <div className="absolute top-6 right-6 z-20">
          <button className="px-4 py-2 rounded-full border text-sm shadow-sm hover:bg-gray-50 transition bg-white">
            English
          </button>
        </div>
        <div className="w-full max-w-[420px] py-12 relative">
          
          

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Vantage" className="h-14 object-contain" />
          </div>

          {/* Heading */}
          <h1 className="text-center text-[24px] leading-[31.2px] font-normal text-black mb-6">
            Client Portal Login
          </h1>

          {/* Tabs */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => setActiveTab("email")}
              className={`flex-1 py-2 rounded-md text-sm transition font-medium ${
                activeTab === "email"
                  ? "bg-[#0A4A53] text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Email Address
            </button>

            <button
              onClick={() => setActiveTab("phone")}
              className={`flex-1 py-2 rounded-md text-sm transition font-medium ${
                activeTab === "phone"
                  ? "bg-[#0A4A53] text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Phone Number
            </button>
          </div>

          {/* FORM START */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {activeTab === "email" && (
              <input
                name="identifier"
                type="email"
                placeholder="Email *"
                required
                onChange={handleInputChange}
                className="w-full h-[52px] px-4 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-[#0A4A53]/20 transition border border-transparent focus:border-[#0A4A53]"
              />
            )}

            {activeTab === "phone" && (
              <div className="flex gap-3">
                {/* COUNTRY CODE */}
                <div className="relative w-[100px]">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="
                      w-full h-[52px] px-3 pr-8 rounded-lg bg-gray-100 
                      outline-none text-sm cursor-pointer appearance-none
                      focus:ring-2 focus:ring-[#0A4A53]/20
                    "
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    <option value="+65">+65</option>
                  </select>
                  
                  {/*Icon*/}
                  <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                    <ChevronDown size={16} />
                  </div>
                </div>

                {/* PHONE NUMBER */}
                <input
                  name="identifier"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  onChange={handleInputChange}
                  className="flex-1 h-[52px] px-4 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-[#0A4A53]/20 transition border border-transparent focus:border-[#0A4A53]"
                />
              </div>
            )}

            <input
              name="password"
              type="password"
              placeholder="Password *"
              required
              onChange={handleInputChange}
              className="w-full h-[52px] px-4 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-[#0A4A53]/20 transition border border-transparent focus:border-[#0A4A53]"
            />

            <button className="w-full h-[56px] rounded-full bg-[#F36A2E] text-white font-medium shadow-lg hover:opacity-90 hover:shadow-xl active:scale-[0.99] transition-all">
              Log in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 uppercase tracking-wide">Other Login Method</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Telegram Button */}
          <button
            className="w-full h-[52px] rounded-full bg-gray-100 flex items-center justify-center gap-3 hover:bg-gray-200 transition group"
          >
            <img
              src="/telegramlogo.png"
              alt="Telegram"
              className="h-5 w-5 object-contain group-hover:scale-110 transition"
            />
            <span className="text-[#229ED9] font-semibold">Telegram</span>
          </button>

          {/* Links */}
          <div className="mt-4 text-sm text-[#F36A2E] text-center">
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>

          <div className="mt-8 text-center text-sm">
            <span className="text-gray-500">Not A Client?</span>{" "}
            <a href="/signup" className="text-[#F36A2E] font-medium hover:underline">
              Open Live Account
            </a>
          </div>

          {/* Chat*/}
          <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 cursor-pointer hover:scale-110 transition-transform origin-bottom-right">
            <img
              src="/messagecontainer.png"
              alt="Support"
              className="h-16 w-auto md:h-20 lg:h-24 drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
}