const mongoose = require('mongoose');
const { User, saveMe } = require('../src/index');

beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
});

afterAll(async () => {
    await mongoose.disconnect();
})

beforeEach(async () => {
    await User.deleteMany({});
});

test('DB test', async () => {
    await saveMe();
    const me = await User.findOne({});
    expect(me.name).toBe("Mahan");
});