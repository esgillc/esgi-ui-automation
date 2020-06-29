"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _through = _interopRequireDefault(require("through2"));

var _gulpUtil = _interopRequireDefault(require("gulp-util"));

var _cli = _interopRequireDefault(require("@wdio/cli"));

var shell = require('shelljs');

var fs = require('fs');

shell.mkdir('-p', 'screenshots', 'errorshots', 'reports/custom-report');

function writeToFile(item) {
  var stream = fs.createWriteStream('./reports/custom-report/TestRunReport.txt', {
    flags: 'a'
  });
  stream.write(item + '\n');
  stream.end();
}

writeToFile('\nESGI UI AUTOMATION RESULTS');
writeToFile("DATE: ".concat(new Date().toISOString()));

module.exports = function (options) {
  return _through["default"].obj( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(file, encoding, callback) {
      var stream, wdio, code;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              stream = this;
              wdio = new _cli["default"](file.path, options);
              _context.prev = 2;
              _context.next = 5;
              return wdio.run();

            case 5:
              code = _context.sent;
              process.stdin.pause();

              if (code !== 0) {
                process.nextTick(function () {
                  return stream.emit('error', new _gulpUtil["default"].PluginError('gulp-webdriver', "wdio exited with code ".concat(code), {
                    showStack: true
                  }));
                });
              }

              process.nextTick(function () {
                return stream.emit('end');
              });
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              process.stdin.pause();
              process.nextTick(function () {
                return stream.emit('error', new _gulpUtil["default"].PluginError('gulp-webdriver', _context.t0, {
                  showStack: true
                }));
              });

            case 15:
              return _context.abrupt("return", stream);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[2, 11]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
};