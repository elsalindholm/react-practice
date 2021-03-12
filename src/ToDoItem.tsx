import { observer } from 'mobx-react';
import React from 'react';
import { AppState, ToDoItem } from './AppState';
import './to-do-item.scss';



export interface ToDoItemProps {
  toDoItem: ToDoItem;
  appState: AppState;
}


@observer export class ToDoItemComp extends React.PureComponent<ToDoItemProps> {

  public render() {
    return (<div className={'to-do-item-container'}>
      <p className={"to-do-item-text"}>{this.props.toDoItem.content}</p>
      <button className={"delete-item-button"} onClick={() => this.props.appState.deleteToDoItem(this.props.toDoItem.id)}>Delete</button>
      </div>
    )};
}