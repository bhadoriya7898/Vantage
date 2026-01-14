import { useState, useEffect } from "react";
import { Copy, Clock, X } from "lucide-react"; 
const walletData = {
  trc20: [
    { address: "TRC_Addr1_TGnT6CTfHYJVYLHeHukc5REYZs76G76ggX", qr: "/qr-placeholder.png" },
    { address: "TRC_Addr2_TE2356CTfHYJVYLHeHukc5REYZs76G76ggX", qr: "/qr-placeholder.png" },
    { address: "TRC_Addr3_T9988CTfHYJVYLHeHukc5REYZs76G76ggX", qr: "/qr-placeholder.png" },
    { address: "TRC_Addr4_TAAAACTfHYJVYLHeHukc5REYZs76G76ggX", qr: "/qr-placeholder.png" },
    { address: "TRC_Addr5_TBBBBCTfHYJVYLHeHukc5REYZs76G76ggX", qr: "/qr-placeholder.png" },
    { address: "TRC_Addr6_TCCCCCTfHYJVYLHeHukc5REYZs76G76ggX", qr: "/qr-placeholder.png" },
  ],
  erc20: [
    { address: "0xERC_Addr1_71C7656EC7ab88b098defB751B7401B5", qr: "/qr-placeholder.png" },
    { address: "0xERC_Addr2_82D8656EC7ab88b098defB751B7401B5", qr: "/qr-placeholder.png" },
    { address: "0xERC_Addr3_93E9656EC7ab88b098defB751B7401B5", qr: "/qr-placeholder.png" },
    { address: "0xERC_Addr4_A4F0656EC7ab88b098defB751B7401B5", qr: "/qr-placeholder.png" },
    { address: "0xERC_Addr5_B5G1656EC7ab88b098defB751B7401B5", qr: "/qr-placeholder.png" },
    { address: "0xERC_Addr6_C6H2656EC7ab88b098defB751B7401B5", qr: "/qr-placeholder.png" },
  ],
  btc: [
    { address: "bc1_BTC_Addr1_qxy2kgdygjrsqtzq2n0yrf2493p83", qr: "/qr-placeholder.png" },
    { address: "bc1_BTC_Addr2_axy2kgdygjrsqtzq2n0yrf2493p83", qr: "/qr-placeholder.png" },
    { address: "bc1_BTC_Addr3_bxy2kgdygjrsqtzq2n0yrf2493p83", qr: "/qr-placeholder.png" },
    { address: "3_BTC_Legacy1_J983kkfjhx0wlh2kgdygjrsqtzq2", qr: "/qr-placeholder.png" },
    { address: "1_BTC_Legacy2_K123kkfjhx0wlh2kgdygjrsqtzq2", qr: "/qr-placeholder.png" },
    { address: "bc1_BTC_Addr6_zxy2kgdygjrsqtzq2n0yrf2493p83", qr: "/qr-placeholder.png" },
  ],
  bop20: [
    { address: "0xBOP_Addr1_D7ggg908sh897s76G76ggXTGnT6CTf", qr: "/qr-placeholder.png" },
    { address: "0xBOP_Addr2_E8hhh908sh897s76G76ggXTGnT6CTf", qr: "/qr-placeholder.png" },
    { address: "0xBOP_Addr3_F9iii908sh897s76G76ggXTGnT6CTf", qr: "/qr-placeholder.png" },
    { address: "0xBOP_Addr4_G0jjj908sh897s76G76ggXTGnT6CTf", qr: "/qr-placeholder.png" },
    { address: "0xBOP_Addr5_H1kkk908sh897s76G76ggXTGnT6CTf", qr: "/qr-placeholder.png" },
    { address: "0xBOP_Addr6_I2lll908sh897s76G76ggXTGnT6CTf", qr: "/qr-placeholder.png" },
  ],
};

