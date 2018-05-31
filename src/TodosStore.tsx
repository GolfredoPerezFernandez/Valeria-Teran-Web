/**
* TodosStore.tsx
* Copyright: Microsoft 2017
*
* Resub Basic Example https://github.com/Microsoft/ReSub
*/

import { StoreBase, AutoSubscribeStore, autoSubscribe } from 'resub';

import LocalDb = require('./LocalDb');
import TodoModels = require('./TodoModels');

@AutoSubscribeStore
class TodosStore extends StoreBase {
    private _todos: TodoModels.Todo[] = [];

    init() {
        return LocalDb.getAllTodos().then(todos => {
            this._todos = todos;
        });
    }

    addTodo(todoText: string,todoTitle: string,todoImgUrl: string,todoPrice:string,todoType:string) {
        const now = Date.now().valueOf();
        let newTodo: TodoModels.Todo = {
            id: now.toString(),
            creationTime: now,
            text: todoText,
            title:todoTitle,
            imgUrl:todoImgUrl,
            price:todoPrice,
            type:todoType,
        };

        this._todos = this._todos.concat(newTodo);

        // Asynchronously write the new todo item to the DB.
        LocalDb.putTodo(newTodo);

        this.trigger();
    }

    @autoSubscribe
    getTodos() {
        return this._todos;
    }
    @autoSubscribe
    getDrawings() {
       return this._todos.filter(draw=>draw.type==='draw');
    }
    @autoSubscribe
    getPaintings() {
       return this._todos.filter(draw=>draw.type==='paint');
    }
    @autoSubscribe
    getTextiles() {
       return this._todos.filter(draw=>draw.type==='textil');
    }
    deleteTodo(deleteTodo:string) {
        var todos=this._todos.filter(draw=>draw.title===deleteTodo)
        todos.forEach( (element) => {
           
            LocalDb.deleteTodo(element);
        });
        this._todos=this._todos.filter(draw=>draw.title!==deleteTodo)

        this.trigger();
    }
}

export = new TodosStore();
