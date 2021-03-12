import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import { InputComponent } from './InputComponent';
import { ToDoItemComp } from './ToDoItem';

@observer
export class App extends React.PureComponent {
  
  private readonly appState = new AppState();
  
  public render() {
    return (
      <div className={"container"}>
        <div className={"top-bar"}>
          <InputComponent appState={this.appState} />
        </div>
        <div className={"list-box"}>
          {this.renderToDoItems()}
        </div>
      </div>
    );
  }

  private renderToDoItems() {
    const items: JSX.Element[] = [];

    this.appState.toDoItems.forEach((item) => {
      items.push(
        <ToDoItemComp toDoItem={item} appState={this.appState} />
      );
    });

    return items;
  }

}
