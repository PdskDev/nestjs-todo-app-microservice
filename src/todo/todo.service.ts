import { Injectable } from "@nestjs/common";
import { Todo } from "./todo.model";
import { ITodoService } from "./todoservice.interface";

@Injectable()
export class TodoService implements ITodoService{
    
    private storage: Todo[] = [];

    findAll(): Todo[] {
        return this.storage;
    }

    findOne(id: number): Todo {
        return this.storage.find((t: Todo) => t.id === id);
    }

    create(todo: Todo): void {
        const currentTodoTotal = Math.max(...this.storage.map((t: Todo) => t.id), 0);
        todo.id = currentTodoTotal + 1;
        this.storage.push(todo);
    }

    update(id: number, todo: Todo): void {
        const index = this.storage.findIndex((t: Todo) => t.id === id);
        this.storage[index] = todo;
    }

    delete(id: number): void {
        const index = this.storage.findIndex((t: Todo) => t.id === id);
        this.storage.splice(index, 1);
    }
}