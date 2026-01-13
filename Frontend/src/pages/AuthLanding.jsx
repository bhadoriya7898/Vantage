import { Link } from "react-router-dom";
export default function AuthLanding() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
      <div
        className="
          w-full max-w-[380px]
          min-h-[460px]
          bg-white rounded-2xl shadow-xl
          px-6 py-10
          text-center
          flex flex-col
          justify-between
        "
      >
        {/* TOP CONTENT */}
        <div className="flex flex-col space-y-6">
          {/* LOGO */}
          <img
            src="/logo.png"
            alt="Vantage"
            className="h-12 mx-auto"
          />

          {/* HEADING */}
          <h1 className="text-lg font-bold text-gray-900 leading-snug">
            Login & Create Account to your <br />
            Vantage Client Portal
          </h1>

          {/* CONSENT TEXT */}
          <p className="text-s text-gray-500 leading-relaxed px-2">
            I agree to Vantage using my data for product/service information,
            offers, events, and application support. You can unsubscribe anytime.
            For details, see our
          </p>
        </div>

        {/* BUTTONS */}
      <div className="mt-8 space-y-4">
  <Link
    to="/login"
    className="w-full py-3 rounded-full bg-[#0A4A53] text-white font-medium hover:opacity-90 transition block text-center"
  >
    Login
  </Link>

  <Link
    to="/signup"
    className="w-full py-3 rounded-full bg-[#E85C2A] text-white font-medium hover:opacity-90 transition block text-center"
  >
    Create Account
  </Link>
</div>
      </div>
    </div>
  );
}
