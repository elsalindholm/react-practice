import React from 'react';
import { ToDoItem } from './AppState';
import './to-do-item.scss';



export interface ToDoItemProps {
  toDoItem: ToDoItem;
}


export class ToDoItemComp extends React.PureComponent<ToDoItemProps> {

  public render() {
    return (<div className={'to-do-item-container'}>
      <p className={"to-do-item-text"}>{this.props.toDoItem.content}</p>
      <button className={"delete-item-button"}>Delete</button>
      </div>
    )};
}