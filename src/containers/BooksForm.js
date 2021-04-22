import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_BOOK } from '../reducers/books';

const BooksForm = () => {
  const { booksArray } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  let book = { ID: null, Title: null, category: null };

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="input"
          placeholder="Please enter title of the book"
          onChange={(event) => {
            book.Title = event.target.value;
          }}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          onChange={(event) => {
            book.category = event.target.value;
          }}
        >
          {categories.map((category) => (
            <option key="i">{category}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          book.ID = 55;
          dispatch(CREATE_BOOK(book));
          book = { ID: null, Title: null, category: null };
          console.log(booksArray);
        }}
      >
        Add book
      </Button>
    </Form>
  );
};
export default BooksForm;
