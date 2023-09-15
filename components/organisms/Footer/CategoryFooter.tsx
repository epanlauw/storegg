import React from "react";
import CategoryFooterItem from "../../molecules/CategoryFooterItem";
import cx from "classnames";

interface CategoryFooterItems {
  title: string;
  link: string;
}

interface CategoryFooterProps {
  title: string;
  items: CategoryFooterItems[];
  isLast?: boolean;
}

const CategoryFooter = (props: CategoryFooterProps) => {
  const { title, items, isLast } = props;

  const classTitle = cx({
    "col-md-4": true,
    "col-6 mb-lg-0 mb-25": !isLast,
    "col-12 mt-lg-0 mt-md-0 mt-25": isLast
  });
  return (
    <div className={classTitle}>
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <CategoryFooterItem key={index} title={item.title} link={item.link} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryFooter;
