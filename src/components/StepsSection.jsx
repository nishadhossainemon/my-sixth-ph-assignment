const steps = [
  {
    number: "01",
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
    image: "https://i.ibb.co.com/fYGrvZzT/user.png",
  },
  {
    number: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    image: "https://i.ibb.co.com/htGwY2t/package.png",
  },
  {
    number: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    image: "https://i.ibb.co.com/G3B1RgR0/rocket.png",
  },
];

const StepsSection = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-16 px-4 md:px-6">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-sm md:text-md text-gray-400">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative bg-white rounded-2xl shadow-sm flex-1 flex flex-col items-center text-center px-6 md:px-8 py-8 md:py-10"
          >
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">{step.number}</span>
            </div>
            <div className="w-20 h-20 md:w-22 md:h-22 rounded-full bg-violet-100 flex items-center justify-center mb-6">
              <img className="w-9 h-9 md:w-10 md:h-10" src={step.image} alt={step.title} />
            </div>
            <h3 className="text-xl md:text-[22px] font-bold text-gray-900 mb-3">{step.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
