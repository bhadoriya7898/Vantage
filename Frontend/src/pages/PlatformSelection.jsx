import { Link } from "react-router-dom";
import { useState } from "react";
// Make sure DepositModal.jsx exists in the same folder
import DepositModal from "./DepositModal"; 

export default function PlatformSelection() {
  const [showDeposit, setShowDeposit] = useState(false);

  const platforms = [
    {
      id: "mt5",
      title: "MT5 Trading Platform",
      icon: "/MT5.png", // Ensure this image exists in public folder
      features: [
        "Forex, Stocks, Indices & Crypto",
        "Advanced charting & indicators",
        "Multiple order types",
        "Lightning-fast execution"
      ],
      buttonText: "Start Trading",
      link: "/start-trading"
    },
    {
      id: "mt4",
      title: "MT4 Trading Platform",
      icon: "/MT5.png", // Note: You used MT5 icon for MT4 here, check if you have an MT4.png
      features: [
        "Forex-focused trading",
        "Expert Advisors (EAs)",
        "Stable & low-latency execution",
        "Custom indicators"
      ],
      buttonText: "Trade Live",
      link: "/start-trading"
    },
    {
      id: "ctrader",
      title: "cTrader Platform",
      icon: "/ctrader-logo.png",
      features: [
        "Level II pricing",
        "Advanced charting tools",
        "One-click trading",
        "Automated strategies"
      ],
      buttonText: "Trade Now",
      link: "/start-trading"
    },
    {
      id: "demo",
      title: "Demo Account",
      icon: "/logo.png",
      features: [
        "Real market conditions",
        "No deposit required",
        "Unlimited practice",
        "Ideal for beginners"
      ],
      buttonText: "Open Free Demo",
      link: "/auth"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-4 font-sans relative">
      
      {/* --- HEADER SECTION --- */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        {/* Logo */}
        <div className="w-52 mx-auto mb-8">
            <img src="/VantageLogo.png" alt="Vantage" className="w-full h-auto object-contain" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fund Your Account & Start Trading Today
        </h1>
        
        <p className="text-gray-600 text-lg leading-relaxed">
            Secure, fast, and easy deposits to get you into the market instantly.
        </p>
      </div>

      {/* --- CARDS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl w-full">
        
        {platforms.map((platform) => (
          <div 
            key={platform.id} 
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center h-full"
          >
            
            {/* Icon */}
            <div className="w-20 h-20 mb-6 flex items-center justify-center bg-white rounded-full shadow-sm p-4 border border-gray-100">
              <img 
                src={platform.icon} 
                alt={platform.title} 
                className="w-full h-full object-contain"
                // Fallback to hide broken images and show a grey circle
                onError={(e) => {
                    e.target.style.display='none'; 
                    e.target.parentNode.classList.add('bg-gray-100');
                }} 
              />
            </div>

            {/* Title */}
            {/* FIXED: Replaced invalid 'text-[color/black/solid]' with 'text-gray-900' */}
            <h3 className="text-xl font-bold text-gray-900 mb-6">
                {platform.title}
            </h3>

            {/* Features List */}
            <div className="w-full text-left flex-grow mb-8">
                <p className="text-sm font-bold text-gray-900 mb-3">Key Features</p>
                <ul className="space-y-2">
                    {platform.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            {/* Bullet point dot */}
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ACTION BUTTON LOGIC */}
            {platform.id === "demo" ? (
                // Logic: Demo goes to link
                <Link 
                    to={platform.link}
                    className="w-full py-3.5 rounded-full bg-[#E85C2A] text-white font-bold hover:bg-[#d65a25] transition active:scale-[0.98] shadow-md block text-center"
                >
                    {platform.buttonText}
                </Link>
            ) : (
                // Logic: Live accounts open the Deposit Modal
                <button
                    onClick={() => setShowDeposit(true)}
                    className="w-full py-3.5 rounded-full bg-[#E85C2A] text-white font-bold hover:bg-[#d65a25] transition active:scale-[0.98] shadow-md"
                >
                    {platform.buttonText}
                </button>
            )}

          </div>
        ))}

      </div>

      {/* --- RENDER THE DEPOSIT MODAL CONDITIONALLY --- */}
      {showDeposit && (
        <DepositModal onClose={() => setShowDeposit(false)} />
      )}

    </div>
  );
}