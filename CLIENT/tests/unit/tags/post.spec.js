import postTemp from '@/utils/postTemp.js';
import { error } from "console";
import _ from 'lodash';

const post = {
    "userID": "63701f6fff6669360a22403b",
    "tag": "y2k",
    "photos": [
        {
            "order": 0,
            "url": "https://images.onthelook.co.kr/pr/hH8LA8RLRtwLUm6FcyPR5s.jpeg?w=600&q=60&f=webp",
            "imageEdits": {
                brightness: 0,
                contrast: 1,
                saturation: 0
            }
        },
        {
            "order": 1,
            "url": "https://image.msscdn.net/images/goods_img/20220627/2634748/2634748_1_320.jpg",
            "imageEdits": {
                brightness: 1,
                contrast: 1,
                saturation: -1
            }
        },
        {
            "order": 2,
            "url": "http://acubi-club.kr/web/product/big/202203/10bd489c547ac67dcf1b339b776da6a0.jpg",
            "imageEdits": {
                brightness: 0,
                contrast: 0,
                saturation: 1
            }
        },
        {
            "order": 3,
            "url": "https://image.msscdn.net/images/goods_img/20220930/2832398/2832398_1_320.jpg",
            "imageEdits": {
                brightness: 0,
                contrast: 0,
                saturation: 1
            }
        }
    ]
}

describe('Test for the tagging system used with localstorage', () => {
    it('Tests if post object data was stored correctly', () =>{
        postTemp.savePostData(post, 'post1');
        // console.log(`comparison: ${_.isEqual(postTemp.loadPostData('post1'), post)}`);
        expect(_.isEqual(postTemp.loadPostData('post1'), post)).toEqual(true);
    });
    it('Tests if post object data was deleted correctly', () =>{
        // error(`post: ${post}`);
        postTemp.deletePostData('post2');
        expect(postTemp.loadPostData('post2')).toEqual(null);
    });
    it('Tests if checkIfSaved() function works', () =>{
        postTemp.savePostData(post, 'post3');
        expect(postTemp.checkIfSaved('post3')).toEqual(true);
        postTemp.deletePostData('post3');
        expect(postTemp.checkIfSaved('post3')).toEqual(false);
    });
});