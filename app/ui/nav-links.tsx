"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "About Me",
    href: "/#about-me",
    // icon: HomeIcon
  },
  {
    name: "Projects",
    href: "/projects",
    // icon: DocumentDuplicateIcon,
  },
  {
    name: "Blog",
    href: "/blog",
    //  icon: UserGroupIcon
  },
  {
    name: "Pet",
    href: "pet",
    //  icon: UserGroupIcon
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {" "}
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm font-medium hover:bg-thistle hover:text-dim-grey md:flex-none md:justify-start md:p-2 md:px-3",
              { "bg-thistle text-dim-grey": pathname === link.href },
            )}
          >
            {/* <LinkIcon className="w-6" /> */}
            {/* <p className="hidden md:block">{link.name}</p> */}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
