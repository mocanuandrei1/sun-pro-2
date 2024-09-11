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
    href = `https://www.google.com/maps/place/Sun+Pro/@44.5925009,25.9296391,17z/data=!4m6!3m5!1s0x40b2103815ad743b:0x2e8657d965e8abff!8m2!3d44.5925009!4d25.9296391!16s%2Fg%2F11c52yjtc5?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D`;
  }

  return (
    <a
      className={"flex items-center space-x-2 group " + customCss}
      href={href}
      {...(icon === "location" && { target: "_blank" })}
    >
      <IconComponent className="bg-white group-hover:bg-amber-500 rounded-full text-black group-hover:text-white transition-all duration-100 text-4xl p-1 ml-2 border-2 border-black group-hover:border-none" />
      <div>
        <p className="text-sm text-black">{text}</p>
        <p className="font-bold text-black">{data}</p>
      </div>
    </a>
  );
};

export default HeaderIcon;
