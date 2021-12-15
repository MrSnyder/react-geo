"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

var React = _interopRequireWildcard(require("react"));

var _ol = require("ol");

var _get2 = _interopRequireDefault(require("lodash/get"));

var _constants = require("../../constants");

require("./PropertyGrid.less");

var _excluded = ["className", "feature"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Class representing a feature grid showing the attribute values of a simple feature.
 *
 * @class PropertyGrid
 * @extends React.Component
 */
var PropertyGrid = /*#__PURE__*/function (_React$Component) {
  _inherits(PropertyGrid, _React$Component);

  var _super = _createSuper(PropertyGrid);

  /**
   * The CSS-className added to this component.
   * @private
   */

  /**
   * The constructor.
   *
   * @param props The initial props.
   */
  function PropertyGrid(props) {
    var _this;

    _classCallCheck(this, PropertyGrid);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "className", "".concat(_constants.CSS_PREFIX, "propertygrid"));

    var feature = props.feature,
        attributeFilter = props.attributeFilter,
        attributeNames = props.attributeNames,
        attributeNameColumnWidthInPercent = props.attributeNameColumnWidthInPercent;

    var _this$generatePropert = _this.generatePropertyGrid({
      feature: feature,
      attributeFilter: attributeFilter,
      attributeNames: attributeNames,
      attributeNameColumnWidthInPercent: attributeNameColumnWidthInPercent
    }),
        dataSource = _this$generatePropert.dataSource,
        columns = _this$generatePropert.columns;

    _this.state = {
      dataSource: dataSource,
      columns: columns
    };
    return _this;
  }
  /**
   * Initialize data store and column definitions of table
   *
   * @param feature feature to display
   * @param attributeFilter Array of string values to filter the grid rows
   * @param attributeNames Object containing mapping of attribute names names in feature to custom ones
   * @param attributeNameColumnWidthInPercent Column width (in percent)
   */


  _createClass(PropertyGrid, [{
    key: "generatePropertyGrid",
    value: function generatePropertyGrid(_ref) {
      var feature = _ref.feature,
          attributeFilter = _ref.attributeFilter,
          attributeNames = _ref.attributeNames,
          attributeNameColumnWidthInPercent = _ref.attributeNameColumnWidthInPercent;

      if (!attributeFilter) {
        attributeFilter = feature.getKeys().filter(function (attrName) {
          return attrName !== 'geometry';
        });
      }

      var dataSource = attributeFilter.map(function (attr) {
        var fid = (0, _ol.getUid)(feature);
        var rowObj = {
          attributeName: attributeNames && (0, _get2["default"])(attributeNames, attr) ? (0, _get2["default"])(attributeNames, attr) : attr,
          attributeValue: feature.get(attr),
          key: "ATTR_".concat(attr, "_fid_").concat(fid)
        };
        return rowObj;
      });
      var columns = [{
        title: this.props.attributeNameColumnTitle,
        dataIndex: 'attributeName',
        key: 'attributeName',
        width: "".concat(attributeNameColumnWidthInPercent, "%")
      }, {
        title: this.props.attributeValueColumnTitle,
        dataIndex: 'attributeValue',
        key: 'attributeValue',
        width: "".concat(100 - attributeNameColumnWidthInPercent, "%")
      }];
      return {
        dataSource: dataSource,
        columns: columns
      };
    }
    /**
     * The render function.
     *
     * @return The element.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          feature = _this$props.feature,
          passThroughProps = _objectWithoutProperties(_this$props, _excluded);

      var _this$state = this.state,
          columns = _this$state.columns,
          dataSource = _this$state.dataSource;
      var finalClassName = className ? "".concat(className, " ").concat(this.className) : this.className;
      return /*#__PURE__*/React.createElement(_table["default"], _extends({
        className: finalClassName,
        rowKey: function rowKey(record) {
          return record.key;
        },
        dataSource: dataSource,
        columns: columns,
        pagination: false,
        scroll: {
          y: 250
        }
      }, passThroughProps));
    }
  }]);

  return PropertyGrid;
}(React.Component);

_defineProperty(PropertyGrid, "defaultProps", {
  attributeNameColumnTitle: 'Attribute name',
  attributeNameColumnWidthInPercent: 50,
  attributeValueColumnTitle: 'Attribute value'
});

var _default = PropertyGrid;
exports["default"] = _default;