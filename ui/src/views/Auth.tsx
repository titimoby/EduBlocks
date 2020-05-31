import * as firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';
import * as React from 'preact';
import {navLabels} from './Page';


interface AuthProps {
    openAuth(): void;
    closeAuth(): void;
}

interface State {
    modal: boolean;
    user: firebase.User | null;
}

export const hellomyname = "hello";

export default class Auth extends React.Component<AuthProps, State> {
    ui: firebaseui.auth.AuthUI;
    uiConfig: {};

    constructor() {
        super();
        let self = this;

        this.ui = new firebaseui.auth.AuthUI(firebase.auth());
        this.uiConfig = {
            autoUpgradeAnonymousUsers: true,
            callbacks: {
                signInSuccessWithAuthResult: function (authResult: any, redirectUrl: any) {
                    console.log(authResult, redirectUrl);
                    self.props.closeAuth();
                    return false;
                },
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                {
                    hd: 'acme.com',
                    provider: 'microsoft.com',
                    providerName: 'Microsoft',
                    buttonColor: '#2F2F2F',
                    iconUrl: 'https://clipartart.com/images/microsoft-logo-clipart-transparent-3.png',
                    loginHintKey: 'login_hint',
                  },
                  {
                    hd: 'acme.com',
                    provider: 'apple.com',
                    providerName: 'Apple',
                    buttonColor: '#000000',
                    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1200px-Apple_logo_white.svg.png',
                    loginHintKey: 'login_hint',
                  },
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: true
                },
            ],
        };

        this.state = {
            modal: false,
            user: null,
        };

        this.openAuth = this.openAuth.bind(this);
    }

    private openAuth() {
        this.ui.start('#firebaseui-auth-container', this.uiConfig);
        this.props.openAuth();
    }

    private logOutAccount() {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }, function (error) {
            // An error happened.
        });
    }

    componentDidMount(): void {
        if (this.ui.isPendingRedirect()) {
            this.ui.start('#firebaseui-auth-container', this.uiConfig);
            this.props.openAuth();
        }

        let self = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
                self.setState({
                    user: user,
                });
            } else {
                self.setState({
                    user: null,
                });
            }
        });

    }

    
    public render() {
        if (this.state.user) {
            return <div className='login'>
                {this.state.user.photoURL ? <img id="loginimage" src={this.state.user.photoURL} alt='' /> : <img id="loginimage" src="https://www.elitefitnessnow.com/assets/uploads/user/photo/default-profile-image.png" alt='' />}
                <button style='background: rgba(0, 0, 0, 0); padding: 0.1em !important;' onClick={this.logOutAccount} data-tooltip='Log Out'><span id="name">{this.state.user.displayName}</span></button>
            </div>;
        }

        return <div className='login'>
            <button style='background: rgba(0, 0, 0, 0)' onClick={this.openAuth}><i class='fas fa-sign-in-alt'></i>  {navLabels[6]}</button>
        </div>;
    }
}

interface AuthModalProps {
    visible: boolean;

    onClose(): void;
}

export class AuthModal extends React.Component<AuthModalProps, {}> {
    public render() {

        return (
            <div class='modal'>
                <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />
                <label for='modal_1' class='overlay' />
                <article class='LoginModal__container'>
                    <header class='LoginModal__header'>
                        <h3>{navLabels[6]}</h3>
                        <a class='LoginModal__close close'
                            onClick={this.props.onClose}>&times;</a>
                    </header>

                    <section class='SelectModel__content'>
                        <div id='firebaseui-auth-container' />
                    </section>
                </article>
            </div>
        );
    }
}

