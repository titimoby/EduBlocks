import React = require('preact');
import { Component } from 'preact';


interface LoadModalProps<T extends LoadModalOption> {
  title: string;
  visible: boolean;

  onCancel(): void;
  onButtonClick(key: string): void;
}

interface LoadModalState {

}

export interface LoadModalOption {
  title: string;
}

export default class LoadModal<T extends LoadModalOption> extends Component<LoadModalProps<T>, LoadModalState> {
  public render() {

    return (
      <div class='modal'>
        <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />
        <label for='modal_1' class='overlay'></label>
        <article class="AlertModel__container" style="background-color: white !important;"> 
          <header class="SelectModal__header">
            <h3>{this.props.title}</h3>
            <a class='SelectModal__close close' onClick={() => this.props.onButtonClick('close')}>&times;</a>
          </header>

          <section class='SelectModel__content' style="margin-top: 5px; margin-bottom: 5px;" id="modaltext">
            <div class="loader" style="margin: 0 auto;"></div>
          </section>
        </article>
      </div>
    );
  }
}
