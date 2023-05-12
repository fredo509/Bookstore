import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const template = {
  item_id: '',
  title: '',
  author: '',
  category: '',
};

const AddBook = () => {
  const [values, setValue] = useState({ template });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setValue((values) => ({
      ...values,
      item_id: crypto.randomUUID(),
      [name]: value,
      category: 'Action',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(values));
    setValue({});
  };

  return (
    <section className="addBook">
      <h2 className="addNB">ADD NEW BOOK</h2>
      <form className="addBookForm">
        <input
          value={values.title || ''}
          type="text"
          name="title"
          placeholder="Book title"
          onChange={handleChange}
          className="select"
        />

        <input
          value={values.author || ''}
          type="text"
          name="author"
          placeholder="author"
          onChange={handleChange}
          className="select"
        />

        <select className="select">
          <option>Categorie</option>
        </select>

        <button type="submit" onClick={handleSubmit} className="btnAdd">ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddBook;
