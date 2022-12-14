import { ReactNode } from "react"

export type DocExample = {
    uid: string,
    name: string,
    description?: string,
    code: ReactNode,
    // codeFilePath: string,
    codeString: string,
    isResponsive?: boolean,
    isFramed?: boolean,
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

export type ExampleCodes = {
    [uid: string]: string
}