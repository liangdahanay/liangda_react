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

const redirectToApp = () => {
    window.dispatchEvent(new Event('pagehide'))
    //window.location= `https://liangda-android-play.herokuapp.com/mshop?version=1&account_pool=foo&browser=chrome&identity_sso_code_challenge=ABCDEFG&return_url=https://www.amazon.com&application_name=apay&application_context=purchase&language=en_US&merchant_id=XYZ&client_id=abc&consent_ui=NoConsent&signin_url=https://www.amazon.com/signin`
}

function App() {
    const browserInfo = detectPlatform();
    console.log(window.navigator.userAgentData);
    const returnTo = window.location.href;
    const consentUrl = "https://liangda-android-play.herokuapp.com/consent";

    window.addEventListener('pagehide', () => {
        console.log('SB SB pagehide');
    }, true);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Browser Info</h2>
                <p>Name: {browserInfo.browserName}</p>
                <p>Platform: {browserInfo.platform}</p>
                <p>Device: {browserInfo.device}</p>
                <p>userAgent: {window.navigator.userAgent}</p>
                <button onClick={redirectToApp}>
                    redirect 
                </button>
                <a
                    className="App-link"
                    href={`https://liangda-android-play.herokuapp.com/mshop?version=1&account_pool=foo&browser=chrome&identity_sso_code_challenge=ABCDEFG&return_url=https%3A%2F%2Fwww.amazon.com&application_name=apay&application_context=purchase&language=en_US&merchant_id=XYZ&client_id=abc&consent_ui=Consent&signin_url=https%3A%2F%2Fwww.amazon.com%2Fsignin`}
                >
                    SSO with Amazon consent
                </a>
                <a
                    className="App-link"
                    href={`https://liangda-android-play.herokuapp.com/mshop?version=2.7&account_pool=foo&browser=chrome&identity_sso_code_challenge=ABCDEFG&return_url=https://www.amazon.com&application_name=apay&application_context=purchase&language=en_US&merchant_id=XYZ&client_id=abc&consent_ui=NoConsent&signin_url=https://www.amazon.com/signin`}
                >
                    SSO with Amazon no consent
                </a>
                <a
                    className="App-link"
                    href={`https://link.mobileauth.amazon.com/atb/mshop/v1?version=1&account_pool=foo&browser=chrome&identity_sso_code_challenge=ABCDEFG&return_url=https%3A%2F%2Fwww.amazon.com&application_name=apay&application_context=purchase&language=en_US&merchant_id=XYZ&client_id=abc&consent_ui=Consent&signin_url=https%3A%2F%2Fwww.amazon.com%2Fsignin`}

                >
                    MAP Deep link link.mobileauth.amazon.com
                </a>
                <a
                    className="App-link"
                    href={`https://www.amazon.com/atb/mshop/v1`}
                >
                    MAP Deep link www.amazon.com
                </a>
                <a
                    className="App-link"
                    href={`https://www.amazon.com/diadascriancas`}
                >
                    MShop Deep link 2
                </a>

                <a
                    className="App-link"
                    href={`https://www.amazon.com/dn/dashboard`}
                >
                    MShop Deep link 3
                </a>

                <a
                    className="App-link"
                    href={`https://www.amazon.com`}
                >
                    MShop Deep link home page
                </a>
                <a
                    className="App-link"
                    href={`https://www.amazon.com/somerandompage`}
                >
                    MShop Deep link random invalid page
                </a>
            </header>
        </div>
    );
}

export default App;
