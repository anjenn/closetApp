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
- user: (userID), userName, password, email, savedPosts[] (postIds), 
- post: (postID), userID, photoIDs[], tag (only one), timestamp
- photo: (photoId), postID, order, url, edits (array)

# User page:
- user's own posts: retrieved via post db controller function
- user's saved posts: retrieved by posts with the matching id in the likedBy array field as the user Id