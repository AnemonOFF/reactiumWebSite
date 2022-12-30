import { GetServerSideProps, NextPage } from "next";
// import { readFileSync } from "fs";
// import path from "path";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { readFileSync } = require("fs");
    const path = require("path");
    console.log(process.cwd());
    console.log(__dirname);
    const pathToFile = path.join(process.cwd(), 'documentation', (context.query.doc as string) ?? 'button', `${context.query.example ?? 'colors'}.tsx`);
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