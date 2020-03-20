var fs = require("fs");
var spawn = require("child_process").spawn;

var sorting = spawn("sort", ["unsorted-names-list.txt"]);
sorting.stdout.setEncoding("utf8");
sorting.stdout.on("data", function(sortNames) {
  fs.writeFileSync("sorted-names-list.txt", sortNames);
});
