import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList';

describe('ShoppingList', () => {
  it.only('Displays Shoppinglist name', () => {
    const shoppingList = {
      id: 1,
      name: 'My Cool List',
      shoppingItems: [],
    };

    render(<ShoppingList shoppingList={shoppingList} />);
    expect(
      screen.queryByTestId('shopping-list-name-1').textContent
    ).toEqual('My Cool List');
  });
    
    
    
});
