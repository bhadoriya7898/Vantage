import { useState } from "react";
import { 
  Eye, 
  EyeOff, 
  ChevronDown, 
  Check, 
  HelpCircle,
  MessageCircle
} from "lucide-react"; 

export default function OpenLiveAccount() {
  const [activeTab, setActiveTab] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("individual");

  const [formData, setFormData] = useState({
    country: "United Kingdom",
    email: "",
    phoneCode: "+91",
    phoneNumber: "",
    password: "",
    referral: "",
    isNotUS: false,
    agreed: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { type: activeTab, accountType, ...formData });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white font-sans">
      
      {/* LEFT PANEL */}
      <div className="hidden lg:flex relative flex-col justify-between overflow-hidden bg-slate-900">
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-60">
            <img 
                src="openliveleft.jpg" 
                alt="Background" 
                className="w-full h-full object-cover"
            />
             {/* Gradient*/}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/90" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-12">
          
          {/* Feature Cards */}
          <div className="space-y-4 w-full max-w-md mb-12">
            
            {/* Card 1 - Zero Commission */}
            <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-lg animate-fade-in-up">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-orange-50 flex items-center justify-center p-2">
                <img src="/zerocommision.png" alt="Zero Commission" className="w-full h-full object-contain" />
              </div>
              <p className="text-sm font-medium text-gray-700">
                Enjoy <span className="font-bold">$0 commissions</span> when you trade US shares
              </p>
            </div>

            {/* Card 2 - Expert Trades */}
            <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-orange-50 flex items-center justify-center p-2">
                 <img src="/expertTrades.png" alt="Expert Trades" className="w-full h-full object-contain" />
              </div>
              <p className="text-sm font-medium text-gray-700">
                <span className="font-bold">Copy the trades of experts</span> with our copy trading feature
              </p>
            </div>

             {/* Card 3 - Exclusive Benefits */}
             <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-orange-50 flex items-center justify-center p-2">
                 <img src="/exclusiveBenefits.png" alt="Exclusive Benefits" className="w-full h-full object-contain" />
              </div>
              <p className="text-sm font-medium text-gray-700">
                Unlock <span className="font-bold">exclusive benefits</span> from our Loyalty Programme
              </p>
            </div>
          </div>

          {/* Large Text */}
          <h2 className="text-white text-3xl font-bold text-center uppercase tracking-wide leading-snug max-w-lg">
            Open a live trading account in 5 minutes
          </h2>

           {/* Pagination Dots */}
           <div className="flex gap-2 mt-8">
               <div className="w-6 h-1.5 bg-white rounded-full"></div>
               <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
               <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
           </div>
        </div>

        {/* Bottom Left FAQ */}
        <div className="relative z-10 p-8">
            <button className="flex items-center gap-2 text-white/70 hover:text-white transition text-sm">
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                    <HelpCircle size={14} />
                </div>
                Click Here To See FAQ
            </button>
        </div>
      </div>


      {/* RIGHT FORM PANEL */}
      <div className="relative flex flex-col items-center justify-center px-6 py-10 w-full overflow-y-auto">
        
        {/* Top Right Language Selector */}
        <div className="absolute top-6 right-6">
             <button className="w-10 h-10 rounded-full border border-gray-200 text-xs font-bold text-gray-600 shadow-sm hover:bg-gray-50 flex items-center justify-center">
                 EN
             </button>
        </div>

        <div className="w-full max-w-[420px]">
            {/* Logo */}
            <div className="flex justify-center mb-6">
                <div className="w-12 h-12">
                   <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
            </div>

            <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Open Live Account
            </h1>

            {/* Tabs */}
            <div className="flex bg-gray-200 rounded-lg p-1 mb-6">
                <button
                    onClick={() => setActiveTab("email")}
                    className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
                        activeTab === "email"
                        ? "bg-[#0A4A53] text-white shadow-md"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                    Email Address
                </button>
                <button
                    onClick={() => setActiveTab("phone")}
                    className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
                        activeTab === "phone"
                        ? "bg-[#0A4A53] text-white shadow-md"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                    Phone Number
                </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Country Dropdown */}
                <div className="relative">
                    <select 
                        className="w-full h-[52px] bg-gray-100 rounded-lg px-4 text-gray-700 outline-none focus:ring-2 focus:ring-[#F36A2E]/20 appearance-none cursor-pointer"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                    >
                        <option>United Kingdom</option>
                        <option>India</option>
                        <option>United States</option>
                        <option>Australia</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>

                {/*CONDITIONAL RENDERING FOR EMAIL VS PHONE*/}
                {activeTab === "email" ? (
                    // Email Input
                    <input 
                        type="email" 
                        placeholder="Email"
                        className="w-full h-[52px] bg-gray-100 rounded-lg px-4 outline-none focus:ring-2 focus:ring-[#F36A2E]/20 placeholder-gray-400"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                ) : (
                    <div className="flex gap-3">
                        {/* Code Dropdown */}
                        <div className="relative w-1/3">
                            <select 
                                className="w-full h-[52px] bg-gray-100 rounded-lg pl-3 pr-8 text-gray-700 outline-none focus:ring-2 focus:ring-[#F36A2E]/20 appearance-none cursor-pointer"
                                value={formData.phoneCode}
                                onChange={(e) => setFormData({...formData, phoneCode: e.target.value})}
                            >
                                <option value="+44">+44</option>
                                <option value="+91">+91</option>
                                <option value="+1">+1</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>

                        {/* Phone Number Input */}
                        <input 
                            type="tel" 
                            placeholder="Phone"
                            className="flex-1 h-[52px] bg-gray-100 rounded-lg px-4 outline-none focus:ring-2 focus:ring-[#F36A2E]/20 placeholder-gray-400"
                            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                        />
                    </div>
                )}

                {/* Password Input */}
                <div className="relative">
                    <input 
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full h-[52px] bg-gray-100 rounded-lg px-4 outline-none focus:ring-2 focus:ring-[#F36A2E]/20 placeholder-gray-400"
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                    <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                    </button>
                </div>

                {/* Referred By */}
                <input 
                    type="text" 
                    placeholder="Referred By"
                    className="w-full h-[52px] bg-gray-100 rounded-lg px-4 outline-none focus:ring-2 focus:ring-[#F36A2E]/20 placeholder-gray-400"
                    onChange={(e) => setFormData({...formData, referral: e.target.value})}
                />

                {/* Radio Group - Account Type */}
                <div className="flex items-center gap-6 py-2">
                    {["Individual", "Company", "Trust"].map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer group">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${accountType === type.toLowerCase() ? "border-[#F36A2E]" : "border-gray-300"}`}>
                                {accountType === type.toLowerCase() && (
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#F36A2E]" />
                                )}
                            </div>
                            <input 
                                type="radio" 
                                name="accountType" 
                                className="hidden"
                                checked={accountType === type.toLowerCase()}
                                onChange={() => setAccountType(type.toLowerCase())}
                            />
                            <span className={`text-sm ${accountType === type.toLowerCase() ? "text-gray-800 font-medium" : "text-gray-500"}`}>
                                {type}
                            </span>
                        </label>
                    ))}
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 mt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <div className={`w-5 h-5 rounded border mt-0.5 flex-shrink-0 flex items-center justify-center transition-colors ${formData.isNotUS ? "bg-[#F36A2E] border-[#F36A2E]" : "border-gray-300 bg-gray-100"}`}>
                             {formData.isNotUS && <Check size={14} className="text-white" />}
                        </div>
                        <input type="checkbox" className="hidden" onChange={(e) => setFormData({...formData, isNotUS: e.target.checked})} />
                        <span className="text-sm text-gray-600 leading-tight select-none">I am not a US resident</span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                        <div className={`w-5 h-5 rounded border mt-0.5 flex-shrink-0 flex items-center justify-center transition-colors ${formData.agreed ? "bg-[#F36A2E] border-[#F36A2E]" : "border-gray-300 bg-gray-100"}`}>
                             {formData.agreed && <Check size={14} className="text-white" />}
                        </div>
                        <input type="checkbox" className="hidden" onChange={(e) => setFormData({...formData, agreed: e.target.checked})}/>
                        <span className="text-sm text-gray-600 leading-tight select-none">
                            I agree to Vantage using my data for product/service information, offers, events, and application support. You can unsubscribe anytime. For details, see our <a href="#" className="underline text-gray-800">Privacy Policy</a>.
                        </span>
                    </label>
                </div>

                {/* Submit Button */}
                <button className="w-full h-[56px] mt-6 rounded-full bg-[#F36A2E] text-white font-bold tracking-wide shadow-lg hover:bg-[#d65a25] transition active:scale-[0.99]">
                    CREATE ACCOUNT
                </button>

            </form>

            {/* Footer Links */}
            <div className="flex items-center justify-center gap-4 mt-6 text-sm">
                <a href="#" className="text-[#0A4A53] hover:underline font-medium">Practice Trading</a>
                <span className="text-gray-300">/</span>
                <a href="login" className="text-gray-500 hover:text-gray-800 hover:underline">Login</a>
            </div>

        </div>

        {/* Chat Widget*/}
        <div className="fixed bottom-6 right-6 z-50">
            <button className="w-14 h-14 bg-[#F36A2E] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition cursor-pointer">
                <MessageCircle size={24} fill="white" />
            </button>
        </div>

      </div>
    </div>
  );
}