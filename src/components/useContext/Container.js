import { useContext } from "react";
import Element from "./Element";
import { ThemeContext } from "./ThemeContext";

function Container() {
    const themeContextValue = useContext(ThemeContext);
    return ( 
        <div>
            <button onClick={themeContextValue.toggleTheme}>Toggle Them</button>
            <Element></Element>
        </div>
     );
}

export default Container;