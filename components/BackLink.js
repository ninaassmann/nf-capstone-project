import Link from "next/link";
import LongArrow from "./icons/LongArrow";

export default function BackLink() {
  return (
    <Link href="/">
      <LongArrow />
      back to overview
    </Link>
  );
}
