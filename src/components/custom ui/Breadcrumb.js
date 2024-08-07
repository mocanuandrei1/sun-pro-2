"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb = ({ className }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((item) => item !== "");

  const home = { url: "/" };

  const items = segments.map((item, index) => {
    const formattedItem = item.replace(/-/g, " ");
    const capitalizedItem = formattedItem
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return (
      <li key={index}>
        <span className="mx-2">/</span>
        <Link
          href={`/${segments.slice(0, index + 1).join("/")}`}
          aria-label={capitalizedItem}
        >
          {capitalizedItem}
        </Link>
      </li>
    );
  });

  const currentPage =
    segments.length > 0 ? segments[segments.length - 1] : "Acasa";
  const formattedCurrentPage = currentPage.replace(/-/g, " ");
  const capitalizedCurrentPage = formattedCurrentPage
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70">
      <div className="max-w-7xl w-full px-10 lg:px-0">
        <h1 className="text-4xl font-bold text-white">
          {capitalizedCurrentPage}
        </h1>
        <ul className="text-md text-[#f68a09] mt-2 flex">
          <li>
            <Link href={home.url}>Acasa</Link>
          </li>
          {items}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
