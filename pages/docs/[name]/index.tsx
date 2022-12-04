import { GetServerSideProps, NextPage } from "next";
import Error from "next/error";
import Head from "next/head"
import Code from "../../../components/code";
import DocsLayout from "../../../components/layout/docsLayout";
import Resizable from "../../../components/resizable";
import { GetComponentDoc } from "../../../documentation";
import { List, ListItem, styled, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Text } from "../../../reactiumui";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import Iframe from "../../../components/iframe";
import { readFileSync } from "fs";
import Linker from "../../../components/linker";
require("prismjs/components/prism-jsx.min.js");
require("prismjs/components/prism-tsx.min.js");
require("prismjs/plugins/line-numbers/prism-line-numbers.min.js");

export const getServerSideProps: GetServerSideProps = async (context) => {
    const name = context.query.name as string;
    const doc = GetComponentDoc(name);
    let codes;
    if(doc !== undefined)
        codes = Object.fromEntries(doc.examples.map(e => [e.uid, readFileSync(e.codeFilePath).toString()]));

    return {
        props: {
            name,
            codes
        }
    }
}

const ComponentDocPage: NextPage<{name: string, codes: {[uid: string]: string}}> = ({ name, codes }) => {
    const componentDoc = GetComponentDoc(name);

    useEffect(() => {
            Prism.highlightAll();
    }, [name])

    if(componentDoc === undefined)
        return <Error statusCode={404} />
    
    const useCases = componentDoc.useCases?.map((useCase, index) => (
        <ListItem key={index}>{useCase}</ListItem>
    ));

    const examples = componentDoc.examples.map((example, index) => {
        const framed = example.isFramed ? <Iframe src={`/docs/${name}/examples/${example.uid}`} /> : example.code;
        const responsive = example.isResponsive ? <Resizable invisible={example.isFramed}>{framed}</Resizable> : framed;
        return (
            <div key={index}>
                <Linker key={index} id={`example-${example.uid}`}>
                    <Text h3 css={{my: '$xs'}}>{example.name}</Text>
                </Linker>
                {example.description && <Text>{example.description}</Text>}
                {responsive}
                <Code language="tsx" code={codes[example.uid]}/>
            </div>
        )
    });

    const apis = componentDoc?.apis.map((api, index) => (
        <div key={index}>
            <Linker key={index} id={`api-${api.name.replace(' ', '-')}`}>
                <Text h3 css={{ my: '$xs' }}>{api.name}</Text>
            </Linker>
            {api.description && <Text>{api.description}</Text>}
            <Table fullWidth hoverable>
                <TableHeader>
                    <TableColumn>Attribute</TableColumn>
                    <TableColumn>Type</TableColumn>
                    <TableColumn>Default</TableColumn>
                    <TableColumn>Description</TableColumn>
                    <TableColumn>Version</TableColumn>
                </TableHeader>
                <TableBody>
                    {api.rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.attribute}</TableCell>
                            <TableCell>{row.type.join(' | ')}</TableCell>
                            <TableCell>{row.default ?? '-'}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.version}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    ));

    return (
        <>
            <Head>
                <title>{`${componentDoc.name} docs - ReactiumUI library for React`}</title>
            </Head>
            <DocsLayout componentDoc={componentDoc}>
                <Linker id="import">
                    <Text h1>{componentDoc!.name}</Text>
                </Linker>
                <Code language="tsx" code={componentDoc!.import} fit />
                {componentDoc!.description && <Text fontSize={'$lg'}>{componentDoc!.description}</Text>}

                {componentDoc!.useCases &&
                <>
                <Linker id="usecases">
                    <Text h2>Use cases</Text>
                </Linker>
                <List gap='$xs' css={{ mt: '$xs' }}>
                    {useCases}
                </List>
                </>
                }

                <Linker id="examples">
                    <Text h2 css={{ mt: '$xl' }}>Examples</Text>
                </Linker>
                {examples}

                <Linker id="api">
                    <Text h2 css={{ mt: '$xl' }}>API</Text>
                </Linker>
                {apis}
            </DocsLayout>
        </>
    )
}

export default ComponentDocPage;