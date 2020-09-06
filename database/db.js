const mongoose = require('mongoose');
const connection = "mongodb+srv://omoruyiohuoba:omoruyiohuoba@tatafoblogcluster.tuh7f.mongodb.net/THE-TATAFO-BLOG?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));