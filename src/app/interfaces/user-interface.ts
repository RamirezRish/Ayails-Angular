export interface User{
    readonly id?:number;

    email:string;
    username:string;
    name?:string;
    lastname?:string;
    password:string;
    roles?:string[];

}

