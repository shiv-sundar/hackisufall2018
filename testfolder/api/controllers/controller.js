'use strict';

var mongoose = require('mongoose'),
  Source = mongoose.model('Source');

exports.listChain = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_sourceBlock = function(req, res) {
	var newSource = new Source(req.body);

	newSource.save(function(err, task){
		if(err)
			res.send(err);
		res.json(task);
	});
};
