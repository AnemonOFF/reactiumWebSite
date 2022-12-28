import { ApiRow } from "./types";

export const apiRows: {[name: string]: ApiRow} = {
    'children': { attribute: 'children', isRequired: false, type: ['ReactNode'], default: undefined, version: '1.0.0-beta.1', description: 'React children'},
    'hideOnMedia': { attribute: 'hideOnMedia', isRequired: false, type: ['Breakpoint'], default: undefined, version: '1.0.0-beta.1', description: 'Hide element on media width'},
    'showOnMedia': { attribute: 'showOnMedia', isRequired: false, type: ['Breakpoint'], default: undefined, version: '1.0.0-beta.1', description: 'Show element on media width'},
    'hideScroll': { attribute: 'hideScroll', isRequired: false, type: ['boolean'], default: undefined, version: '1.0.0-beta.1', description: 'Hide scrollbar when element overflow'},
    'blur': { attribute: 'blur', isRequired: false, type: ['boolean'], default: undefined, version: '1.0.0-beta.1', description: 'Blur element bacground'},
    'css': { attribute: 'css', isRequired: false, type: ['CSS'], default: undefined, version: '1.0.0-beta.1', description: 'Override CSS styles' },
    'html': { attribute: 'html', isRequired: false, type: ['HTMLAttributes'], default: undefined, version: '1.0.0-beta.1', description: 'Native HTML element props' },
}

export const apiBreakpointsRows: Array<ApiRow> = [
    { attribute: 'all', isRequired: false, type: ['number', 'string', 'boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Set display or/and max-width for all breakpoints'},
    { attribute: 'xs', isRequired: false, type: ['number', 'string', 'boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Set display or/and max-width for xs devices (650px)'},
    { attribute: 'sm', isRequired: false, type: ['number', 'string', 'boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Set display or/and max-width for small devices (960px)'},
    { attribute: 'md', isRequired: false, type: ['number', 'string', 'boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Set display or/and max-width for medium devices (1280px)'},
    { attribute: 'lg', isRequired: false, type: ['number', 'string', 'boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Set display or/and max-width for large devices (1400px)'},
    { attribute: 'xl', isRequired: false, type: ['number', 'string', 'boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Set display or/and max-width for xl devices (1920px)'},
]