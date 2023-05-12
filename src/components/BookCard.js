import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, getBooks } from '../redux/books/bookSlice';

const BookCard = () => {
  const { books, isLoading, isError } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: try again</div>;
  }

  const renderBooks = books.map((book) => (
    <div key={book.item_id} className="bookContainer">
      <div className="bookTitle">
        <p className="cat">{book.category}</p>
        <p className="tit">{book.title}</p>
        <p className="auth">{book.author}</p>
        <ul className="buttonsList">
          <li><button type="button" className="com">Comments</button></li>
          <li><button type="button" onClick={() => dispatch(deleteBook(book.item_id))} className="rem">Remove</button></li>
          <li><button type="button" className="edit">Edit</button></li>
        </ul>
      </div>
      <div className="bookChart">
        <div className="Oval-2" />
        <div>
          <p className="per">100%</p>
          <p className="comp">Completed</p>
        </div>
      </div>
      <div className="bookChapter">
        <p className="cur">CURRENT CHAPTER</p>
        <p className="chap">Chapter 12</p>
        <button type="button" className="up">UPDATE PROGRESS</button>
      </div>
    </div>
  ));

  return (
    <div className="mainContainer">
      {renderBooks}
    </div>
  );
};

export default BookCard;
