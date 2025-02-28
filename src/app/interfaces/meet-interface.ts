export interface Meet{
    readonly id?:number;

    scrumType:string;
    goals:string[];
    format:string;
    access:string;
    duration:number;
    time:Date;
    notes?:string[];
}