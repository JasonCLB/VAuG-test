import React from "react"
import Link from 'next/link';
import { Books } from "@/types/book";

const BooksTable = ({ data } : { data: Books }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Description</th>
            <th>ISBN</th>
            <th>Published Date</th>
            <th>Publisher</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.description}</td>
              <td>{book.isbn}</td>
              <td>{new Intl.DateTimeFormat('en-SG').format(new Date(book.published))}</td>
              <td>{book.publisher}</td>
              <td><Link href={`/book/${book.id}`}>View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>     
    </>
  )
}

export default BooksTable;