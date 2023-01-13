import userTemp from '@/utils/userTemp.js';
import { error } from "console";
import _ from 'lodash';
import testsHelper from '../testsHelper';

const user = testsHelper.returnUser();

describe('Test for the temporal user data storage system used with localstorage', () => {
    it('Tests if user object data was stored correctly', () =>{
        userTemp.saveUserData(user, 'user1');
        // console.log(`comparison: ${_.isEqual(postTemp.loadPostData('post1'), post)}`);
        expect(_.isEqual(userTemp.loadUserData('user1'), user)).toEqual(true);
    });
    it('Tests if user object data was deleted correctly', () =>{
        // error(`post: ${post}`);
        userTemp.deleteUserData('user2');
        expect(userTemp.loadUserData('user2')).toEqual({});
    });
    it('Tests if checkIfSaved() function works', () =>{
        userTemp.saveUserData(user, 'user3');
        expect(userTemp.checkIfSaved('user3')).toEqual(true);
        userTemp.deleteUserData('user3');
        expect(userTemp.checkIfSaved('user3')).toEqual(false);
    });
});