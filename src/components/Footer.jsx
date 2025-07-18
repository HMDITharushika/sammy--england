import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="p-10 py-10 border border-black via-30% to-emerald-900 to-90%"
      id="contactus"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        {/* Social icons */}
        <div>
          <ul className="space-y-2">
            <div className="flex items-center gap-4 text-2xl">
              <a
                href="https://www.facebook.com/sammyengland/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/sammyengland/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/sammyengland/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </ul>
        </div>

        {/* Right-aligned text */}
        <div className="col-span-2 lg:col-span-3 flex justify-end text-xl text-gray-700">
          Terms and Conditions | Accessibility | Privacy Policy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
