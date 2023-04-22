import logo from './logo.svg';
import './App.css';
import {UAParser} from 'ua-parser-js';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

function detectPlatform(userAgent) {
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
    const browserInfoAndroidCNEPWebview = detectPlatform('Amazon.com/24.19.0.100 (Android/13/sdk_gphone64_arm64)');
    const browserInfoAndroidSignInWebview = detectPlatform('Mozilla/5.0 (Linux; Android 13; sdk_gphone64_arm64 Build/TPB3.220513.017; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/105.0.5195.136 Mobile Safari/537.36');
    const browserInfoiOSebview = detectPlatform('Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148');

    console.log(window.navigator.userAgentData);
    const consentUrl = "https://liangda-android-play.herokuapp.com/consent";

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Browser Info CNEP webview</h2>
                <p>Name: {browserInfoAndroidCNEPWebview.browserName}</p>
                <p>Platform: {browserInfoAndroidCNEPWebview.platform}</p>
                <p>Device: {browserInfoAndroidCNEPWebview.device}</p>

                <h2>Browser Info signin webview</h2>
                <p>Name: {browserInfoAndroidSignInWebview.browserName}</p>
                <p>Platform: {browserInfoAndroidSignInWebview.platform}</p>
                <p>Device: {browserInfoAndroidSignInWebview.device}</p>

                <h2>Browser Info webview</h2>
                <p>Name: {browserInfoiOSebview.browserName}</p>
                <p>Platform: {browserInfoiOSebview.platform}</p>
                <p>Device: {browserInfoiOSebview.device}</p>

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
