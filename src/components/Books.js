import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './CreateNewBook';
import '../style/Books.css';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);

  return (
    <section className='book-list-container'>
      <Form />
      <section className='book-list'>
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
