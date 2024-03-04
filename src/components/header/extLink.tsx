import Image from "next/image";
import Link from "next/link";
import { ExtLink } from "./constant";

const ExtLink = function (props: ExtLink) {
  return (
    <Link href={props.link} target="__blank">
      {props.image === null ? (
        <p>{props.title}</p>
      ) : (
        <Image src={props.image} alt={props.title} />
      )}
    </Link>
  );
};

export default ExtLink;
