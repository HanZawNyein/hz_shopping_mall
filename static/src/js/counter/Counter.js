/** @odoo-module */

const { Component, useState } = owl;

export class Counter extends Component {
     static template = "hz_shopping_mall.Counter";

     state = useState({ value: 0 });

     increment() {
         this.state.value++;
     }
 }