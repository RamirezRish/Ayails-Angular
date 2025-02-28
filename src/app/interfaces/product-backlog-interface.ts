import { Task } from "./task-interface";

export interface ProductBacklog{
    readonly id?:number;

    goals:string[];
    tasks:Task[];
}