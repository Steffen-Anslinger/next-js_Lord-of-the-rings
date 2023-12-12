import { volumes } from "../../resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Volume2() {
  const book = volumes.find(({ slug }) => slug === "the-two-towers");
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
        src="/images/the-two-towers.png"
        width={140}
        height={230}
        alt="Book cover: The two Towers"
      ></Image>
      <br></br>
      <Link href="/volumes">Back to all Volumes</Link>
      <br></br>
      <br></br>
      <Link href="/volumes/the-fellowship-of-the-ring">
        <button>Previous volume</button>
      </Link>
      <Link href="/volumes/the-return-of-the-king">
        <button>Next volume</button>
      </Link>
    </div>
  );
}
