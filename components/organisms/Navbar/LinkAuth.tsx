import React from "react";
import Link from "next/link";

interface LinkAuthProps {
  title: string;
  href: string;
}
const LinkAuth = (props: LinkAuthProps) => {
  const { title, href } = props;
  return (
    <li>
      <Link href={href}>
        <a className="dropdown-item text-lg color-palette-2">{title}</a>
      </Link>
    </li>
  );
};

export default LinkAuth;
