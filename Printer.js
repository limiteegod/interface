var CronJob = require("cron").CronJob;


var Printer = function(){};

Printer.prototype.start = function()
{
    self.jobid = new CronJob('*/5 * * * * *', function () {

    }, null, false, 'Asia/Shanghai');
    self.jobid.start();
};

var p = new Printer();
p.start();