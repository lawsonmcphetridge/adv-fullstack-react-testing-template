import { useState } from 'react';

const defaultShoppingItem = {
  id: null,
  name: '',
};

export default function ShoppingListItemForm({ id, onSubmit }) {
  const [currentShoppingItem, setCurrentShoppingItem] = useState(
    defaultShoppingItem
  );
  return (
    <form
      data-testid={`shopping-list-item-form-${id}`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(currentShoppingItem);
        setCurrentShoppingItem(defaultShoppingItem);
      }}
    >
      <input
        data-testid={`shopping-list-item-form-name-${id}`}
        value={currentShoppingItem.name}
        onChange={(e) =>
          setCurrentShoppingItem({
            ...currentShoppingItem,
            name: e.target.value,
          })
        }
      />
      <button
        type="submit"
        data-testid={`shopping-list-item-form-submit-button-${id}`}
      >
        submit
      </button>
    </form>
  );
}
