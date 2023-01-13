exports.returnTags = () => {
  return [
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
}
exports.returnPost = () => {
  return {
    "userID": "testUser",
    "tag": "testTag",
    "photos": [
        {
            "order": 0,
            "url": "testUrl1",
            "imageEdits": {
                brightness: 0,
                contrast: 1,
                saturation: 0
            }
        },
        {
            "order": 1,
            "url": "testUrl2",
            "imageEdits": {
                brightness: 1,
                contrast: 1,
                saturation: -1
            }
        },
        {
            "order": 2,
            "url": "testUrl3",
            "imageEdits": {
                brightness: 0,
                contrast: 0,
                saturation: 1
            }
        },
        {
            "order": 3,
            "url": "testUrl4",
            "imageEdits": {
                brightness: 0,
                contrast: 0,
                saturation: 1
            }
        }
    ]
  };
}

exports.returnUser = () => {
  return {
    "firstName": "testFirst",
    "lastName": "testLast",
    "password": "testPw",
    "userName": "testUser",
    "savedPosts": [
        "null"
    ]
  };
}