import React from 'react';

const AddBook = () => (
  <div className="addBook">
    <h3>ADD NEW BOOK</h3>
    <form className="addBookForm">
      <input type="text" placeholder="Book title" />
      <select key="author">
        <option value="Authors">Authors</option>
      </select>
      <button type="button">Add Book</button>
    </form>

  </div>
);

export default AddBook;
