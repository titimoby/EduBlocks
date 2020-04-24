import React = require('preact');
import {Component} from 'preact';
import Auth from './Auth';
import {navLabels} from './Page';

interface Props {
    platformImg?: string;

    openSamples(): void;

    openExtensions?(): void;

    openThemes(): void;

    // downloadPython(): void;
    downloadHex?(): void;

    downloadPython?(): void;

    onFunction(): void;

    openPlatforms(): void;

    modeQuestion(): void;

    newCode(): void;

    openCode(): void;

    saveCode(): void;

    openTerminal?(): void;

    onFileChange(fileName: string): void;

    openAuth(): void;

    closeAuth(): void;

    sync: boolean;
}

export default class Nav extends Component<Props, {}> {
    public render() {
        const {downloadHex, openTerminal: sendCode, downloadPython} = this.props;

        return (
            <nav>
                <a class='brand' onClick={() => this.props.modeQuestion()} data-tooltip='Change Mode'>
                    {this.props.platformImg && <img src={this.props.platformImg} class='Nav__platformImg' height={50}/>}
                    <img class='logo' src='https://i.ibb.co/2Zp0pyw/weblogo.png'/>
                </a>
                <Auth openAuth={this.props.openAuth} closeAuth={this.props.closeAuth}/>
                <input id="filename" class='brand' type='email' placeholder={navLabels[7]}
                       style='width: 200px !important; color:black; margin-left: 5px; float:right'
                       onChange={(e) => this.props.onFileChange((e.target as any).value)}/>
                <input id='bmenub' type='checkbox' class='show'/>
                <label for='bmenub' class='burger pseudo button icon-menu'/>


                <div class='menu' id="menubar">
                    

                    <a class='button icon-plus' id="new" title='Create new file' href='javascript:void(0)'
                       onClick={() => this.props.newCode()}>
                        {navLabels[0]}
                    </a>

                    <a class='button icon-folder-open' title='Open a file' href='javascript:void(0)'
                       onClick={() => this.props.openCode()}>
                        {navLabels[1]}
                    </a>

                    <a class='button icon-floppy' title='Save a file' href='javascript:void(0)'
                       onClick={() => this.props.saveCode()}>
                        {navLabels[2]}
                    </a>

                    {downloadHex &&
                    <a class='button icon-flash' title='Download file to flash to micro:bit' href='javascript:void(0)'
                       onClick={() => downloadHex()}>
                        {navLabels[8]}
                    </a>
                    }

                    {downloadPython &&
                    <a class='button icon-download' title='Download Python Source Code' href='javascript:void(0)'
                       onClick={() => downloadPython()}>
                        {navLabels[9]}
                    </a>
                    }


                    {/*<a class='button' title='Themes' href='javascript:void(0)' onClick={() => this.props.openThemes()}>
            Themes
          </a>*/}

                   

                    <a class='button icon-book' title='Samples' href='javascript:void(0)'
                       onClick={() => this.props.openSamples()}>
                        {navLabels[3]}
                    </a>

                    <a class='button icon-cog' title='Settings' href='javascript:void(0)'
                       onClick={() => this.props.onFunction()}>
                        {navLabels[4]}
                    </a>

                    {sendCode &&
                    <a class='button icon-play button-green' title='Run your code' href='javascript:void(0)'
                       onClick={() => sendCode()}>
                        {navLabels[5]}
                    </a>
                    
                    
                    }

                    

                </div>
            </nav>
        );
    }
}
