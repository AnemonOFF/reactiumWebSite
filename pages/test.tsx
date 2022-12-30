import { GetServerSideProps, NextPage } from "next";
import { readFileSync } from "fs";
import path from "path";

export const getServerSideProps: GetServerSideProps = async (context) => {
    path.resolve("documentation");
    // const docsDirectory = path.resolve(process.cwd(), "documentation");
    console.log(process.cwd());
    console.log(__dirname);
    const pathToFile = path.join(process.cwd(), 'documentation', 'card', 'default.tsx');
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