import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const MobileFooterButtons = () => {
  return (
    <div className="sticky md:hidden bottom-0 flex z-50">
      <a
        href="https://wa.me/+40771097050"
        target="_blank"
        className="w-1/2 h-14 bg-green-600 flex items-center justify-center text-white py-2"
      >
        <FaWhatsapp className="text-3xl" />
        <span className="ml-2">Whatsapp</span>
      </a>
      <a
        href="tel:+40771097050"
        target="_blank"
        className="w-1/2 h-14 bg-custom-blue flex items-center justify-center text-white py-2"
      >
        <FaPhone className="text-2xl" />
        <span className="ml-2">Telefon</span>
      </a>
    </div>
  );
};

export default MobileFooterButtons;
