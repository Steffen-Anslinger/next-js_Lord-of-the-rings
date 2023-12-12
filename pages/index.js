import Link from "next/link";
import { introduction } from "../resources/lib/data.js";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <Link href="./volumes">Volumes</Link>
    </div>
  );
}
