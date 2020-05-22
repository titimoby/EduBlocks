import React = require('preact');
import { Component } from 'preact';
import {generic, navLabels} from './Page';

interface FirebaseSelectModalProps<T extends FirebaseSelectModalOption> {
  title: string;
  selectLabel: string;
  visible: boolean;

  buttons: FirebaseSelectModalButton[];
  options: T[];

  onButtonClick(key: string): void;
  onSelect(option: T): void;
  onDelete(option: T): void;
  onShare(option: T): void;
}

interface FirebaseSelectModalState {

}

export interface FirebaseSelectModalOption {
  label: string;
}

export interface FirebaseSelectModalButton {
  key: string;
  label: string;
  position: 'left' | 'right';
}

export default class FirebaseSelectModal<T extends FirebaseSelectModalOption> extends Component<FirebaseSelectModalProps<T>, FirebaseSelectModalState> {
  private getButtons(): FirebaseSelectModalButton[] {
    return [
      ...this.props.buttons,
      { key: 'close', label: 'Close', position: 'right' },
    ];
  }

  public render() {
    const getOptions = () => this.props.options.map((option) => ([
      <div class='SelectModal__cell SelectModal__cell--text'>
        <span>{option.label}</span>
      </div>,
      <div class='SelectModal__cell SelectModal__cell--action'>
        <button style="background-color: #49B04D" id="sharebutton" class="buttonMenu" onClick={() => this.props.onShare(option)}>{navLabels[11]}</button>
        <button class="buttonMenu error" id="deletebutton" onClick={() => this.props.onDelete(option)}>{generic[4]}</button>
        <button onClick={() => this.props.onSelect(option)}>{generic[0]}</button>
      </div>,
    ]));

    return (
      <div class='SelectModal modal' style="min-width: 60%">

        <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />

        <label for='modal_1' class='overlay'></label>

        <article class='SelectModel__container'>

          <header class='SelectModal__header'>
            <h3>{generic[12]}</h3>
            <a class='SelectModal__close close' onClick={() => this.props.onButtonClick('close')}>&times;</a>
          </header>

          <section class='SelectModel__content'>
            <div class='SelectModal__grid'>
              {getOptions()}
            </div>
          </section>

          <footer class='SelectModal__buttons'>
            {
              this.getButtons().map((button) => (
                <button style={{ float: button.position, [`margin-${button.position === 'left' ? 'right' : 'left'}`]: '8px' }} onClick={() => this.props.onButtonClick(button.key)}>{generic[3]}</button>
              ))
            }
          </footer>

        </article>

      </div>
    );
  }
}
