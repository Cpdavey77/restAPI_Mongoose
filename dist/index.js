"use strict";

var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./Routes/index.js"));
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
const PORT = 3000;
const URI = "mongodb://127.0.0.1:27017/newDb";
app.use(_express.default.urlencoded({
  extended: false
}));
app.get("/", _index.default);
try {
  _mongoose.default.connect(URI);
  app.listen(PORT, () => {
    console.log(`Express server started at port ${PORT}`);
  });
} catch (err) {
  console.error(err);
}