import {useMemo} from "react";


function useSortedPosts(posts, sort) {
    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => {
                return a[sort].localeCompare(b[sort]);
            });
        } else {
            return posts;
        }
    }, [sort, posts]);
}

function usePost(posts, sort, searchQuery) {
    const sortedPosts = useSortedPosts(posts, sort);
    return useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, sortedPosts]);
}



export {useSortedPosts, usePost};