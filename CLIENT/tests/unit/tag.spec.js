import Tags from '@/utils/Tags.js';
import { error } from "console";

const arr = [
    "tomboy",
    "retro",
    "streetwear",
    "punk",
    "casual",
    "y2k",
    "formal",
    "gothic",
    "sporty",
    "girly"
];

describe('Test for the tagging system used with localstorage', () => {
    it('Tests if tag array was saved correctly', () =>{
        // error(`arr: ${arr}`)
        Tags.saveTags(arr, 'tags');
        expect(Tags.loadTags('tags')).toEqual(arr);
    });
    it('Tests if tag array was deleted correctly', () =>{
        Tags.deleteTags('tags');
        expect(Tags.loadTags('tags')).toEqual(null);
    });
    it('Tests if tag array was fetched correctly', () =>{
        expect(Tags.fetchTagsArray()).toEqual(arr);
    });
});