const _ = require('lodash');
const graphql = require('graphql');
const mongoose = require('mongoose');
const Project = require('../models/task');
const Task = require('../models/task');
const { GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLSchema, GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql');



const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString },
        project: {
            type: ProjectType,
            resolve: (parent, args) => {
              return Project.findbyId(parent.projectId);
            }
        }
    })
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields : {
    task: {
      type: TaskType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
      }
    }
  }
});

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields : () => ({
      id: { type: graphql.GraphQLID },
      title: { type: GraphQLString },
      weight: { type: GraphQLInt },
      description: { type: GraphQLString },
      tasks: {
        type: new graphql.GraphQLList(TaskType),
        resolve: (parent, args) => {
          return Task.find({ projectId: parent.id });
        }
      }
    })
  });

module.exports = schema;