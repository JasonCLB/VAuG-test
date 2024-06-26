type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: string;
  image: string;
  published: Date;
  publisher: string;
}

type Books = Book[] | [];

export type { Book, Books }