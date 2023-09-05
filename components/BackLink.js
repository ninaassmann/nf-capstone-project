import Link from "next/link";
import LongArrow from "./icons/LongArrow";

export default function BackLink({ link }) {
  return (
    <Link href={link}>
      <LongArrow />
      back to overview
    </Link>
  );
}
