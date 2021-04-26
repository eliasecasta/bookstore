import Form from 'react-bootstrap/Form';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

const CategoryFilter = ({ handleFilterChange }) => {
  const { booksArray } = useSelector((state) => state.books);
  console.log(booksArray);
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  // let book = { ID: null, Title: null, category: 'Action' };

  return (
    <Form>

      <Form.Group controlId="exampleForm.CategorySelect1">
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          onChange={(event) => {
            handleFilterChange(event);
          }}
        >
          {categories.map((category) => (

            <option key="i">{category}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
export default CategoryFilter;
