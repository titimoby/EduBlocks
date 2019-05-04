export default function define(Python: Blockly.BlockGenerators) {
    Python['import_gamebuino_meta'] = function (block) {
        let code = 'from gamebuino_meta import *\n';
        return code;
    };

    Python['begin'] = function (block) {
        let code = 'begin()\n';
        return code;
    };

    Python['waitForUpdate'] = function (block) {
        let code = 'waitForUpdate()\n';
        return code;
    };

    Python['display'] = function(block) {
        let dropdown_options = block.getFieldValue('options');
        let text_dist = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
        let code = 'display.' + dropdown_options + '(' + text_dist + ')\n';
        return code;
    };


}