import logo from './logo.svg';
import './App.css';
import {UAParser} from 'ua-parser-js';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

function detectPlatform() {
    const uaParser = new UAParser()
    const platform = uaParser.getOS().name;
    const browserName = uaParser.getBrowser().name;
    const device = uaParser.getDevice().type;
    return {platform, browserName, device}
}

function App() {
    const browserInfo = detectPlatform();
    console.log(window.navigator.userAgentData);
    const returnTo = window.location.href;
    const consentUrl = "https://liangda-android-play.herokuapp.com/consent";
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
                    href={`https://liangda-android-play.herokuapp.com/mshop?browser_name=${encodeURIComponent(browserInfo.browserName)}&challenge=${encodeURIComponent(sha256(Math.random()))}&returnTo=${encodeURIComponent(consentUrl)}`}
                >
                    SSO with Amazon
                </a>
            </header>
        </div>
    );
}

export default App;
