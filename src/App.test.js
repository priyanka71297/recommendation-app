import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import BookData from './components/BookData';
import store from './redux/store';

test('Search component renders properly.', () => {
  render(
    <Provider store={store}>
      <BookData />
    </Provider>
  );
  const dataToTest = screen.getByText('Add New Book');
  expect(dataToTest).toBeInTheDocument();
});

// test('BookData component renders properly.', () => {
//   render(
//     <Provider store={store}>
//       <BookData />
//     </Provider>
//   );
//   const dataToTest = screen.getByText('Add New Book');
//   expect(dataToTest).toBeVisible();
// });


// test('Search component renders properly.', () => {
//   render(
//     <Provider store={store}>
//       <Search />
//     </Provider>
//   );
//   const dataToTest = screen.getByText('Search Author Here!');
//   expect(dataToTest).toBeInTheDocument();
// });