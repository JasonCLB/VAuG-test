import React from "react";
import BooksTable from "@/components/BooksTable";
import { getBooks } from "../hooks/books";

export default async function Book() {
  const books = await getBooks();

  return (
    <div className="container">
      <h1>Books</h1>
      <BooksTable data={books}/>
    </div>
  );
}
