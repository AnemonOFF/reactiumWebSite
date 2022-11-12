import { ReactNode } from "react"

export type DocExample = {
    name: string,
    description?: string,
    code: ReactNode,
    exampleCode: string,
    isResponsive: boolean
}

export type ApiRow = {
    attribute: string,
    type: string[],
    default?: string,
    description: string,
    version: string,
    isRequired: boolean
}

export type DocApi = {
    name: string,
    description?: string,
    rows: ApiRow[],
}

export type DocData = {
    name: string,
    import: string,
    description?: string,
    useCases?: string[],
    examples: DocExample[],
    apis: DocApi[]
}