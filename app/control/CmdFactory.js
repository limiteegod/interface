var userControl = require("./UserControl.js");
var adminControl = require("./AdminControl.js");
var monitorControl = require("./MonitorControl.js");
var prop = require('../config/Prop.js');

var CmdFactory = function(){};

CmdFactory.prototype.handle = function(headNode, bodyStr, cb)
{
    var cmdGroup = headNode.cmd.match(/^([A-Z]+)([0-9]{1,})$/);
    console.log(cmdGroup);
    if(cmdGroup[1] == "A")
    {
        userControl.handle(headNode, bodyStr, cb);
    }
    else if(cmdGroup[1] == "AD")
    {
        adminControl.handle(headNode, bodyStr, cb);
    }
    else if(cmdGroup[1] == "MT")
    {
        monitorControl.handle(headNode, bodyStr, cb);
    }
};

var cmdFactory = new CmdFactory();
module.exports = cmdFactory;