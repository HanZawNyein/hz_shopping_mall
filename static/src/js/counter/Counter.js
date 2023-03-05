/** @odoo-module */

const { Component, useState, useRef } = owl;

export class Counter extends Component {
    setup() {
        this.todos= useState([]);
    }

    static template = "hz_shopping_mall.Counter";

    inputRef = useRef("input");

    add_todo() {
        let length = this.todos.length
        this.todos.push({id:++length, description:this.inputRef.el.value, done: false});
        this.inputRef.el.value = ''
    }

    click_checkbox(td){
        td.done = !td.done
    };
}
