const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://dbGofood:Gofood@gofoodcluster.gjuva5s.mongodb.net/gofooddb?retryWrites=true&w=majority'

const mongoDB = async() => {
    await mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected Successfully')
        const fetched_data = mongoose.connection.db.collection('food_items');
        fetched_data.find({}).toArray().then(function(data, err) {
            if(err) {
                console.log(err);
            }else {
                // console.log(data);
            }
        })
    })
    .catch((err) => { console.error(err); });
}


module.exports = mongoDB;