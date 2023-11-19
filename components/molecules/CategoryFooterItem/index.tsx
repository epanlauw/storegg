import Link from "next/link";
import React from "react";

export interface CategoryFooterItemProps {
  title: string;
  link: string;
}

const CategoryFooterItem = (props: CategoryFooterItemProps) => {
  const { title, link } = props;

  return (
    <li className="mb-6">
      <Link href={link}>
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </Link>
    </li>
  );
};

export default CategoryFooterItem;
