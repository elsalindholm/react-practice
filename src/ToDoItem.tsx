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
    const completeClass = this.props.toDoItem.completed ? "completed" : "";
    
    return (<div className={'to-do-item-container ' + completeClass}>
      <div className={'to-do-item-text-box'}>
        {this.props.toDoItem.content}
      </div>

      <input type="checkbox" id={"completed"} checked={this.props.toDoItem.completed} className={"check-box"} onChange={() => this.props.toDoItem.completed = !this.props.toDoItem.completed} ></input>

      <button className={"delete-item-button"} onClick={() => this.props.appState.deleteToDoItem(this.props.toDoItem.id)}>Delete</button>
      
      </div>
    )};
}