export default function define(Python: Blockly.BlockGenerators) {
  Python['import_mambo'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from pyparrot.Minidrone import Mambo\n';
    return code;
  }; 

  Python['mambo_setup'] = function(block) {
    var variable_mambo = Blockly.Python.variableDB_.getName(block.getFieldValue('mambo'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code =  variable_mambo + ' = Mambo(' +value_name+ ')\n';
    return code;
  };

  Python['mambo_connect'] = function(block) {
    var variable_success = Blockly.Python.variableDB_.getName(block.getFieldValue('success'), Blockly.Variables.NAME_TYPE);
    var variable_mambo = Blockly.Python.variableDB_.getName(block.getFieldValue('mambo'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_success+ ' = ' +variable_mambo+ '.connect(' +value_name+ ')\n';
    return code;
  };

  Python['mambo_sleep'] = function(block) {
    var variable_mambo = Blockly.Python.variableDB_.getName(block.getFieldValue('mambo'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_mambo+ '.smart_sleep(' +value_name+ ')\n';
    return code;
  };

  Python['mambo_update'] = function(block) {
    var variable_mambo = Blockly.Python.variableDB_.getName(block.getFieldValue('mambo'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_mambo+ '.ask_for_state_update()\n';
    return code;
  };

  Python['mambo_disconnect'] = function(block) {
    var variable_mambo = Blockly.Python.variableDB_.getName(block.getFieldValue('mambo'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_mambo+ '.disconnect()\n';
    return code;
  };

  Python['mambo_takeoff'] = function(block) {
    var variable_mambo = Blockly.Python.variableDB_.getName(block.getFieldValue('mambo'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_mambo+ '.safe_takeoff(' +value_name+ ')\n';
    return code;
  };

  Python['mambo_turn'] = function(block) {
    var variable_mambo = Blockly.Python.variableDB_.getName(block.getFieldValue('mambo'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_mambo+ '.turn_degrees(' +value_name+ ')\n';
    return code;
  };

  Python['mambo_land'] = function(block) {
    var variable_mambo = Blockly.Python.variableDB_.getName(block.getFieldValue('mambo'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_mambo+ '.safe_land(' +value_name+ ')\n';
    return code;
  };

  Python['mambo_flip'] = function(block) {
    var variable_mambo = Blockly.Python.variableDB_.getName(block.getFieldValue('mambo'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_mambo+ '.flip(' +value_name+ ')\n';
    return code;
  };
}
