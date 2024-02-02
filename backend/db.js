const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });
const mongoURI = process.env.REACT_APP_MONGO_CONNECTION

const mongoDB = async() => {
    await mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected Successfully')
        const fetched_data = mongoose.connection.db.collection('food_items');
        fetched_data.find({}).toArray().then(async function(data, err) {
            const foodCategory = await mongoose.connection.db.collection('foodCategory');
            foodCategory.find({}).toArray().then(function (catData, err) {
                if(err) {
                    console.log(err);
                }else {
                    global.food_items = data;
                    global.foodCategory = catData;
                }
            })
            // if(err) {
            //     console.log(err);
            // }else {
            //     global.food_items = data;
            // }
        })
    })
    .catch((err) => { console.error(err); });
}


module.exports = mongoDB;