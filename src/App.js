import './App.css';
import Header from "./Components/Header/Header";
import Logo from "./Components/Header/Logo/Logo";
import MenuItem from "./Components/Header/Menu/MenuItem";
function App() {
    return (
        <div className="App container">
            <Header>
                <Logo title="Georgy"/>
                <Menu>
                    <MenuItem title="Home" link="/"></MenuItem>
                    <MenuItem title="About" link="/about"></MenuItem>
                    <MenuItem title="Projects"></MenuItem>
                    <MenuItem title="Services"></MenuItem>
                    <MenuItem title="Resume"></MenuItem>
                </Menu>
                <p>HEADER</p>

            </Header>
            <p>Test</p>
        </div>
    );
}
export default App;