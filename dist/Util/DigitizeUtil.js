"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DigitizeUtil = void 0;

var _Style = _interopRequireDefault(require("ol/style/Style"));

var _Circle = _interopRequireDefault(require("ol/style/Circle"));

var _Fill = _interopRequireDefault(require("ol/style/Fill"));

var _Stroke = _interopRequireDefault(require("ol/style/Stroke"));

var _Text = _interopRequireDefault(require("ol/style/Text"));

var _Vector = _interopRequireDefault(require("ol/layer/Vector"));

var _Vector2 = _interopRequireDefault(require("ol/source/Vector"));

var _Collection = _interopRequireDefault(require("ol/Collection"));

var _MapUtil = _interopRequireDefault(require("@terrestris/ol-util/dist/MapUtil/MapUtil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DigitizeUtil = /*#__PURE__*/function () {
  function DigitizeUtil() {
    _classCallCheck(this, DigitizeUtil);
  }

  _createClass(DigitizeUtil, null, [{
    key: "getDigitizeLayer",
    value:
    /**
     * Default fill color used in style object of drawn features.
     */

    /**
     * Default stroke color used in style object of drawn features.
     */

    /**
     * Default style for digitized points.
     */

    /**
     * Default style for digitized lines.
     */

    /**
     * Default style for digitized polygons or circles.
     */

    /**
     * Default style for digitized labels.
     */

    /**
     * This function gets the standard react geo digitize layer and creates it if it does not exist.
     * If another layer should be used, the layer property of the respective button should be used.
     * By default the digitize layer is styled via {@link DigitizeUtil.defaultDigitizeStyleFunction},
     * if another style is desired either use another layer or set the style of the digitize layer
     * via `setStyle`.
     *
     * @param map
     */
    function getDigitizeLayer(map) {
      var digitizeLayer = _MapUtil["default"].getLayerByName(map, DigitizeUtil.DIGITIZE_LAYER_NAME);

      if (!digitizeLayer) {
        digitizeLayer = new _Vector["default"]({
          source: new _Vector2["default"]({
            features: new _Collection["default"]()
          }),
          properties: {
            name: DigitizeUtil.DIGITIZE_LAYER_NAME
          }
        });
        digitizeLayer.setStyle(DigitizeUtil.defaultDigitizeStyleFunction);
        map.addLayer(digitizeLayer);
      }

      return digitizeLayer;
    }
    /**
     * The styling function for the digitize vector layer, which considers
     * different geometry types of drawn features.
     *
     * @param feature The feature which is being styled.
     * @return The style to use.
     */

  }, {
    key: "defaultDigitizeStyleFunction",
    value: function defaultDigitizeStyleFunction(feature) {
      if (!feature.getGeometry()) {
        return null;
      }

      switch (feature.getGeometry().getType()) {
        case 'MultiPoint':
        case 'Point':
          {
            if (!feature.get('isLabel')) {
              return new _Style["default"]({
                image: new _Circle["default"]({
                  radius: 7,
                  fill: new _Fill["default"]({
                    color: DigitizeUtil.DEFAULT_FILL_COLOR
                  }),
                  stroke: new _Stroke["default"]({
                    color: DigitizeUtil.DEFAULT_STROKE_COLOR
                  })
                })
              });
            } else {
              return new _Style["default"]({
                text: new _Text["default"]({
                  text: feature.get('label'),
                  offsetX: 5,
                  offsetY: 5,
                  font: '12px sans-serif',
                  fill: new _Fill["default"]({
                    color: DigitizeUtil.DEFAULT_FILL_COLOR
                  }),
                  stroke: new _Stroke["default"]({
                    color: DigitizeUtil.DEFAULT_STROKE_COLOR
                  })
                })
              });
            }
          }

        case 'MultiLineString':
        case 'LineString':
          {
            return new _Style["default"]({
              stroke: new _Stroke["default"]({
                color: DigitizeUtil.DEFAULT_STROKE_COLOR,
                width: 2
              })
            });
          }

        case 'MultiPolygon':
        case 'Polygon':
        case 'Circle':
          {
            return new _Style["default"]({
              fill: new _Fill["default"]({
                color: DigitizeUtil.DEFAULT_FILL_COLOR
              }),
              stroke: new _Stroke["default"]({
                color: DigitizeUtil.DEFAULT_STROKE_COLOR,
                width: 2
              })
            });
          }

        default:
          return null;
      }
    }
    /**
     * This functions creates a select style with some default values from fill and stroke colors.
     * This can be used as a style function for an OpenLayers layer or feature.
     *
     * @param selectFillColor
     * @param selectStrokeColor
     */

  }, {
    key: "selectStyleFunction",
    value: function selectStyleFunction(selectFillColor, selectStrokeColor) {
      return function (feature) {
        var _feature$get;

        var text = (_feature$get = feature.get('label')) !== null && _feature$get !== void 0 ? _feature$get : '';
        return new _Style["default"]({
          image: new _Circle["default"]({
            radius: 7,
            fill: new _Fill["default"]({
              color: selectFillColor
            }),
            stroke: new _Stroke["default"]({
              color: selectStrokeColor
            })
          }),
          text: new _Text["default"]({
            text: text,
            offsetX: 5,
            offsetY: 5,
            font: '12px sans-serif',
            fill: new _Fill["default"]({
              color: selectFillColor
            }),
            stroke: new _Stroke["default"]({
              color: selectStrokeColor
            })
          }),
          stroke: new _Stroke["default"]({
            color: selectStrokeColor,
            width: 2
          }),
          fill: new _Fill["default"]({
            color: selectFillColor
          })
        });
      };
    }
  }]);

  return DigitizeUtil;
}();

exports.DigitizeUtil = DigitizeUtil;

_defineProperty(DigitizeUtil, "DEFAULT_FILL_COLOR", 'rgba(154, 26, 56, 0.5)');

_defineProperty(DigitizeUtil, "DEFAULT_STROKE_COLOR", 'rgba(154, 26, 56, 0.8)');

_defineProperty(DigitizeUtil, "DEFAULT_POINT_STYLE", new _Style["default"]({
  image: new _Circle["default"]({
    radius: 7,
    fill: new _Fill["default"]({
      color: DigitizeUtil.DEFAULT_FILL_COLOR
    }),
    stroke: new _Stroke["default"]({
      color: DigitizeUtil.DEFAULT_STROKE_COLOR
    })
  })
}));

_defineProperty(DigitizeUtil, "DEFAULT_LINESTRING_STYLE", new _Style["default"]({
  stroke: new _Stroke["default"]({
    color: DigitizeUtil.DEFAULT_STROKE_COLOR,
    width: 2
  })
}));

_defineProperty(DigitizeUtil, "DEFAULT_POLYGON_STYLE", new _Style["default"]({
  fill: new _Fill["default"]({
    color: DigitizeUtil.DEFAULT_FILL_COLOR
  }),
  stroke: new _Stroke["default"]({
    color: DigitizeUtil.DEFAULT_STROKE_COLOR,
    width: 2
  })
}));

_defineProperty(DigitizeUtil, "DEFAULT_TEXT_STYLE", new _Style["default"]({
  text: new _Text["default"]({
    text: '',
    offsetX: 5,
    offsetY: 5,
    font: '12px sans-serif',
    fill: new _Fill["default"]({
      color: DigitizeUtil.DEFAULT_FILL_COLOR
    }),
    stroke: new _Stroke["default"]({
      color: DigitizeUtil.DEFAULT_STROKE_COLOR
    })
  })
}));

_defineProperty(DigitizeUtil, "DIGITIZE_LAYER_NAME", 'react-geo_digitize');

_defineProperty(DigitizeUtil, "DEFAULT_SELECT_STYLE", DigitizeUtil.selectStyleFunction('rgba(154, 26, 56, 0.5)', 'rgba(154, 26, 56, 0.8)'));