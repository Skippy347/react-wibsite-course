import React from "react";
import { Component } from "react";
import "./app.css";

import { AppInfo } from "../app-info/app-info";
import { SearchPanel } from "../search-panel/search-panel";
import { AppFilter } from "../app-filter/app-filter";
import { EmployeesList } from "../employees-list/employees-list";
import { EmployeesAddForm } from "../employees-add-form/employees-add-form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    name: "Maxim P",
                    salary: 4000,
                    increase: false,
                    rise: false,
                },
                {
                    id: 2,
                    name: "Maxim P",
                    salary: 4000,
                    increase: true,
                    rise: true,
                },
                {
                    id: 3,
                    name: "Maxim P",
                    salary: 4000,
                    increase: false,
                    rise: false,
                },
                {
                    id: 4,
                    name: "Maxim P",
                    salary: 4000,
                    increase: false,
                    rise: false,
                },
            ],
        };
        this.maxId = 5;
    }

    deleteItem = (id) => {
        console.log(id);
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id),
            };
        });
    };
    //(name, salary) добавили потому что мы их получим с поимка
    addItem = (name, salary) => {
        const newItem = {
            id: this.maxId++,
            name,
            salary,
            increase: false,
            rise: false,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];

            return {
                data: newArr,
            };
        });
    };

    onToggleIncrease = (id) => {
        this.setState(
            ({ data }) => ({
                data: data.map((item) => {
                    if (item.id === id) {
                        return { ...item, increase: !item.increase };
                    }
                    return item;
                }),
            })
        );
    };

    onToggleRise = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, rise: !old.rise}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            
            return {
                data: newArr
            }
            
        })
    };

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        const { data } = this.state;
        return (
            <div className="app">
                <AppInfo employees = {employees} increased = {increased} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export { App };
