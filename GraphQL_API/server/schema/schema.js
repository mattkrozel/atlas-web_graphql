const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString },
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

module.exports = schema;