import Link from "next/link";

const NavLink = function (props: { path: string; text: string }) {
  return <Link href={props.path}>{props.text}</Link>;
};

export default NavLink;
