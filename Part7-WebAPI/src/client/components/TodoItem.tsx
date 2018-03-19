import * as React from 'react'

import { ITodoItem } from 'interfaces/Todo'

export interface ITodoItemProps {
  item: ITodoItem

  onDeleteItem (): void
  onDoneChanged (newValue: boolean): void
}

export class TodoItem extends React.Component<ITodoItemProps> {
  public render () {
    const { item } = this.props

    return (
      <li>
        <input
          type="checkbox"
          checked={item.done}
          onChange={this._onDoneChanged}
        />

        {item.label}
        
        <button onClick={this.props.onDeleteItem}>X</button>
      </li>
    )
  }

  private _onDoneChanged = () => {
    const { item, onDoneChanged } = this.props

    onDoneChanged(!item.done)
  }
}
