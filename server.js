const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const ProjectModel = require('./project-model');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/test');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8081;

const router = express.Router();

router.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

router.get('/', function(req, res) {
  res.json({message: 'hello, world!'});
});

router.route('/projects')
  .post(function(req, res) {
    const project = new ProjectModel();
    project.id = 0;
    project.title = 'Test title';
    project.shortDescription = 'Test short description';
    project.description = 'Test full description';

    project.save(function(err) {
      if (err) {
        res.send(err);
      }

      res.json({message: 'Project has been successfully created!'});
    });
  })
  .get(function(req, res) {
    ProjectModel.find(function(err, project) {
      if (err) {
        res.send(err);
      }

      res.json(project);
    })
  });

router.route('/projects/:project_id')
  .get(function(req, res) {
    ProjectModel.findById(req.params.project_id, function(err, project) {
      if (err) {
        res.send(err);
      }
      res.json(project);
    });
  })
  .put(function(req, res) {
    ProjectModel.findById(req.params.project_id, function(err, project) {
      if (err) {
        res.send(err);
      }

      project.title = 'Updated title';
      project.save(function(err) {
        if (err) {
          res.send(err);
        }

        res.json({message: 'Project has been updates successfully!'});
      });
    });
  })
  .delete(function(req, res) {
    ProjectModel.remove({
      _id: req.params.project_id
    }, function(err, project) {
      if (err) {
        res.send(err);
      }

      res.json({message: 'Project has been removed successfully'})
    });
  });

app.use('/api', router);

app.listen(port);
console.log(`Goto port: ${port}`);