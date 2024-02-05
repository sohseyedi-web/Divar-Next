import Link from "next/link";
import { usePathname } from "next/navigation";

export const CustomNavlink = ({ children, to }) => {
  const pathname = usePathname();

  const navlinkClass =
    "flex items-center gap-x-2 px-2 py-1.5 rounded-md  transition-all duration-300 hover:bg-red-600 hover:text-white";

  return (
    <li>
      <Link
        href={to}
        className={
          pathname === to
            ? `${navlinkClass} bg-red-800 text-white font-semibold`
            : `${navlinkClass} text-gray-800 dark:text-gray-200`
        }
      >
        {children}
      </Link>
    </li>
  );
};
