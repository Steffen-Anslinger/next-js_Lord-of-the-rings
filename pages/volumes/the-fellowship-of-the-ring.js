import { volumes } from "../../resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Volume1() {
  const book = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <div>
      <h2>{book.title} </h2>
      <p>{book.description}</p>
      <ul>
        {book.books.map((bookTitle) => (
          <li key={bookTitle.ordinal}>
            {bookTitle.ordinal}: {bookTitle.title}
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        width={140}
        height={230}
        alt="Book cover: The Fellowship of the Ring"
      ></Image>
      <br></br>
      <Link href="/volumes">Back to all Volumes</Link>
      <br></br>
      <br></br>
      <Link href="/volumes/the-two-towers">
        <button>Next volume</button>
      </Link>
    </div>
  );
}
