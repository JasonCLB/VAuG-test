import Image from "next/image";
import Link from "next/link";
import { getBook } from '@/app/hooks/books';

export default async function BookDetail({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const book = await getBook(id || 0);

  return (
    <div className="container">
      <div>
        <Link href='/book'>Back</Link>
      </div>
      {book ? (
        <div>
          <h1>{book.title}</h1>
          <Image
            width={200}
            height={300}
            src={book.image}
            // alt={book.title}
          />
          <div>Author: {book.author}</div>
          <p>Description</p>
          <p>{book.description}</p>
          <table>
            <tbody>
              <tr>
                <td>Genre:</td>
                <td>{book.genre}</td>
              </tr>
              <tr>
                <td>ISBN:</td>
                <td>{book.isbn}</td>
              </tr>

              <tr>
                <td>Published Date:</td>
                <td>{new Intl.DateTimeFormat('en-SG').format(new Date(book.published))}</td>
              </tr>

              <tr>
                <td>Publisher:</td>
                <td>{book.publisher}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Book not found</h1>
      )}
    </div>
  );
}
