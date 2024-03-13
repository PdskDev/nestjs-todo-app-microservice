import { Injectable } from "@nestjs/common";
import { Todo } from "./todo.model";
import { ITodoService } from "./todoservice.interface";

@Injectable()
export class TodoService implements ITodoService{
    
    
    private storage: Todo[] = [];

    findAll(): Todo[] {
        return this.storage;
    }

    create(todo: Todo): void {
        const currentTodoTotal = Math.max(...this.storage.map((t: Todo) => t.id));
        todo.id = currentTodoTotal + 1;
        this.storage.push(todo);
    }

   

}