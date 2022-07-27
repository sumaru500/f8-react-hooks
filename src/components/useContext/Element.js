import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Element() {
    const themeContextValue = useContext(ThemeContext);
    return ( 
        <div>
            <p className={themeContextValue.theme}> Xin chao cac ban F8</p>
        </div>
     );
}

export default Element;