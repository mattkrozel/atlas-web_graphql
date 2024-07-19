const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});

const connectionString = 'mongodb+srv://guest:guest@cluster0.wji5iwx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('connected to database');
});
