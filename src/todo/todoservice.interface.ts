import { Todo } from "./todo.model";

export interface ITodoService{

    findAll(): Todo[];
    create(todo: Todo): void;
}