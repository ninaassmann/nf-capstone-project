import Link from "next/link";
import LongArrow from "./icons/LongArrow";

export default function BackLink({ link, linkText }) {
  return (
    <Link href={link}>
      {linkText !== "Cancel" && <LongArrow />}
      {linkText}
    </Link>
  );
}
