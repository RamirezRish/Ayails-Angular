export interface Task{
    readonly id?:number;

    title:string;
    description:string;
    acceptance_criteria:string[];
    dependency:string[];
    history_points:number;
    spring_assigned:number;
    date_creation:Date;
    time_limit?:Date;
    responsible?:string;
    status:string;
    priority:string;
    observation?:Observation[];
    dev_doubts?:DevDoubts[];

}

export interface Observation{
    readonly id?:number;
    readonly author_id?:number;

    observation:string;
}
export interface DevDoubts{
    readonly id?:number;
    readonly author_id?:number;

    doubt:string;
}