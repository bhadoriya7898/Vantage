import React from 'react';
import { X, Plus } from 'lucide-react';

const FAQModal = ({ onClose }) => {
  const faqs = [
    {
      id: 1,
      question: "What is a live trading account?",
      answer: "A live trading account is..." 
    },
    {
      id: 2,
      question: "What are the advantages of opening a live trading account?",
      answer: "The advantages include..."
    },
    {
      id: 3,
      question: "What documents do I need in order to open a live account?",
      answer: "You will need..."
    },
    {
      id: 4,
      question: "How long does it take to open a live trading account with Vantage?",
      answer: "It typically takes..."
    },
    {
      id: 5,
      question: "What’s the difference between a demo and live trading account?",
      answer: "A demo account is for practice..."
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl mx-4 bg-white rounded-xl shadow-2xl p-8 md:p-12 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mt-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 last:border-none">
              <button className="w-full flex items-center justify-between py-6 text-left focus:outline-none group">
                <div className="flex items-start">
                  <span className="text-gray-400 font-medium mr-6 w-4">{faq.id}</span>
                  <span className="text-xl text-gray-900 font-medium group-hover:text-[#F36A2E] transition-colors">
                    {faq.question}
                  </span>
                </div>
                <Plus size={24} className="text-gray-400 group-hover:text-[#F36A2E] transition-colors flex-shrink-0 ml-4" />
              </button>
              {/* Answer section can be added here if needed, currently only questions are shown in the image */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQModal;