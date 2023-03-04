/** @odoo-module **/

import { registry } from "@web/core/registry";

const { Component } = owl;
import { Card } from "./card/Card";
import { Counter } from "./counter/Counter";

class Home extends Component {}

Home.components = {Card,Counter};
Home.template = "hz_shopping_mall.Home";

registry.category("actions").add("hz_shopping_mall.home", Home);
