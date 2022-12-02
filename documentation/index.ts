import card from './card';
import container from './container';
import drawer from './drawer';
import grid from './grid';
import list from './list';
import navbar from './navbar';
import table from './table';
import text from './text';

const components = [
    card,
    container,
    grid,
    list,
    navbar,
    table,
    text,
    drawer,
]

export const GetComponentsNames = () => components.map(c => c.name);

export const GetComponentDoc = (name: string) => components.find(c => c.name.toLowerCase() == name);