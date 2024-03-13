import { Todo } from "./todo.model";

export interface ITodoService{

    findAll(): Todo[];
    findOne(id: number): Todo;
    create(todo: Todo): void;
    update(id: number, todo: Todo): void;
    delete(id: number): void;
}