var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

var Random = require("random-js");
var random = new Random(Random.engines.mt19937().autoSeed());
var value = random.integer(1, 100);

app.get('/',function(req,res) {
  res.send(random.mood());
});

app.listen(3000,function() {
  console.log("Accepting HTTP");
});


function MyRandom(engine) {
  return Random.call(this, engine);
}
MyRandom.prototype = Object.create(Random.prototype);
MyRandom.prototype.constructor = MyRandom;
MyRandom.prototype.mood = function () {
  var data;
  var tab = [];
  for(var i = 0 ; i < 3 ; i++ ) {
  switch (this.integer(0, 4)) {
    case 0: data = " Today i am been programming RES and it makes me very Happy. ";
    case 1: data = " Today i was planning on studying it made me very Content. ";
    case 2: data = " I don't like this course and it makes me very Sad. ";
    case 3: data = " I don't like HEIG-VD , too much work ";
    case 4: data = " Sir Liechti is very good professor ";
  }
    var words = ['Rock', 'Paper', 'Scissors'];
    var word = words[Math.floor(Math.random() * words.length - 1)];

  var finalData = word +  data;
  tab.push({finalData});
}
return tab;
}
var random = new MyRandom();
