import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './CreateNewBook';
import '../style/Books.css';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);

  // [
  //   {
  //     id: 1,
  //     title: 'War and Peace',
  //     author: 'Leo Tolstoy',
  //   },
  //   {
  //     id: 2,
  //     title: 'Middlemarch',
  //     author: 'George Eliot',
  //   },
  //   {
  //     id: 3,
  //     title: 'The Adventures of Huckleberry Finn',
  //     author: 'Mark Twain',
  //   },
  // ];

  return (
    <section className='book-list-container'>
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
      <Form />
    </section>
  );
};

export default Books;
