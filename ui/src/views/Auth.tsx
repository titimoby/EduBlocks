import * as firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';
import * as React from 'preact';


interface AuthProps {
    openAuth(): void;
    closeAuth(): void;
}

interface State {
    modal: boolean;
    user: firebase.User | null;
}

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
                    iconUrl: 'data:image/png;base64,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',
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
                {this.state.user.photoURL ? <img src={this.state.user.photoURL} alt='' /> : <img src="https://www.elitefitnessnow.com/assets/uploads/user/photo/default-profile-image.png" alt='' />}
                <button style='background: rgba(0, 0, 0, 0); padding: 0.1em !important;' onClick={this.logOutAccount} data-tooltip='Log Out'><span>{this.state.user.displayName}</span></button>
            </div>;
        }

        return <div className='login'>
            <button style='background: rgba(0, 0, 0, 0)' onClick={this.openAuth}><i class='fas fa-sign-in-alt'></i>  Login</button>
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
                        <h3>Login</h3>
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

