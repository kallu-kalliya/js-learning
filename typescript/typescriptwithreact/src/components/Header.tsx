import type { JSX } from "react"

export default function Header():JSX.Element {
    return (
        <header>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
        </header>
    )
}

/*
TYPING USING REACT.FC

const Header: React.FC<props> = () => {
    return (
        <header>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
        </header>
    );
};

export default Header;

*/
// here we can see react.fc 
// this is a generic type that can also take a genric argument of props 
// it automatically types the return value as a jsx element , which is great 
// slide downside is that is it does include children in props by default even if its not used 
//