var CronJob = require("cron").CronJob;

function sleep(milliSecond) {

    var startTime = new Date().getTime();
    //console.log(startTime);
    while(new Date().getTime() <= milliSecond + startTime) {

    }
    //console.log(new Date().getTime());
}

var index = 1;
var jobid = new CronJob('*/5 * * * * *', function () {
    console.log(new Date().getTime());
    console.log(index);
    index++;
    sleep(10000);
}, null, false, 'Asia/Shanghai');
jobid.start();