export default function DepositModal({ onClose }) {
  const [selectedNetwork, setSelectedNetwork] = useState("trc20");
  const [amount, setAmount] = useState("1500");
  const [timeLeft, setTimeLeft] = useState(90); 
  

  const [currentWallet, setCurrentWallet] = useState(() => {
     const defaultPool = walletData["trc20"];
     return defaultPool[Math.floor(Math.random() * defaultPool.length)];
  });

  // Timer Logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  // Format Time
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // --- 3. HANDLE NETWORK CLICK ---
  const handleNetworkSelect = (networkId) => {
    setSelectedNetwork(networkId);
    
    const networkPool = walletData[networkId];
    
    if (networkPool) {
        
        const randomWallet = networkPool[Math.floor(Math.random() * networkPool.length)];
        setCurrentWallet(randomWallet);
    }
  };

  const networks = [
    { id: "trc20", label: "TRC 20", icon: "/trc.png" }, 
    { id: "bop20", label: "BOP 20", icon: "/BOP.png" },
    { id: "erc20", label: "ERC 20", icon: "/erc.png" },
    { id: "btc", label: "BTC", icon: "/btc.png" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4 font-sans">
      
      {/* Modal Card */}
      <div className="bg-white rounded-2xl w-full max-w-[480px] p-6 relative shadow-2xl animate-fade-in-up max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">        

      {/* --- HEADER --- */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Deposit</h2>
            <p className="text-sm text-gray-500 mt-1">To continue, select and Pay</p>
          </div>

          <div className="flex items-center gap-3">
             <span className="bg-[#0f3d42] text-white text-s font-semibold px-4 py-1.5 rounded-full">
               Crypto
             </span>
             
             <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
             >
                <X size={24} />
             </button>
          </div>
        </div>

        {/* --- NETWORK SELECTION GRID --- */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {networks.map((net) => (
            <button
              key={net.id}
              onClick={() => handleNetworkSelect(net.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                selectedNetwork === net.id
                  ? "border-[#0f3d42] bg-[#0f3d42]/5 ring-1 ring-[#0f3d42]"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
            >
              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                 <img src={net.icon} alt={net.label} className="w-full h-full object-cover" /> 
              </div>
              <span className={`text-sm font-semibold ${selectedNetwork === net.id ? "text-[#0f3d42]" : "text-gray-700"}`}>
                {net.label}
              </span>
            </button>
          ))}
        </div>

        {/* MANUAL AMOUNT INPUT */}
        <div className="mb-4">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                Enter Amount ($)
            </label>
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900 font-bold text-lg">$</span>
                <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full h-12 pl-8 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-lg font-bold text-gray-900 focus:outline-none focus:border-[#F36A2E] focus:ring-1 focus:ring-[#F36A2E] transition-all"
                />
            </div>
        </div>

        {/* --- DYNAMIC QR CODE SECTION --- */}
        <div className="flex flex-col items-center mb-2">
          <div className="w-40 h-40 bg-white p-2 rounded-xl border border-dashed border-gray-300 mb-4 flex items-center justify-center">
             <img 
                src={currentWallet.qr} 
                onError={(e) => e.target.src = "/qr-placeholder.png"} 
                alt="QR Code" 
                className="w-full h-full object-contain" 
             />
          </div>
          
          <div className="w-full text-left">
              <p className="text-xs text-gray-500 font-medium mb-1">
                 {selectedNetwork.toUpperCase()} Deposit Address:
              </p>
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <span className="text-xs md:text-sm font-mono text-gray-600 truncate mr-2">
                    {currentWallet.address}
                  </span>
                  <button 
                    className="text-gray-400 hover:text-[#F36A2E] transition"
                    onClick={() => navigator.clipboard.writeText(currentWallet.address)}
                    title="Copy Address"
                  >
                      <Copy size={18} />
                  </button>
              </div>
          </div>
        </div>

        {/* --- SUMMARY & TIMER --- */}
        <div className="flex items-center justify-between mb-4">
            <div>
                <p className="text-2xl font-bold text-gray-900">
                    $ {parseFloat(amount || 0).toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 font-medium">Amount Pay</p>
            </div>
            
            <div className="flex items-center gap-1.5 text-[#E85C2A] bg-orange-50 px-3 py-1.5 rounded-lg">
                <Clock size={16} />
                <span className="text-sm font-bold">{formatTime(timeLeft)} Min</span>
            </div>
        </div>

        {/* --- ACTION BUTTON --- */}
        <button className="w-full py-4 rounded-full bg-[#E85C2A] text-white font-bold text-sm tracking-wider shadow-lg hover:bg-[#d65a25] transition active:scale-[0.98]">
            PAY NOW
        </button>

        {/* --- FOOTER DISCLAIMER --- */}
        <p className="text-[11px] text-center text-gray-400 mt-2 leading-tight max-w-xs mx-auto">
            Login credentials will be sent to your email within 15–20 minutes.
        </p>

      </div>
    </div>
  );
}