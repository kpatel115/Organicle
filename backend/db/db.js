
//Connect to Mongo DB Cluster using Mongoose

mongoose.connect('mongodb+srv://kpatel114:c7myDZGk2ExHye2L@organicle-cluster.wsarhqp.mongodb.net/?retryWrites=true&w=majority&appName=Organicle-Cluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
  