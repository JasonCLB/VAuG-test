import type { Books } from '@/types/book';
import type { APIResponse } from '@/types/response';
import { useMemo, useState } from 'react';

async function getData(): Promise<APIResponse<Books>> {
  const res = await fetch('https://fakerapi.it/api/v1/books', {
    // cache: 'no-store' // <-- Not dynamic rendering.
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const apiResponse  = await res.json() as Promise<APIResponse<Books>>;

  return apiResponse;
}

const getBooks = async () => {
  const { data: books } = await getData();

  return books;
};

const getBook = async (id: number) => {
  const { data: books } = await getData();

  const book = books.find((book) => book.id === id );

  if (book === undefined) {
    return null;
  }
  else {
    return book;
  }

}

export { getBooks, getBook };
