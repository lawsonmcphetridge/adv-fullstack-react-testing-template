import { render, fireEvent } from '@testing-library/react';
import ShoppingLists from './ShoppingLists';

test('creates a new shopping list', () => {
  const onCreateShoppingList = jest.fn();
  const { getByTestId } = render(
    <ShoppingLists
      onCreateShoppingList={onCreateShoppingList}
      shoppingLists={[]}
    />
  );
  const input = getByTestId('shopping-list-form-name-new');
  const submitButton = getByTestId(
    'shopping-list-form-submit-button-new'
  );

  fireEvent.change(input, { target: { value: 'newShoppingList' } });
  fireEvent.submit(submitButton);

  expect(onCreateShoppingList).toHaveBeenCalledWith({
    id: null,
    name: 'newShoppingList',
    shoppingItems: [],
  });
});
