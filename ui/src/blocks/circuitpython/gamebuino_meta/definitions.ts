export default function define(Blocks: Blockly.BlockDefinitions) {
    Blockly.Blocks['import_gamebuino_meta'] = {
        init: function() {
            this.appendDummyInput()
                .appendField('from gamebuino_meta import *');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(38);
            this.setTooltip('Import all useful Gamebuino objects');
            this.setHelpUrl('');
        },
    };

    Blockly.Blocks['begin'] = {
        init: function() {
            this.appendDummyInput()
                .appendField('begin()');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(38);
            this.setTooltip('Initialize Gamebuino');
            this.setHelpUrl('');
        },
    };

    Blockly.Blocks['waitForUpdate'] = {
        init: function() {
            this.appendDummyInput()
                .appendField('waitForUpdate()');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(38);
            this.setTooltip('Waits until next screen update');
            this.setHelpUrl('');
        },
    };

    Blocks['display'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('display.')
                .appendField(new Blockly.FieldDropdown([['clear', 'clear'], ['print', 'print']]), 'options')
                .appendField('(');
            this.appendValueInput('text')
                .setCheck(null);
            this.appendDummyInput()
                .appendField(')');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('38');
            this.setTooltip('Display operations');
            this.setHelpUrl('');
        },
    };
}