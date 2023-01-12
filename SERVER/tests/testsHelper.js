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
    "userID": "test_user",
    "tag": "test_tag",
    "photos": [
        {
            "order": 0,
            "url": "test_url_1",
            "imageEdits": {
                brightness: 0,
                contrast: 1,
                saturation: 0
            }
        },
        {
            "order": 1,
            "url": "test_url_2",
            "imageEdits": {
                brightness: 1,
                contrast: 1,
                saturation: -1
            }
        },
        {
            "order": 2,
            "url": "test_url_3",
            "imageEdits": {
                brightness: 0,
                contrast: 0,
                saturation: 1
            }
        },
        {
            "order": 3,
            "url": "test_url_4",
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
    "firstName": "test_first",
    "lastName": "test_last",
    "password": "test_pw",
    "userName": "test_user",
    "savedPosts": [
        "null"
    ]
  };
}