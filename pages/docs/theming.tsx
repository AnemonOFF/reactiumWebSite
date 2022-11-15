import { NextPage } from "next";
import Head from "next/head";
import DocsLayout from "../../components/layout/docsLayout";
import { Text } from "../../reactiumui";

const ThemingPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Theming - ReactiumUI library for React</title>
            </Head>
            <DocsLayout>
                <Text h1>Theming</Text>
                <Text i>This chapter is not yet written.</Text>
            </DocsLayout>
        </>
    );
}

export default ThemingPage;