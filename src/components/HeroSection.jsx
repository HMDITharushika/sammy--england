import heroimage from "../assets/bg-img.png";

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen pt-24  px-4 lg:px-20 overflow-hidden"
      id="home"
    >
      {/* Content */}
      <div className="relative z-20 flex flex-col items-start text-black max-w-xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Discover the <span className="text-[#C51124]">Finest Spices</span>{" "}
          <br /> at <span className="text-[#D1A249]">Sammy England</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-800">
          Indulge in the rich flavors of our meticulously sourced black pepper, white pepper, and cinnamon powder — elevating every dish.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#"
            className="bg-[#D1A249] hover:bg-[#C51124] text-white font-medium py-3 px-6 rounded-md shadow-sm transition-colors"
          >
            Shop Now
          </a>
          <a
            href="#"
            className="border border-[#D1A249] hover:bg-[#5E8F8D] hover:text-white text-black font-medium py-3 px-6 rounded-md transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Ellipse with image */}
      <div className="relative mt-12 lg:mt-0 lg:flex-1 flex justify-center items-center">
        <div className="relative w-full h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroimage})` }}
          ></div>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;
