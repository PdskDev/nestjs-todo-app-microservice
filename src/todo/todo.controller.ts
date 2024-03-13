import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
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

    @Get(":id")
    findOne(@Param('id', ParseIntPipe) id: number): Todo{
        this.logger.log(`Handling findOne() Todo with id ${id} request`);
        return this.todoService.findOne(id);
    }

    @Get()
    findAll(): Todo[]{
        this.logger.log("Handling findAll() Todos list request");
        return this.todoService.findAll();
    }

    @Put(":id")
    update(@Param('id', ParseIntPipe) id: number, @Body() todo: Todo): void{
        this.logger.log(`Handling update() Todo with id ${id} request`);
        return this.todoService.update(id, todo);
    }

    @Delete(":id")
    deleteOne(@Param('id', ParseIntPipe) id: number): void{
        this.logger.log(`Handling deleteOne() Todo with id ${id} request`);
        return this.todoService.delete(id);
    }

    

    

}