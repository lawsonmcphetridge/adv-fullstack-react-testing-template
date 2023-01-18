import { render, fireEvent } from '@testing-library/react';
import ShoppingListForm from './ShoppingListForm';

describe('ShoppingListForm', () => {
  it('can create a new item', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <ShoppingListForm id={1} onSubmit={onSubmit} />
    );
    const input = getByTestId('shopping-list-form-name-1');
    const submitButton = getByTestId(
      'shopping-list-form-submit-button-1'
    );

    fireEvent.change(input, { target: { value: 'item1' } });
    fireEvent.submit(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({
      id: null,
      name: 'item1',
      shoppingItems: [],
    });
  });

  it('submits the form', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <ShoppingListForm id="new" onSubmit={onSubmit} />
    );
    const input = getByTestId('shopping-list-form-name-new');
    const submitButton = getByTestId(
      'shopping-list-form-submit-button-new'
    );

    fireEvent.change(input, {
      target: { value: 'newShoppingList' },
    });
    fireEvent.submit(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({
      id: null,
      name: 'newShoppingList',
      shoppingItems: [],
    });
  });
    
    
    
    
});
