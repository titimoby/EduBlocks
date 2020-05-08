import React = require('preact');
import { Component } from 'preact';
import {generic} from './Page';

interface IEModalProps<T extends IEModalOption> {
  title: string;
  visible: boolean;
  text: string;
  text2?: string;


  onCancel(): void;
}

interface IEModalState {

}

export interface IEModalOption {
  title: string;
  text: string;
  text2?: string;
}



export default class IEModal<T extends IEModalOption> extends Component<IEModalProps<T>, IEModalState> {
  public render() {

    return (
      <div class='modal'>
        <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />
        <label for='modal_1' class='overlay'></label>
        <article class="AlertModel__container"> 
          <header class="SelectModal__header">
            <h3>{this.props.title}</h3>
          </header>

          <section class='SelectModel__content' id="modaltext">
            {this.props.text}
            <br></br>
            <div style="text-align: center; font-weight: bolder;">{this.props.text2}</div>
            
          </section>
        </article>
      </div>
    );
  }
}
