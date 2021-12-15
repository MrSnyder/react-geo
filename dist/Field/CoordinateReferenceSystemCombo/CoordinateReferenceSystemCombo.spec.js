"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _react = require("@testing-library/react");

var React = _interopRequireWildcard(require("react"));

var _jestFetchMock = require("jest-fetch-mock");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _CoordinateReferenceSystemCombo = _interopRequireDefault(require("../CoordinateReferenceSystemCombo/CoordinateReferenceSystemCombo"));

var _antdTestQueries = require("../../Util/antdTestQueries");

var _rtlTestUtils = require("../../Util/rtlTestUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('<CoordinateReferenceSystemCombo />', function () {
  var resultMock = {
    status: 'ok',
    // eslint-disable-next-line camelcase
    number_result: 1,
    results: [{
      code: '31466',
      bbox: [53.81, 5.86, 49.11, 7.5],
      // eslint-disable-next-line max-len
      proj4: '+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs',
      name: 'DHDN / 3-degree Gauss-Kruger zone 2'
    }, {
      code: '4326',
      bbox: [90, -180, -90, 180],
      proj4: '+proj=longlat +datum=WGS84 +no_defs',
      name: 'WGS 84'
    }]
  };
  var transformedResults = [{
    code: '31466',
    bbox: [53.81, 5.86, 49.11, 7.5],
    // eslint-disable-next-line max-len
    proj4def: '+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs',
    value: 'DHDN / 3-degree Gauss-Kruger zone 2'
  }, {
    code: '4326',
    bbox: [90, -180, -90, 180],
    proj4def: '+proj=longlat +datum=WGS84 +no_defs',
    value: 'WGS 84'
  }];
  beforeAll(function () {
    (0, _jestFetchMock.enableFetchMocks)();
    fetch.mockResponse(JSON.stringify(resultMock));
  });
  it('is defined', function () {
    expect(_CoordinateReferenceSystemCombo["default"]).not.toBeUndefined();
  });
  it('can be rendered', function () {
    var _render = (0, _react.render)( /*#__PURE__*/React.createElement(_CoordinateReferenceSystemCombo["default"], null)),
        container = _render.container;

    expect(container).toBeVisible();
  });
  describe('search', function () {
    it('sends a request with searchTerm', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var url, combobox;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = 'http://test.url';
              (0, _react.render)( /*#__PURE__*/React.createElement(_CoordinateReferenceSystemCombo["default"], {
                crsApiUrl: url
              }));
              combobox = _react.screen.getByRole('combobox');

              _userEvent["default"].type(combobox, '25832');

              _context.next = 6;
              return (0, _rtlTestUtils.actSetTimeout)(0);

            case 6:
              expect(fetch).toBeCalled();
              expect(fetch).toBeCalledWith("".concat(url, "?format=json&q=25832"));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
  describe('shows correct options', function () {
    it('creates options if result was not empty', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var combobox, _iterator, _step, result, option;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              (0, _react.render)( /*#__PURE__*/React.createElement(_CoordinateReferenceSystemCombo["default"], null));
              combobox = _react.screen.getByRole('combobox');

              _userEvent["default"].type(combobox, 'a');

              _iterator = _createForOfIteratorHelper(resultMock.results);
              _context2.prev = 4;

              _iterator.s();

            case 6:
              if ((_step = _iterator.n()).done) {
                _context2.next = 14;
                break;
              }

              result = _step.value;
              _context2.next = 10;
              return (0, _antdTestQueries.findAntdDropdownOptionByText)("".concat(result.name, " (EPSG:").concat(result.code, ")"));

            case 10:
              option = _context2.sent;
              // would be nicer to test for `toBeVisible`, but antd seems to be in the way
              expect(option).toBeInTheDocument();

            case 12:
              _context2.next = 6;
              break;

            case 14:
              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](4);

              _iterator.e(_context2.t0);

            case 19:
              _context2.prev = 19;

              _iterator.f();

              return _context2.finish(19);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 16, 19, 22]]);
    })));
    it('does not show options for empty results', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var combobox;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              fetch.mockResponseOnce(JSON.stringify({
                status: 'ok',
                'number_result': 0,
                results: []
              }));
              (0, _react.render)( /*#__PURE__*/React.createElement(_CoordinateReferenceSystemCombo["default"], null));
              combobox = _react.screen.getByRole('combobox');

              _userEvent["default"].type(combobox, 'a');

              _context3.next = 6;
              return (0, _rtlTestUtils.actSetTimeout)(50);

            case 6:
              expect((0, _antdTestQueries.queryAntdDropdownOption)()).not.toBeInTheDocument();

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
  describe('error handling', function () {
    it('logs error message', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var loggerSpy, combobox;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              fetch.mockRejectOnce('Peter');
              loggerSpy = jest.spyOn(_Logger["default"], 'error');
              (0, _react.render)( /*#__PURE__*/React.createElement(_CoordinateReferenceSystemCombo["default"], null));
              combobox = _react.screen.getByRole('combobox');

              _userEvent["default"].type(combobox, 'a');

              _context4.next = 7;
              return (0, _react.waitFor)(function () {
                expect(loggerSpy).toHaveBeenCalled();
              });

            case 7:
              expect(loggerSpy).toHaveBeenCalledWith('Error while requesting in CoordinateReferenceSystemCombo: Peter');
              loggerSpy.mockRestore();

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
  describe('option clicks are handled correctly', function () {
    it('calls the onSelect callback with the correct value', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var onSelect, combobox, result, expected, option;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              onSelect = jest.fn();
              (0, _react.render)( /*#__PURE__*/React.createElement(_CoordinateReferenceSystemCombo["default"], {
                onSelect: onSelect
              }));
              combobox = _react.screen.getByRole('combobox');

              _userEvent["default"].type(combobox, 'a');

              result = resultMock.results[0];
              expected = transformedResults[0];
              _context5.next = 8;
              return (0, _antdTestQueries.findAntdDropdownOptionByText)("".concat(result.name, " (EPSG:").concat(result.code, ")"));

            case 8:
              option = _context5.sent;

              // we have to use fireEvent directly instead of `userEvent.click()` because antd is in the way
              _react.fireEvent.click(option);

              _context5.next = 12;
              return (0, _react.waitFor)(function () {
                expect(onSelect).toBeCalledWith(expected);
              });

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    it('sets the value of the combobox to the correct value', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      var onSelect, combobox, result, option;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              onSelect = jest.fn();
              (0, _react.render)( /*#__PURE__*/React.createElement(_CoordinateReferenceSystemCombo["default"], {
                onSelect: onSelect
              }));
              combobox = _react.screen.getByRole('combobox');

              _userEvent["default"].type(combobox, 'a');

              result = resultMock.results[0];
              _context6.next = 7;
              return (0, _antdTestQueries.findAntdDropdownOptionByText)("".concat(result.name, " (EPSG:").concat(result.code, ")"));

            case 7:
              option = _context6.sent;

              // we have to use fireEvent directly instead of `userEvent.click()` because antd is in the way
              _react.fireEvent.click(option);

              _context6.next = 11;
              return (0, _react.waitFor)(function () {
                expect(combobox).toHaveValue("".concat(result.name, " (EPSG:").concat(result.code, ")"));
              });

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
  });
});