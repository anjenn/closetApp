// module.exports = {
//   url: "mongodb://localhost:27017/jeonghyun_db",
// };

const { mongoose } = require("../models");

mongoose.connect(
  "mongodb://localhost:27017/jeonghyun_db",
  { useNewUrlPaser: true },
  (err) => {
    if (!err) {
      console.log("Connection succeeded");
    } else {
      console.log("Error in Connection" + err);
    }
  }
);

require("../models/post.model");
