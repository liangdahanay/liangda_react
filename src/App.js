import logo from './logo.svg';
import './App.css';
import {browserName} from "detect-browser";
import {UAParser} from 'ua-parser-js';

const findChromeVersion = require("find-chrome-version")

function detectPlatform() {
    const uaParser = new UAParser()
    const platform = uaParser.getOS().name;
    const browserName = uaParser.getBrowser().name;
    const device = uaParser.getDevice().type;
    return {platform, browserName, device}
    // const userAgentData = window.navigator.userAgentData;
    // let platform;
    // let browserName;
    // let isMobile
    // if (userAgentData) {
    //     platform = userAgentData.platform;
    //     isMobile = userAgentData.mobile;
    //
    //     const brands = userAgentData.brands;
    //     console.log(brands)
    // }
    //
    // return {platform, isMobile, browserName}

}

function App() {
    const browserInfo = detectPlatform();
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <h2>Browser Info</h2>
                <p>Name: {browserInfo.browserName}</p>
                <p>Platform: {browserInfo.platform}</p>
                <p>Device: {browserInfo.device}</p>
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
