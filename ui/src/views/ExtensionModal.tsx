import React = require('preact');
import { Component } from 'preact';

interface ExtensionModalProps<T extends ExtensionModalOption> {
  title: string;
  selectLabel: string;
  visible: boolean;

  buttons: ExtensionModalButton[];
  options: T[];

  onButtonClick(key: string): void;
  onSelect(option: T): void;
}

interface ExtensionModalState {

}

export interface ExtensionModalOption {
  label: string;
}

export interface ExtensionModalButton {
  key: string;
  label: string;
  position: 'left' | 'right';
}

export default class ExtensionModal<T extends ExtensionModalOption> extends Component<ExtensionModalProps<T>, ExtensionModalState> {
 
  public render() {
    const getOptions = () => this.props.options.map((option) => ([
      <a onClick={() => this.props.onSelect(option)}>
      <div class="library-item_library-item_1DcMO library-item_featured-item_3V2-t library-item_library-item-extension_3xus9" id="ext">
      <div class="library-item_featured-image-container_1KIHG">
          <img class="library-item_featured-image_2gwZ6" src={"../../images/" + option.label + ".png" }></img>
      </div>
      <div class="library-item_library-item-inset-image-container_3PLJ1">
          <img class="library-item_library-item-inset-image_17Tmt" src={"../../images/" + option.label + "-icon.png" }></img>
      </div>
      <div class="library-item_featured-extension-text_22A1k library-item_featured-text_2KFel">
          <span class="library-item_library-item-name_2qMXu">
              <span>{option.label}</span>
          </span>
          <br></br>
      </div>
  </div>
  </a>,
    ]));

    return (
      <div id="extensions" class="ReactModal__Overlay ReactModal__Overlay--after-open modal_modal-overlay_1Lcbx" style={{ display: this.props.visible ? 'block' : 'none' }}>
        <div class="ReactModal__Content ReactModal__Content--after-open modal_modal-content_1h3ll modal_full-screen_FA4cr" role="dialog" aria-label="Choose an Extension">
            <div class="box_box_2jjDp" dir="ltr" style="flex-direction: column; flex-grow: 1;">
                <div class="modal_header_1h7ps">
                    <div class="modal_header-item_2zQTd modal_header-item-title_tLOU5">{this.props.title}</div>
                
                    <div class="modal_header-item_2zQTd modal_header-item-close_2XDeL">
                    <a onClick={() => this.props.onButtonClick('close')}>
                        <span class="button_outlined-button_1bS__ modal_back-button_2ej6v" role="button">
                            <img class="button_icon_77d8G"  src="https://scratch.mit.edu/static/assets/aaa4a3575852fe11d04f44c4a972ae73.svg"></img>
                            <div class="button_content_3jdgj">
                                <span style="color: white !important;">Back</span>
                            </div>
                        </span>
                        </a>
                    </div>
                    
                </div>
                <div class="library_library-scroll-grid_1jyXm">
                {getOptions()}
                    </div>
            </div>
            </div>
    </div>
    );
  }
}
