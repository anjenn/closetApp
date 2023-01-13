import postTemp from '@/utils/postTemp.js';
import { error } from "console";
import _ from 'lodash';
import testsHelper from '../testsHelper';

const post = testsHelper.returnPost();

describe('Test for the temporal post data storage system used with localstorage', () => {
    it('Tests if post object data was stored correctly', () =>{
        console.log("Test Suite 1: tests if post object data was stored correctly");
        postTemp.savePostData(post, 'post1');
        // console.log(`comparison: ${_.isEqual(postTemp.loadPostData('post1'), post)}`);
        expect(_.isEqual(postTemp.loadPostData('post1'), post)).toEqual(true);
    });
    it('Tests if post object data was deleted correctly', () =>{
        console.log("Test Suite 2: tests if post object data was deleted correctly");
        // error(`post: ${post}`);
        postTemp.deletePostData('post2');
        expect(postTemp.loadPostData('post2')).toEqual(null);
    });
    it('Tests if checkIfSaved() function works', () =>{
        console.log("Test Suite 3: tests if checkIfSaved() function works");
        postTemp.savePostData(post, 'post3');
        expect(postTemp.checkIfSaved('post3')).toEqual(true);
        postTemp.deletePostData('post3');
        expect(postTemp.checkIfSaved('post3')).toEqual(false);
    });
});