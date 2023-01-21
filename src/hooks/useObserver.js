import {useEffect, useRef} from "react";

export const useObserver = (ref, callback, isLoading, isInfinit, condition) => {
    const observer = useRef();
    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();
        const cl = function(entries, observer) {
            if(entries[0].isIntersecting && condition) {
                callback();
            }
        };
        observer.current = new IntersectionObserver(cl);
        observer.current.observe(ref.current);
    }, [isLoading, isInfinit]);
}
