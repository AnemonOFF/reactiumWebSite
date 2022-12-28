import { NextPage } from "next";
import Head from "next/head";
import DocsLayout from "../../components/layout/docsLayout";
import { Text } from "reactiumui";
import Code from "../../components/code";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
require("prismjs/components/prism-jsx.min.js");
require("prismjs/components/prism-tsx.min.js");
require("prismjs/plugins/line-numbers/prism-line-numbers.min.js");

const DocsPage: NextPage = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, [])

    return (
        <>
            <Head>
                <title>Docs - ReactiumUI library for React</title>
            </Head>
            <DocsLayout>
                <Text h1>Getting started</Text>
                <Text>Install inside your React project directory with command</Text>
                <Code code={`npm i reactiumui
#or
yarn add reactiumui`} language="markup" />
                <Text>To customize them, add following lines in your root component</Text>
                <Code code={`import {ReactiumThemeProvider} from  'reactiumui';
 
 const App = () => {
     return (
   	  <ReactiumThemeProvider>
   		  <AppComponent />
   	  </ReactiumThemeProvider>
     )
 }`} language="tsx" />
                <Text>Import any components you want</Text>
                <Code code={`import {Button} from 'reactiumui';
// or import manually
// import Button from 'reactiumui/button';
const MyComponent = () => <Button>Press Me</Button>
export default MyComponent;`} language="tsx" />
            </DocsLayout>
        </>
    );
}

export default DocsPage;