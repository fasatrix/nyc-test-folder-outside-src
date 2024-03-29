import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Provider, { useStore } from 'muriatic'
import '@testing-library/jest-dom/extend-expect'
import Item from './index'
import { Store } from '../../index'

const initialStore: Store = {
  todoList: [
    {
      id: '8btxpD9kDBlo',
      bodyText: 'cut tomato',
      completed: false
    }
  ]
}

const App = () => {
  const [store] = useStore<Store>()
  if (store.todoList.length === 0) return null
  return (
    <div>
      <Item todo={store.todoList[0]} />
    </div>
  )
}

test('should each todo object value is set to Item element', () => {
  const { getByTestId } = render(
    <Provider store={initialStore}>
      <Item todo={initialStore.todoList[0]} />
    </Provider>
  )

  expect(getByTestId('todo-item')).toBeInTheDocument()

  expect(
    (getByTestId('todo-item-complete-check') as HTMLInputElement).checked
  ).toBe(false)
  expect(getByTestId('todo-body-text')).toHaveTextContent('cut tomato')
  expect((getByTestId('todo-edit-input') as HTMLInputElement).value).toBe(
    'cut tomato'
  )
})

test('should correct render default class state', () => {
  const { getByTestId } = render(
    <Provider store={initialStore}>
      <App />
    </Provider>
  )

  // when not.completed & not.onEdit, SwitchStyle doesn't show .completed .editting selectors
  expect(getByTestId('todo-item')).not.toHaveClass('completed')
  expect(getByTestId('todo-item')).not.toHaveClass('editing')
})

test('should work "check" complete toggle button', () => {
  const { getByTestId } = render(
    <Provider store={initialStore}>
      <App />
    </Provider>
  )

  // click complete checkbox then should appear completed class
  fireEvent.click(getByTestId('todo-item-complete-check'))
  expect(
    (getByTestId('todo-item-complete-check') as HTMLInputElement).checked
  ).toBe(true)
  expect(getByTestId('todo-item')).toHaveClass('completed')

  // should working as toggle
  fireEvent.click(getByTestId('todo-item-complete-check'))
  expect(
    (getByTestId('todo-item-complete-check') as HTMLInputElement).checked
  ).toBe(false)
  expect(getByTestId('todo-item')).not.toHaveClass('completed')
})

test('should work edit mode and toggle show/hide', () => {
  const { getByTestId } = render(
    <Provider store={initialStore}>
      <App />
    </Provider>
  )

  // by default, edit input form is not visible
  expect(getByTestId('todo-edit-input')).not.toBeVisible()
  // double click todo text label, then enable todo text edit code
  fireEvent.doubleClick(getByTestId('todo-body-text'))
  expect(getByTestId('todo-item')).toHaveClass('editing')
  expect(getByTestId('todo-edit-input')).toBeVisible()
  fireEvent.change(getByTestId('todo-edit-input'), {
    target: { value: 'cut tomato plus' }
  })
  fireEvent.keyPress(getByTestId('todo-edit-input'), {
    key: 'Enter',
    code: 13,
    charCode: 13 // I had issue that doesn't trigger keyPress event relevant charCode. https://github.com/testing-library/react-testing-library/issues/269
  })

  expect(getByTestId('todo-body-text')).toHaveTextContent('cut tomato plus')
  expect(getByTestId('todo-item')).not.toHaveClass('editing')
  expect(getByTestId('todo-edit-input')).not.toBeVisible()
})

test('delete todo item', () => {
  const { getByTestId, queryByTestId } = render(
    <Provider store={initialStore}>
      <App />
    </Provider>
  )

  // click delete button, then todo item is removed
  expect(getByTestId('todo-item')).toBeInTheDocument()
  fireEvent.click(getByTestId('delete-todo-btn'))
  expect(queryByTestId('todo-item')).toBe(null)
})
