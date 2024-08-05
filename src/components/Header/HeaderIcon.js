import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";

const HeaderIcon = ({ text, phone, email, location, icon, customCss }) => {
  const data = phone || email || location;

  const icons = {
    phone: TbPhoneCall,
    email: MdOutlineMailOutline,
    location: IoLocationOutline,
  };

  const IconComponent = icons[icon] || TbPhoneCall;

  let href;
  if (phone) {
    href = `tel:${phone}`;
  } else if (email) {
    href = `mailto:${email}`;
  } else if (location) {
    href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location
    )}`;
  }

  return (
    <a className={"flex items-center space-x-2 group " + customCss} href={href}>
      <IconComponent className="bg-white group-hover:bg-amber-500 rounded-full text-black group-hover:text-white transition-all duration-100 text-4xl p-1 ml-2 border-2 border-black group-hover:border-none" />
      <div>
        <p className="text-sm text-black">{text}</p>
        <p className="font-bold text-black">{data}</p>
      </div>
    </a>
  );
};

export default HeaderIcon;
