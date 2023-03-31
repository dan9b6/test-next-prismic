import Link from "next/link";

const CustomLink = ({ link, className, children }) => {
  const url =
    link.type !== "page" && link.type !== "home_page"
      ? `/${link.type}/${link.slug}`
      : `/${link.slug}`;

  return (
    <Link href={url} className={className}>
      {children}
    </Link>
  );
};

export default CustomLink;
