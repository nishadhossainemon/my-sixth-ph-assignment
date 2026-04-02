const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false
    },
    {
      name: "Pro",
      tagline: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true
    },
    {
      name: "Enterprise",
      tagline: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section className="py-24 bg-white text-center px-6">
      <div className="mb-16">
        <h2 className="text-5xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 text-md">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-272.5 mx-auto">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`relative p-8 rounded-3xl border transition-all duration-300 text-left ${
              plan.isPopular 
              ? "bg-purple-600 text-white border-purple-600 shadow-2xl scale-105 z-10" 
              : "bg-gray-50 text-slate-900 border-gray-100 hover:shadow-xl"
            }`}
          >
            {plan.isPopular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className={`text-sm mb-8 ${plan.isPopular ? "text-purple-100" : "text-gray-500"}`}>
              {plan.tagline}
            </p>

            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-extrabold">${plan.price}</span>
              <span className={`text-sm ml-2 ${plan.isPopular ? "text-purple-200" : "text-gray-400"}`}>/Month</span>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm">
                  <span className={plan.isPopular ? "text-white" : "text-emerald-500"}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button type="button" className={`w-full py-4 rounded-xl font-bold transition-colors ${
              plan.isPopular 
              ? "bg-white text-purple-600 hover:bg-gray-100" 
              : "bg-purple-600 text-white hover:bg-purple-700"
            }`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;