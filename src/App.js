import logo from './logo.svg';
import './App.css';
import {UAParser} from 'ua-parser-js';

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
                <h2>Browser Info</h2>
                <p>Name: {browserInfo.browserName}</p>
                <p>Platform: {browserInfo.platform}</p>
                <p>Device: {browserInfo.device}</p>
                <a
                    className="App-link"
                    href="https://liangda-android-play.herokuapp.com/mshop"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    SSO with Amazon
                </a>
            </header>
        </div>
    );
}

export default App;
