import React = require('preact');
import { Component } from 'preact';

interface UploadModalProps<T extends UploadModalOption> {
  title: string;
  visible: boolean;
  text: string;
  progress: any;

  onCancel(): void;
  onButtonClick(key: string): void;
}

interface UploadModalState {

}

export interface UploadModalOption {
  title: string;
  text: string;
  progress: any;
}

export default class UploadModal<T extends UploadModalOption> extends Component<UploadModalProps<T>, UploadModalState> {
  public render() {

    return (
      <div class='modal'>
        <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />
        <label for='modal_1' class='overlay'></label>
        <article class="AlertModel__container"> 
          <header class="SelectModal__header">
            <h3>{this.props.title}</h3>
            <a class='SelectModal__close close' onClick={() => this.props.onButtonClick('close')}>&times;</a>
          </header>

          <section class='SelectModel__content' style="text-align: center;">
            <progress id="file" value={this.props.progress} max="100"></progress>
            <br></br>
            {this.props.text}
          </section>
        </article>
      </div>
    );
  }
}
