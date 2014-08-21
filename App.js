var express = require('express'), app = express();
var cmdFactory = require("./app/control/CmdFactory.js");

app.use(express.logger());

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//是Connect內建的middleware，设置此处可以将client提交过来的post请求放入request.body中
app.use(express.bodyParser());
//是Connect內建的，可以协助处理POST请求伪装PUT、DELETE和其他HTTP methods
app.use(express.methodOverride());
//route requests
app.use(app.router);
//public文件夹下面的文件，都暴露出来，客户端访问的时候，不需要使用public路径
app.use(express.static(__dirname + '/public'));

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

app.get('/', function(req, res){
    res.render('index', {
        title: 'Express',
        youAreUsingJade:true
    });
});

app.post("/main/interface.htm", function(req, res){
    var message = req.body.message;
    console.log(message);
    var msgNode = JSON.parse(message);
    var headNode = msgNode.head;
    var bodyStr = msgNode.body;
    console.log(bodyStr);
    var msgNode = cmdFactory.handle(headNode, bodyStr);
    res.json(msgNode);
});

app.listen(8081);