import { GetServerSideProps, NextPage } from "next";
import Error from "next/error";
import { useEffect } from "react";
import { GetComponentDoc } from "../../../../documentation";
import { ReactiumThemeProvider, useReactiumTheme } from "reactiumui";

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            name: context.query.name,
            id: context.query.id
        }
    }
}

const ExamplePage: NextPage<{name: string, id: string}> = ({name, id}) => {
    const { setTheme } = useReactiumTheme();

    const componentDoc = GetComponentDoc(name);
    const example = componentDoc?.examples.find(e => e.uid === id);

    useEffect(() => {
        const onMessage = (e: MessageEvent) => {
            setTheme(e.data);
        }

        window.addEventListener('message', onMessage);
        return () => window.removeEventListener('message', onMessage);
    }, [setTheme])

    if(componentDoc === undefined || example === undefined)
        return <Error statusCode={404} />
    
    return (
        <ReactiumThemeProvider>
            {example.code}
        </ReactiumThemeProvider>
    );
}

export default ExamplePage;