import blackPepperImg from "../../assets/cinnamon3d.png";

const BlackPepper = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white-100 via-yellow-50 to-yellow-100 flex flex-col pt-20">
      {/* Page Content */}
      <main className="flex-1 flex justify-center items-center px-6 py-12">
        <div className="relative bg-gradient-to-br from-white via-yellow-50 to-white-50 rounded-3xl shadow-2xl border-4 border-[#D6AD5F] max-w-6xl w-full grid md:grid-cols-2 gap-8 p-6 md:p-12 transition-transform hover:scale-[1.01] duration-300 ease-out">

          {/* Decorative Background Gradient */}
          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-yellow-200/50 via-neutral-100/50 to-yellow-200/50 blur-2xl opacity-50"></div>

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
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#D6AD5F] mb-6 tracking-tight leading-tight">
              Ceylon Cinnamon <span className="text-yellow-600">Powder</span>
            </h1>
            <div className="space-y-5 text-[15px] leading-relaxed text-gray-800">
              <p>
                🟤  White pepper is a versatile spice used in Chinese, Vietnamese, French, and German cuisine. It is commonly added to soups, stews, sauces, marinades, ground meats, fish, and poultry dishes.
              </p>
              <p>
                🟤  White pepper is a popular ingredient in many spice blends, such as garam masala, five-spice powder, and Cajun seasoning. It adds a mild flavor and aroma to spice blends, and it can also help to balance out the flavors of other spices.
              </p>
              <p>
                🟤  White pepper is a good source of antioxidants and has anti-inflammatory properties. It may also improve digestion and boost the metabolism.
              </p>
              <p>
                🟤  White pepper is a versatile spice that can be used to enhance the flavor of a variety of dishes, including seafood, ground chicken or turkey meatballs, and roasted vegetables.
              </p>
              <p>
                🟤  White pepper can also be used to add a touch of sophistication to classic comfort foods such as mashed potatoes and deviled eggs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlackPepper;
