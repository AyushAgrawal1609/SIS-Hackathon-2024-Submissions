const mongoose  = require("mongoose");
const dbUri = "mongodb+srv://myuser:myuser@employee.n3nlvkh.mongodb.net/?retryWrites=true&w=majority&appName=Employee";
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("connected");
    })
    .catch((err) => console.log(err));


