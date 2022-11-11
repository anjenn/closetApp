# App pages description

- Initialisation: User can select the tags (styles of clothing) they like, and proceed to the Feed without log in. There is no internal redirection to come back to this page once user leaves this page, but tags selection can still be modified via toolbar
- Log In & Sign Up: required for user to access 'My Page' or 'like (save)' & edit features in the Feed. Selection of tags is resetted when user reaches this page
- Feed: it loads randomised selection of 9 post cards (along with a tag, and 4 photos assembled in a collage) whenever the page is reloaded, or the 'refresh' button has been hit, the posts shall match the user's selection of tags. Users may only edit the posts that belong to them, but save any post here. The posts selection will be reloaded whenever user likes, or unlikes any post.
- Post Editor: User can either create a new post, or edit existing posts. All field of url, and tag must be filled in order to save the post. In the editor mode, user can change the brightness, saturation, and contrast of each image.
- My Page: Only logged in users can access this page. Here, user can log out of the session, or permanantly delete their account. Also, all post that are created and saved can also be seen here.

# Preview:
https://drive.google.com/file/d/1Ad45y3TeSRsuuOEn7YK5z-0D1sYK2dLP/view?usp=sharing

# Database:
- user: (ID), firstName, lastName, password, userName, savedPosts[{postIDs}]
--> {
    "firstName": "JeongHyun",
    "lastName": "An",
    "password": "abc12345",
    "userName": "Jenn",
    "savedPosts": [
        "6357ec9a4f47830e941ed0a6",
        "6357ff334f47830e941ed0aa",
        "6357ff4ef3570dc984b5ec24"
    ],
    "id": "635820a640d88fdcda137cb5"
}

- post: (ID), userID, tag, photos[{order, url, imageEdits[]}], timestamps, id
--> {
        "userID": 4,
        "tag": "tag1",
        "photos": [
            {
                "order": 1,
                "url": "url1",
                "imageEdits": [
                    0,
                    1,
                    4
                ],
                "_id": "6357ff4ef3570dc984b5ec25"
            }
        ],
        "createdAt": "2022-10-25T15:22:54.543Z",
        "updatedAt": "2022-10-25T15:22:54.543Z",
        "id": "6357ff4ef3570dc984b5ec24"
    }

# To-do list:
// Fixing *My Page*
- Add dialog for account deletion & log out
- Modify the placeloader image for image loading failure
- link pagination & posts
- make it possible to load max 16 posts per page, and 
- create a pop up when user clicks a post? -> that shows the collage in a bigger scale 
- make buttons apppear when user hovers over a post


// other ideas
- Change font (ex. make small text not bold nor capitalised in *Log In* page)
- do sth with timestamps?
- In the end, check if all redirection works correctly, and delete navigation bar
