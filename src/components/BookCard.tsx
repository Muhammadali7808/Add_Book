import { Trash2 } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: 'available' | 'borrowed') => void;
}

export function BookCard({ book, onDelete, onStatusChange }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
          <p className="text-gray-600">{book.author}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onStatusChange(book.id, book.status === 'available' ? 'borrowed' : 'available')}
            className={`px-3 py-1 rounded-full text-sm ${
              book.status === 'available'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {book.status}
          </button>
          <button
            onClick={() => onDelete(book.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500">Added: {new Date(book.addedDate).toLocaleDateString()}</p>
    </div>
  );
}