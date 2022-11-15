import { NextPage } from "next";
import Head from "next/head";
import DocsLayout from "../../components/layout/docsLayout";
import { Text } from "../../reactiumui";

const DocsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Docs - ReactiumUI library for React</title>
            </Head>
            <DocsLayout>
                <Text h1>Getting started</Text>
            </DocsLayout>
        </>
    );
}

export default DocsPage;