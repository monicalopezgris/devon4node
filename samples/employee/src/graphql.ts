
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Employee {
    id?: number;
    name?: string;
    surname?: string;
    email?: string;
    version?: number;
    createdAt?: string;
    updatedAt?: string;
}

export abstract class IQuery {
    abstract employes(): Employee[] | Promise<Employee[]>;

    abstract employeById(id?: number): Employee | Promise<Employee>;
}
