let isConnected = false;
const mongoose = require('mongoose');
module.exports = {
    connect: () => connect(),
    mongoTypes: () => mongoose.Types
}
const connect = () => {
    if (isConnected) return;
    mongoose.connect(
        'mongodb+srv://honey:honey123@sharedcluster-ea4go.mongodb.net/ToDo?retryWrites=true'
        , {
            useNewUrlParser: true
        }
    );
    isConnected = true;
}
