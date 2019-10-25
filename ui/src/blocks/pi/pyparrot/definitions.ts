export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['import_mambo'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("from pyparrot.Minidrone import Mambo");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#22a6b3");
      this.setTooltip("Import Turtle library");
      this.setHelpUrl("");
    }
  };

  Blocks['mambo_setup'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("mambo"), "mambo")
          .appendField(" = Mambo(");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#22a6b3");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['mambo_connect'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("success"), "success")
          .appendField("= ")
          .appendField(new Blockly.FieldVariable("mambo"), "mambo")
          .appendField(".connect(");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#22a6b3");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['mambo_sleep'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("mambo"), "mambo")
          .appendField(".smart_sleep(");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#22a6b3");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['mambo_update'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("mambo"), "mambo")
          .appendField(".ask_for_state_update()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#22a6b3");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['mambo_disconnect'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("mambo"), "mambo")
          .appendField(".disconnect()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#22a6b3");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['mambo_takeoff'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("mambo"), "mambo")
          .appendField(".safe_takeoff(");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#22a6b3");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['mambo_turn'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("mambo"), "mambo")
          .appendField(".turn_degrees(");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#22a6b3");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['mambo_land'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("mambo"), "mambo")
          .appendField(".safe_land(");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#22a6b3");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['mambo_flip'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("mambo"), "mambo")
          .appendField(".flip(");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#22a6b3");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

}
