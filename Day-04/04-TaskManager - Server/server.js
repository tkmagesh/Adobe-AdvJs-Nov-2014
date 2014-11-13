var fs = require("fs"),
    http = require("http"),
    path = require("path"),
    url = require("url");

var staticExtns = [".html",".js",".css",".ico",".png",".jpg", ".json"];

function isStaticResource(pathname){
    return staticExtns.some(function(extn){
        return path.extname(pathname) === extn;
    });
}

var server = http.createServer(function(req,res){
    var urlData = url.parse(req.url,true);
    if (isStaticResource(urlData.pathname)){
        var filePath = path.join(__dirname, urlData.pathname);
        if (fs.existsSync(filePath)){
            var readStream = fs.createReadStream(filePath);
            readStream.pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else {
        if (urlData.pathname === "/tasks"){
            var data = JSON.stringify([
                {id : 1, name : "Learn JavaScript", isCompleted : false, created : new Date()},
                {id : 2, name : "Master jQuery", isCompleted : true, created : new Date()},
                {id : 3, name : "Practice Angular.js", isCompleted : false, created : new Date()},
            ]);
            res.write(data);
            res.end();
        }
    }
});
server.listen(9090);
console.log("server listening on port 9090");
