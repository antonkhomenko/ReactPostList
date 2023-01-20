import {useState} from "react";

export default function useFetching(callback) {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function fetching() {
        try {
            setIsLoading(true);
            await callback();
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}