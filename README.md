# Closet Collage

0. Initial page: displays different categories of styles (via tags).
Selection of tags can be edited later through the menu panel.
The selection will be saved to local storage. 
1. Users must log in first in order to post and save posts.
2. Users must upload 4 photos for each collage, which will be added as url.
3. Photos within the collage are editable.
4. Posts can be edited, and deleted, and saved to a user's page.
5. Posts and user data will be saved to databases.
6. Main page: it will load randomised posts whenever the page is loaded, or user hits the refresh button.


# Preview:
https://drive.google.com/file/d/1Wv8KggPDOR9V6ceiAn_LJbCoxIdcxpIe/view?usp=sharing


# Database:
- user: userID, pwd, userName, email, saved posts(array of postIds)
- post: postID, userID, photoIDs, tags, timestamp
- photo: photoId, edits (array), url