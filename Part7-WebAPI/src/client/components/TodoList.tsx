import * as React from 'react'
import axios from 'axios'

import { ITodoItem } from 'interfaces/Todo'
import { TodoItem } from './TodoItem'

interface ITodoListState {
  todoItems: ITodoItem[]
  newLabel: string
  showOnlyActive: boolean
}

export class TodoList extends React.Component<{}, ITodoListState> {
  public state: ITodoListState = {
    todoItems: [],
    newLabel: '',
    showOnlyActive: false
  }

  public componentWillMount () {
    axios.get('/api/todoItems').then((response) => {
      if (response.data) {
        this.setState({
          todoItems: [
            ...response.data,
            ...this.state.todoItems
          ]
        })
      }
    })
  }

  public render () {
    const { todoItems, newLabel, showOnlyActive } = this.state

    const items = showOnlyActive
      ? todoItems.filter((item: ITodoItem) => !item.done)
      : todoItems

    return (
      <div>
        <button onClick={this._addNewItem}>Add:</button>
        <input type="text" value={newLabel} onChange={this._onNewLabelChange} />

        <label htmlFor="active-only">Show only active:</label>
        <input
          id="active-only"
          type="checkbox"
          checked={showOnlyActive}
          onChange={this._onShowOnlyActiveChanged}
        />

        <ul>
          {
            items.map((item: ITodoItem) => (
              <TodoItem
                key={item.id}
                item={item}
                onDeleteItem={this._handleDelete(item.id)}
                onDoneChanged={this._handleDoneChanged(item)}
              />
            ))
          }
        </ul>
      </div>
    )
  }

  private _onNewLabelChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      newLabel: event.currentTarget.value
    })
  }

  private _onShowOnlyActiveChanged = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      showOnlyActive: event.currentTarget.checked
    })
  }

  private _addNewItem = () => {
    if (this.state.newLabel) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          {
            id: this.state.todoItems.length + 1,
            label: this.state.newLabel,
            done: false
          }
        ],
        newLabel: ''
      })
    }
  }

  private _handleDoneChanged = (item: ITodoItem) => (done: boolean) => {
    const { todoItems } = this.state

    const index = todoItems.findIndex((i: ITodoItem) => i.id === item.id)

    if (index >= 0) {
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            done
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  private _handleDelete = (id: number) => () => {
    const { todoItems } = this.state

    const index = todoItems.findIndex((i: ITodoItem) => i.id === id)

    if (index >= 0) {
      todoItems.splice(index, 1)

      this.setState({
        todoItems: [
          ...todoItems
        ]
      })
    }
  }
}
