import './App.css';
import Header from "./Components/Header/Header";
import Logo from "./Components/Header/Logo/Logo";

function App() {
    return (
        <div className="App container">
            <Header>
                <Logo title="Robi Pritrznik"/>
                <p>HEADER</p>

            </Header>
            <p>Test</p>
        </div>
    );
}

export default App;