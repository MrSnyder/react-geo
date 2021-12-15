"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAntdDropdownOptionByText = exports.queryAntdDropdownOption = exports.queryAllAntdDropdownOptionByText = exports.queryAllAntdDropdownOption = exports.getAntdDropdownOptionByText = exports.getAntdDropdownOption = exports.getAllAntdDropdownOptionByText = exports.getAllAntdDropdownOption = exports.findAntdDropdownOptionByText = exports.findAntdDropdownOption = exports.findAllAntdDropdownOptionByText = exports.findAllAntdDropdownOption = void 0;

var _react = require("@testing-library/react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var allAntdDropdownOptionQuery = function allAntdDropdownOptionQuery(container) {
  return container.querySelectorAll('.ant-select-dropdown-option');
};

var allAntdDropdownOptionByTextQuery = function allAntdDropdownOptionByTextQuery(container, text) {
  var dropdowns = Array.from(container.querySelectorAll('.ant-select-dropdown'));
  var options = dropdowns.map(function (dropdown) {
    return (0, _react.queryAllByTitle)(dropdown, text);
  }).reduce(function (acc, val) {
    return val !== null ? acc.concat(val) : acc;
  }, []);
  return options;
};

var multipleError = function multipleError() {
  return 'Found multiple antd dropdown options.';
};

var missingError = function missingError() {
  return 'Unable to find antd dropdown option.';
};

var buildDocumentQueries = function buildDocumentQueries(queryAll, getMultipleError, getMissingError) {
  var _buildQueries = (0, _react.buildQueries)(queryAll, getMultipleError, getMissingError),
      _buildQueries2 = _slicedToArray(_buildQueries, 5),
      query = _buildQueries2[0],
      getAll = _buildQueries2[1],
      get = _buildQueries2[2],
      findAll = _buildQueries2[3],
      find = _buildQueries2[4];

  return [function () {
    return queryAll(document);
  }, function () {
    return query(document);
  }, function () {
    return getAll(document);
  }, function () {
    return get(document);
  }, function () {
    return findAll(document, null);
  }, function () {
    return find(document, null);
  }];
};

var buildDocumentByTextQueries = function buildDocumentByTextQueries(queryAll, getMultipleError, getMissingError) {
  var _buildQueries3 = (0, _react.buildQueries)(queryAll, getMultipleError, getMissingError),
      _buildQueries4 = _slicedToArray(_buildQueries3, 5),
      query = _buildQueries4[0],
      getAll = _buildQueries4[1],
      get = _buildQueries4[2],
      findAll = _buildQueries4[3],
      find = _buildQueries4[4];

  return [function (text) {
    return queryAll(document, text);
  }, function (text) {
    return query(document, text);
  }, function (text) {
    return getAll(document, text);
  }, function (text) {
    return get(document, text);
  }, function (text) {
    return findAll(document, text);
  }, function (text) {
    return find(document, text);
  }];
};

var _buildDocumentQueries = buildDocumentQueries(allAntdDropdownOptionQuery, multipleError, missingError),
    _buildDocumentQueries2 = _slicedToArray(_buildDocumentQueries, 6),
    queryAllAntdDropdownOption = _buildDocumentQueries2[0],
    queryAntdDropdownOption = _buildDocumentQueries2[1],
    getAllAntdDropdownOption = _buildDocumentQueries2[2],
    getAntdDropdownOption = _buildDocumentQueries2[3],
    findAllAntdDropdownOption = _buildDocumentQueries2[4],
    findAntdDropdownOption = _buildDocumentQueries2[5];

exports.findAntdDropdownOption = findAntdDropdownOption;
exports.findAllAntdDropdownOption = findAllAntdDropdownOption;
exports.getAntdDropdownOption = getAntdDropdownOption;
exports.getAllAntdDropdownOption = getAllAntdDropdownOption;
exports.queryAntdDropdownOption = queryAntdDropdownOption;
exports.queryAllAntdDropdownOption = queryAllAntdDropdownOption;

var _buildDocumentByTextQ = buildDocumentByTextQueries(allAntdDropdownOptionByTextQuery, multipleError, missingError),
    _buildDocumentByTextQ2 = _slicedToArray(_buildDocumentByTextQ, 6),
    queryAllAntdDropdownOptionByText = _buildDocumentByTextQ2[0],
    queryAntdDropdownOptionByText = _buildDocumentByTextQ2[1],
    getAllAntdDropdownOptionByText = _buildDocumentByTextQ2[2],
    getAntdDropdownOptionByText = _buildDocumentByTextQ2[3],
    findAllAntdDropdownOptionByText = _buildDocumentByTextQ2[4],
    findAntdDropdownOptionByText = _buildDocumentByTextQ2[5];

exports.findAntdDropdownOptionByText = findAntdDropdownOptionByText;
exports.findAllAntdDropdownOptionByText = findAllAntdDropdownOptionByText;
exports.getAntdDropdownOptionByText = getAntdDropdownOptionByText;
exports.getAllAntdDropdownOptionByText = getAllAntdDropdownOptionByText;
exports.queryAntdDropdownOptionByText = queryAntdDropdownOptionByText;
exports.queryAllAntdDropdownOptionByText = queryAllAntdDropdownOptionByText;