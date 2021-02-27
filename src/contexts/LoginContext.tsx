import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

interface User {
    name: string;
}

interface LoginContextData {
    userName: User;
    userId: number;
    isLoggedIn: () => void;
}

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({ children }: LoginProviderProps) {
    const { user, setUser } = useState("");

    useEffect(() => {
        async function fetchUser(props: User) {
            const response = await fetch(
                `https://api.github.com/${props.user}`
            );
            if (!response.ok) {
                const message = `An error has ocurred: ${response.status}`;
                throw new Error(message);
            }
            const data = await response.json();

            setUser(data);
        }
    });
}
