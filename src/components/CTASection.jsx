const CTASection = () => {
  return (
    <div className="w-full py-20 px-6 text-center" style={{ background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #8b5cf6 100%)" }}>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        Ready To Transform Your Workflow?
      </h2>

      <p className="text-sm md:text-md text-purple-200 mb-8 leading-relaxed">
        Join thousands of professionals who are already using Digitools to work smarter.
        <br />
        Start your free trial today.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <button type="button" className="px-7 py-3 rounded-full bg-white text-purple-700 font-semibold text-sm hover:bg-purple-50 transition-colors duration-200">
          Explore Products
        </button>

        <button type="button" className="px-7 py-3 rounded-full border border-white text-white font-semibold text-sm hover:bg-white hover:text-purple-700 transition-colors duration-200">
          View Pricing
        </button>
      </div>

      <p className="text-sm text-purple-200 tracking-wide">
        14-day free trial &nbsp;•&nbsp; No credit card required &nbsp;•&nbsp; Cancel anytime
      </p>
    </div>
  );
};

export default CTASection;