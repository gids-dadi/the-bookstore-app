import { useSelector } from 'react-redux';
import Book from './Book';
import CreateNewBook from './CreateNewBook';
import '../style/Books.css';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);

  return (
    <section className="book-list-container">
      <CreateNewBook />
      <section className="book-list">
        {bookList.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            categories={book.category}
          />
        ))}
      </section>
    </section>
  );
};

export default Books;
