import { Body, Controller, Get, Logger, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { Todo } from "./todo.model";

@Controller("todo")
export class TodoController {
    private readonly logger = new Logger(TodoController.name);

    constructor(private readonly todoService: TodoService){}

    @Post()
    create(@Body() todo: Todo): void {
        this.logger.log("Handling create() new Todo request");
        return this.todoService.create(todo);
    }

    @Get()
    findAll(): Todo[]{
        this.logger.log("Handling findAll() Todos request");
        return this.todoService.findAll();
    }

    

}