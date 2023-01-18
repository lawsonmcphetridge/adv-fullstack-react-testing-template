import { render, fireEvent } from '@testing-library/react';
import ShoppingLists from './ShoppingLists';

describe('creates a new shopping list', () => {
  it('makes sure you can create a new shopping list', () => {
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

  it('displays all shopping lists', () => {
    const shoppingLists = [
      { id: 1, name: 'list1', shoppingItems: [] },
      { id: 2, name: 'list2', shoppingItems: [] },
    ];
    const { getAllByTestId } = render(
      <ShoppingLists
        onCreateShoppingList={jest.fn()}
        shoppingLists={shoppingLists}
      />
    );
    const shoppingListNames = getAllByTestId(/shopping-list-name-/);
    expect(shoppingListNames).toHaveLength(2);
    expect(shoppingListNames[0]).toHaveTextContent('list1');
    expect(shoppingListNames[1]).toHaveTextContent('list2');
  });
});
