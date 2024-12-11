import React, { useState } from 'react';
import { Book } from '../types';

interface AddBookFormProps {
  onAdd: (book: Omit<Book, 'id'>) => void;
}

export function AddBookForm({ onAdd }: AddBookFormProps) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && author) {
      onAdd({
        title,
        author,
        status: 'available',
        addedDate: new Date().toISOString(),
      });
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-xl
   space-y-6">
      <div>
        <label htmlFor="title" className="block text-base font-medium text-gray-700">
          Book Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-2 block w-full rounded-md border border-gray-300 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter the book title"
          required
        />
      </div>
      <div>
        <label htmlFor="author" className="block text-base font-medium text-gray-700">
          Author
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mt-2 block w-full rounded-md border border-gray-300 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter the author's name"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out duration-200"
      >
        Add Book
      </button>
    </form>
  );
}
