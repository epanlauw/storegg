import React from "react";

import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

interface MenuItemProps {
  title: string;
  icon: string;
  href: string;
  active?: boolean;
}

const MenuItem = (props: Partial<MenuItemProps>) => {
  const { title, icon, active, href } = props;
  const classTitle = cx({
    item: true,
    active,
    "mb-30": true
  });

  return (
    <div className={classTitle}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={`${href}`}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
};

export default MenuItem;
