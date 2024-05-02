'use client'

import React from 'react';
import type { Books, Book } from '@/types/book';

type BooksContextType = {
  books: Books;
  setBooks: (books: Books) => void;
}

const BooksContext = React.createContext<BooksContextType | null>(null);

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = React.useState<Books>([]);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  )
}

export { BooksProvider, BooksContext };