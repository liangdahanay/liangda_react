import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

const findChromeVersion = require("find-chrome-version")
const { detect } = require('detect-browser');
const browser = detect();

function App() {
    const example = async () => {
        const chromeVersion = await findChromeVersion()
        console.log(`Your Chrome version is ${chromeVersion}`)
    }
    if (browser) {
        console.log(browser.name);
        console.log(browser.version);
        console.log(browser.os);
        console.log(browser.type)
        console.log(browser.type)

    }

    // useEffect(() => {
    //     // Create an scoped async function in the hook
    //     async function anyNameFunction() {
    //         await example();
    //     }
    //     // Execute the created function directly
    //     anyNameFunction();
    // }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <h2>Browser Info</h2>
                <p>Name: {browser.name}</p>
                <p>Version: {browser.version}</p>
                <p>OS: {browser.os}</p>
                <p>Type: {browser.type}</p>
                <p>Bot: {browser.bot}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
