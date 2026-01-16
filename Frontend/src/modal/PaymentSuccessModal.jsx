import { Check } from "lucide-react";

export default function PaymentSuccessModal({ onDone }) {
  return (
    // 1. Add onClick={onDone} here to close when clicking the overlay
    <div 
      onClick={onDone}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4 font-sans"
    >
      
      {/* 2. Add onClick={(e) => e.stopPropagation()} here to prevent closing when clicking inside the box */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-[400px] p-8 flex flex-col items-center text-center relative shadow-2xl animate-fade-in-up"
      >
        
        {/* --- ICON SECTION --- */}
        <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
            {/* Confetti Image */}
            <img 
                src="/success-confetti.png" 
                alt="Success" 
                className="w-full h-full object-contain relative z-10"
                onError={(e) => {
                    e.target.style.display='none'; 
                    e.target.nextSibling.style.display='flex'; 
                }}
            />
            
            {/* Fallback Icon */}
            <div className="hidden absolute inset-0 bg-blue-50 rounded-full items-center justify-center z-0">
                <div className="w-12 h-12 bg-[#0A4A53] rounded-full flex items-center justify-center text-white shadow-lg">
                    <Check size={28} strokeWidth={4} />
                </div>
            </div>
        </div>

        {/* --- TEXT CONTENT --- */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Successfully Pay
        </h2>
        
        <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mb-8">
            Login credentials will be sent to your email within 15–20 minutes.
        </p>

        {/* --- DONE BUTTON --- */}
        <button 
            onClick={onDone}
            className="w-full py-4 rounded-full bg-[#E85C2A] text-white font-bold text-sm tracking-wider shadow-[0_4px_14px_rgba(232,92,42,0.4)] hover:bg-[#d65a25] transition active:scale-[0.98]"
        >
            DONE
        </button>

      </div>
    </div>
  );
}