import { useState, useEffect } from "react"

export const useGithubUser = (name) => {
    const [state, setState] = useState({
        name: "",
        id: "",
        followers: "",
        repos: "",
        isLoading: true,
        error: false,
    });
    async function fetchData(username) {
        try {
            const fetchData = await fetch(`https://api.github.com/users/${username}`);
            if (fetchData.status !== 200) {
                return setState((pre) => {
                    return { 
                        ...pre,
                        error: true,
                    isLoading: false,
                }
                })
            } 
            const data = await fetchData.json();
                setState(() => {
                    return {
                        name: data.name,
                        id: data.id,
                        followers: data.followers,
                        repos: data.public_repos,
                    }
                })
        } catch (err) {
           throw new Error("ops " + err)
        }
    }
    useEffect(() => {
        fetchData(name)
    }
        , [name]);
        return {
            state: state, 
            setState: setState, 
            fetchData: fetchData
        };
}