import blackPepperImg from "../../assets/black-pep.png";

const BlackPepper = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white-100 via-pink-50 to-rose-100 flex flex-col pt-20">
      {/* Page Content */}
      <main className="flex-1 flex justify-center items-center px-6 py-12">
        <div className="relative bg-gradient-to-br from-white via-red-50 to-white-50 rounded-3xl shadow-2xl border-4 border-[#C51124] max-w-6xl w-full grid md:grid-cols-2 gap-8 p-6 md:p-12 transition-transform hover:scale-[1.01] duration-300 ease-out">

          {/* Decorative Background Gradient */}
          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-rose-200/50 via-neutral-100/50 to-pink-200/50 blur-2xl opacity-50"></div>

          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src={blackPepperImg}
              alt="Black Pepper Powder"
              className="max-h-96 rounded-xl shadow-md hover:scale-105 transform transition duration-300 ease-out"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#C51124] mb-6 tracking-tight leading-tight">
              Black Pepper <span className="text-yellow-600">Powder</span>
            </h1>
            <div className="space-y-5 text-[15px] leading-relaxed text-gray-800">
              <p>
                🌶️ Black pepper is a versatile spice that can be used in a variety of dishes, both sweet and savory. It is a popular ingredient in marinades, rubs, and sauces. Black pepper can also be used to add flavor to soups, stews, and vegetables.
              </p>
              <p>
                🌶️Black pepper is a good source of antioxidants and has anti-inflammatory properties. It may also improve digestion and boost the metabolism.
              </p>
              <p>
                🌶️ Black pepper is a magical spice that can transform any dish. It&apos;s like the little black dress of the culinary world. Just a sprinkle of black pepper can make a bowl of soup sing, a roast chicken dance, and a salad sparkle.
              </p>
              <p>
                🌶️ Black pepper is a versatile spice that can add flavor and complexity to a variety of dishes, including roasted vegetables, grilled meats and vegetables, and salads.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlackPepper;
