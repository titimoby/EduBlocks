import React = require('preact');
import { Component } from 'preact';

interface ImageModalProps<T extends ImageModalOption> {
  title: string;
  visible: boolean;
  options: T[];

  onCancel(): void;
  onSelect(option: T): void;
}

interface ImageModalState {

}

export interface ImageModalOption {
  title: string;
  image: string;
  help: string;
}

export default class ImageModal<T extends ImageModalOption> extends Component<ImageModalProps<T>, ImageModalState> {
  public render() {
    const getOptions = () => (
      this.props.options.map((option) => (
        <div className='ImageModalOption' onClick={() => this.props.onSelect(option)} style="position: relative; cursor: pointer;">
          <img src={option.image} />
          <div className='ImageModalOptionButtonContainer'>
            <button className="ImageSelectButton" onClick={() => this.props.onSelect(option)}>{option.title}</button>
            <div className='ImageHelpIconContainer' style="text-align: center;">
              <a class='icon-help-circled' style='color: rgba(255, 255, 255, 0.8);font-size: 23px;' href={option.help}></a>
            </div>
          </div>
        </div>
      ))
    );

    return (
      <div class='modal'>
        <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />
        <label for='modal_1' class='overlay'></label>
        <article style="width: 57%;">
          <header>
            <h3>{this.props.title}</h3>
          </header>

          <section class='content'>
            <div class='ImageModalOptionContainer'>
              {getOptions()}
            </div>
          </section>
          <footer>

          </footer>
        </article>
      </div>
    );
  }
}
