import { GetServerSideProps, NextPage } from "next";
// import { readFileSync } from "fs";
// import path from "path";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { readFileSync } = require("fs");
    var path = require("path");
    const docsDirectory = path.resolve(process.cwd(), "documentation");
    console.log(process.cwd());
    console.log(__dirname);
    const pathToFile = path.join(docsDirectory, (context.query.doc as string) ?? 'card', `${context.query.example ?? 'default'}.tsx`);
    console.log(pathToFile);
    let code = readFileSync(pathToFile, 'utf-8');

    return {
        props: {
            code
        }
    }
}

const TestPage: NextPage<{code: string}> = ({ code }) => {
    return (
        <code>{code}</code>
    );
}

export default TestPage;