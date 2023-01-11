import { useGithubUser } from "./useGithubUser"

export default function GithubUser({ name }) {
    const {state} = useGithubUser(name);
    return (<div>
        {state.isLoading && <h1>Loading...</h1>}
        {state.id && 
        <div>
            <h1>Github Profile: {state.name || name}</h1>
            <p>User id: {state.id}</p>
            <p>Followers: {state.followers}</p>
            <p>Repos: {state.repos}</p>
        </div>}
         {state.error && <h1>User {name} Not Found</h1>}
        </div>
    )
}