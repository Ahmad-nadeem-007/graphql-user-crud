
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    name: string;
    email: string;
    age: number;
}

export interface UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    age?: Nullable<number>;
    id: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
    user(id: number): User | Promise<User>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
