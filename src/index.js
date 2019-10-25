const mongoose = require('mongoose');

const User = new mongoose.model('user', {
    name: {
        type: String,
        require: true
    }
});

async function saveMe() {
    const me = new User({ name: 'Mahan' });
    await me.save();
}

module.exports = {
    saveMe,
    User
};

