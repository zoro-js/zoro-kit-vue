webpackJsonp([1],[
/* 0 */
/*!************************************!*\
  !*** ./src/js/entry/router/api.js ***!
  \************************************/
/***/ function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports.getPost = getPost;\nvar posts = {\n  '1': {\n    id: 1,\n    title: 'sunt aut facere',\n    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'\n  },\n  '2': {\n    id: 2,\n    title: 'qui est esse',\n    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'\n  }\n};\n\nfunction getPost(id, cb) {\n  // fake an API request\n  setTimeout(function () {\n    if (posts[id]) {\n      cb(null, posts[id]);\n    } else {\n      cb(new Error('Post not found.'));\n    }\n  }, 100);\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/entry/router/api.js\n ** module id = 0\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/js/entry/router/api.js?");

/***/ }
]);