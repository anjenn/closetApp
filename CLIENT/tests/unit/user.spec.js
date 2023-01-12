import userTemp from '@/utils/userTemp.js';
import { error } from "console";
import _ from 'lodash';

const user = {
    "firstName":"Shelby",
    "lastName":"Talldown",
    "password":"afjlskdfj8",
    "userName":"Sh0822",
    "savedPosts": "637024e6ff6669360a224046",
    "id":"63701f6fff6669360a22403b"
}

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