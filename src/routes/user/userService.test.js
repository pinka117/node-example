import Mockingoose from 'mockingoose';
import { createUser } from "./userService.js";

const mockingoose=Mockingoose.default;

test('Create duplicate user', async () => {
    const _doc = {
        _id: '507f191e810c19729de860ea',
        name: 'name',
        email: 'name@email.com',
        surname : 'a',
        password: 'a'
    };

    mockingoose.User.toReturn(_doc, 'findOne');

    const createUserPromise = async () => {
        await createUser('name@email.com',
            'name',
            'a',
            'a')
    };
    await expect(createUserPromise).rejects.toThrow();

});

test('Create correct user', async () => {
    mockingoose.User.toReturn(undefined, 'findOne');

    const createUserPromise = async () => {
        await createUser('name@email.com',
            'name',
            'a',
            'a')
    };
    await createUserPromise();

});