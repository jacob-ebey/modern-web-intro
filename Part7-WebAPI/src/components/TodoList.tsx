import * as React from 'react'

import { ITodoItem } from '../interfaces/Todo'
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

  public render () {
    const todoItems = this.state.showOnlyActive
      ? this.state.todoItems.filter((item: ITodoItem) => !item.done)
      : this.state.todoItems

    return (
      <div>
        <button onClick={this._addNewItem}>Add:</button>
        <input type="text" value={this.state.newLabel} onChange={this._onNewLabelChange} />

        <label htmlFor="active-only">Show only active:</label>
        <input
          id="active-only"
          type="checkbox"
          checked={this.state.showOnlyActive}
          onChange={this._onShowOnlyActiveChanged}
        />

        <ul>
          {
            todoItems.map((item: ITodoItem, index: number) => (
              <TodoItem
                item={item}
                onDeleteItem={this._handleDelete(index)}
                onDoneChanged={this._handleDoneChanged(item, index)}
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
            label: this.state.newLabel,
            done: false
          }
        ],
        newLabel: ''
      })
    }
  }

  private _handleDoneChanged = (item: ITodoItem, index: number) => (done: boolean) => {
    const { todoItems } = this.state

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

  private _handleDelete = (index: number) => () => {
    const { todoItems } = this.state
    todoItems.splice(index, 1)

    this.setState({
      todoItems: [
        ...todoItems
      ]
    })
  }
}
