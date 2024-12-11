import { useState } from 'react';
import { Book, User } from './types';
import { BookCard } from './components/BookCard';
import { AddBookForm } from './components/AddBookForm';
import { RegisterForm } from './components/RegisterForm';
import { Library } from 'lucide-react';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [showRegister, setShowRegister] = useState(true);

  const handleAddBook = (newBook: Omit<Book, 'id'>) => {
    const book: Book = {
      ...newBook,
      id: Math.random().toString(36).substr(2, 9),
    };
    setBooks([...books, book]);
  };

  const handleDeleteBook = (id: string) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleStatusChange = (id: string, status: 'available' | 'borrowed') => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, status } : book
      )
    );
  };

  const handleRegister = (userData: Omit<User, 'id'>) => {
    const user: User = {
      ...userData,
      id: Math.random().toString(36).substr(2, 9),
    };
    setUsers([...users, user]);
    setShowRegister(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Library className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Library Management System</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {showRegister ? (
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Register</h2>
            <RegisterForm onRegister={handleRegister} />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Book</h2>
              <AddBookForm onAdd={handleAddBook} />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Book Collection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onDelete={handleDeleteBook}
                    onStatusChange={handleStatusChange}
                  />
                ))}
              </div>
              {books.length === 0 && (
                <p className="text-center text-gray-500">No books in the library yet.</p>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;