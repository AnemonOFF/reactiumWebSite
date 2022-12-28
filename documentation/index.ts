import button from './button';
import card from './card';
import container from './container';
import drawer from './drawer';
import grid from './grid';
import list from './list';
import navbar from './navbar';
import table from './table';
import text from './text';
import group from './group';
import checkbox from './checkbox';
import radio from './radio';
import input from './input';
import modal from './modal';

const components = [
    card,
    container,
    grid,
    list,
    navbar,
    table,
    text,
    drawer,
    button,
    group,
    checkbox,
    radio,
    input,
    modal,
]

export const GetComponentsNames = () => components.map(c => c.name);

export const GetComponentDoc = (name: string) => components.find(c => c.name.toLowerCase() == name);