import React from "react";
import "./app.css";

import { AppInfo } from "../app-info/app-info";
import { SearchPanel } from "../search-panel/search-panel";
import { AppFilter } from "../app-filter/app-filter";
import { EmployeesList } from "../employees-list/employees-list";
import { EmployeesAddForm } from "../employees-add-form/employees-add-form";

const data = [
    {
        id: 1,
        name: "Maxim P",
        salary: 4800,
        increase: false
    },

    {
        id: 2,
        name: "Viktor R",
        salary: 3800,
        increase: true
    },

    {
        id: 3,
        name: "Maxim S",
        salary: 2800,
        increase: false
    },

    {
        id: 4,
        name: "Artem V",
        salary: 1800,
        increase: false
    },
];

const App = () => {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data = {data} />
            <EmployeesAddForm />
        </div>
    );
};

export { App };
