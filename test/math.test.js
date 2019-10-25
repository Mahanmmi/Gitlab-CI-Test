const { sum } = require('../src/math');
const { User, saveMe } = require('../src/index');

beforeEach(async () => {
    await User.deleteMany();
})

test('Sum test', () => {
    expect(sum(1, 2)).toBe(3);
});

test('DB test', async () => {
    await saveMe();
    const me = await User.findOne({});
    expect(me.name).toBe("Mahan");
});