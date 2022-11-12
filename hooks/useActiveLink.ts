import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useActiveLink = (href: string) => {
    const router = useRouter();
    const [active, setActive] = useState(router.pathname == href);

    useEffect(() => {
        if(!router.isReady)
            return;
        const query = router.query;
        let pathname = router.pathname;
        for(let key in query) {
            const value = query[key] as string;
            pathname = pathname.replace(`[${key}]`, value)
        }
        setActive(pathname == href);
    }, [setActive, router.isReady, router.pathname, router.query, href])

    return active;
}

export default useActiveLink;