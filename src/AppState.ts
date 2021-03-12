import { action, observable } from 'mobx';


export interface ToDoItem {
  id: string;
  content: string;
}

export class AppState {
  @observable public inputText = "";

  @observable public toDoItems: ToDoItem[] = [];

  @action public setInputText(text: string) {
    this.inputText = text;
  }

  @action public addToDoItem() {
    const newItem: ToDoItem = {
      id: this.toDoItems.length.toString(),
      content: this.inputText,
    };
    this.toDoItems.push(newItem);
    this.inputText = "";
  }

  @action public deleteToDoItem(id: string) {
    this.toDoItems = this.toDoItems.filter((toDoItem) => toDoItem.id !== id);
  }
}
