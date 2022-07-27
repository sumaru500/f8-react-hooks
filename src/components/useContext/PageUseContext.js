import Container from "./Container";
import ThemeProvider from "./ThemeContext";
import './style.css'

function PageUseContext() {
    return ( 
        <ThemeProvider>
            <div>
                <h1>Use Context Example - Theme management</h1>
                <Container></Container>
            </div>
        </ThemeProvider>
     );
}

export default PageUseContext;