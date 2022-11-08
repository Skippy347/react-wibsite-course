import React from "react";
import "./employees-list.css";
import { EmployeesListItem } from "../employees-list-item/employees-list-item";

const EmployeesList = ({ data, onDelete }) => {
    //creating our elements
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;

        return (
            //<EmployeesListItem name = {item.name} salary = {item.salary}/> 1 example
            <EmployeesListItem key={id} {...itemProps} onDelete = {() => onDelete(id)}/> //2 example
        );
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export { EmployeesList };
