import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  
  private tasks: Task [] = [];
  private idCounter = 1;

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

  addTask(task: Task) {
    task.id = this.idCounter++;
    this.tasks.push(task);
  }

  updateTask(updated: Task) {
    const index = this.tasks.findIndex(t => t.id === updated.id);
    if (index !== -1) this.tasks[index] = updated;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

}
