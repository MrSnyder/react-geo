"use strict";

var _Map = _interopRequireDefault(require("ol/Map"));

var _View = _interopRequireDefault(require("ol/View"));

var _Tile = _interopRequireDefault(require("ol/layer/Tile"));

var _OSM = _interopRequireDefault(require("ol/source/OSM"));

var _TestUtil = _interopRequireDefault(require("../../Util/TestUtil"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _WfsSearch = _interopRequireDefault(require("./WfsSearch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('<WfsSearch />', function () {
  it('is defined', function () {
    expect(_WfsSearch["default"]).not.toBeUndefined();
  });
  it('can be rendered', function () {
    var wrapper = _TestUtil["default"].mountComponent(_WfsSearch["default"]);

    expect(wrapper).not.toBeUndefined();
  });
  describe('#onUpdateInput', function () {
    it('resets state.data', function () {
      var wrapper = _TestUtil["default"].mountComponent(_WfsSearch["default"]);

      wrapper.instance().onUpdateInput();
      expect(wrapper.state().data).toEqual([]);
    });
    it('sets the inputValue as state.searchTerm', function () {
      var wrapper = _TestUtil["default"].mountComponent(_WfsSearch["default"]);

      var inputValue = 'a';
      wrapper.instance().onUpdateInput(inputValue);
      expect(wrapper.state().searchTerm).toBe(inputValue);
    });
    it('sends a request if input is as long as props.minChars', function () {
      // expect.assertions(1);
      var wrapper = _TestUtil["default"].mountComponent(_WfsSearch["default"], {
        placeholder: 'Type a countryname in its own language…',
        baseUrl: 'https://ows.terrestris.de/geoserver/osm/wfs',
        featureTypes: ['osm:osm-country-borders'],
        searchAttributes: {
          'osm:osm-country-borders': ['name']
        }
      });

      var doSearchSpy = jest.spyOn(wrapper.instance(), 'doSearch');
      var inputValue = 'Deutsch';
      wrapper.instance().onUpdateInput(inputValue);
      expect(doSearchSpy).toHaveBeenCalled();
      doSearchSpy.mockRestore();
    });
  });
  describe('#onFetchSuccess', function () {
    it('sets the response features as state.data', function () {
      var wrapper = _TestUtil["default"].mountComponent(_WfsSearch["default"]);

      var response = {
        features: [{
          id: '752526',
          properties: {
            name: 'Deutschland'
          }
        }]
      };
      wrapper.instance().onFetchSuccess(response);
      var promise = new Promise(function (resolve) {
        setTimeout(resolve, 350);
      });
      return promise.then(function () {
        expect(wrapper.state().data).toEqual(response.features);
      });
    });
  });
  describe('#onFetchError', function () {
    it('sets the response as state.data', function () {
      var wrapper = _TestUtil["default"].mountComponent(_WfsSearch["default"]);

      var loggerSpy = jest.spyOn(_Logger["default"], 'error');
      wrapper.instance().onFetchError('Peter');
      expect(loggerSpy).toHaveBeenCalled();
      expect(loggerSpy).toHaveBeenCalledWith('Error while requesting WFS GetFeature: Peter');
      loggerSpy.mockRestore();
    });
  });
  describe('#onMenuItemSelected', function () {
    it('calls this.props.onSelect with the selected item', function () {
      // SETUP
      var data = [{
        id: '752526',
        properties: {
          name: 'Deutschland'
        }
      }];
      var map = new _Map["default"]({
        layers: [new _Tile["default"]({
          name: 'OSM',
          source: new _OSM["default"]()
        })],
        view: new _View["default"]({
          projection: 'EPSG:4326',
          center: [37.40570, 8.81566],
          zoom: 4
        })
      }); // SETUP END

      var selectSpy = jest.fn();

      var wrapper = _TestUtil["default"].mountComponent(_WfsSearch["default"], {
        onSelect: selectSpy,
        map: map
      });

      wrapper.setState({
        data: data
      });
      wrapper.instance().onMenuItemSelected('Deutschland', {
        key: '752526'
      });
      expect(selectSpy).toHaveBeenCalled();
      expect(selectSpy).toHaveBeenCalledWith(data[0], map);
      selectSpy.mockRestore();
    });
  });
  describe('default #onSelect', function () {
    it('zooms to the selected feature', function () {
      // SETUP
      var feature = {
        type: 'Feature',
        id: '752526',
        properties: {
          name: 'Peter'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [[[10, 40], [40, 40], [40, 10], [10, 10], [10, 40]]]
        }
      };
      var map = new _Map["default"]({
        layers: [new _Tile["default"]({
          name: 'OSM',
          source: new _OSM["default"]()
        })],
        view: new _View["default"]({
          projection: 'EPSG:4326',
          center: [37.40570, 8.81566],
          zoom: 4,
          constrainResolution: true
        })
      }); // SETUP END

      var wrapper = _TestUtil["default"].mountComponent(_WfsSearch["default"], {
        map: map
      });

      var fitSpy = jest.spyOn(map.getView(), 'fit');
      wrapper.props().onSelect(feature, map);
      expect.assertions(3);
      expect(fitSpy).toHaveBeenCalled();
      return new Promise(function (resolve) {
        setTimeout(resolve, 600);
      }).then(function () {
        expect(map.getView().getCenter()).toEqual([25, 25]);
        expect(map.getView().getZoom()).toEqual(2);
        fitSpy.mockRestore();
      });
    });
  });
  describe('#renderOption', function () {
    it('returns a Select.Option', function () {
      var wrapper = _TestUtil["default"].mountComponent(_WfsSearch["default"]);

      var feature = {
        id: '752526',
        properties: {
          name: 'Deutschland'
        }
      };
      var option = wrapper.props().renderOption(feature, {
        // Props must be passed to the renderOption function.
        displayValue: 'name',
        idProperty: 'id'
      });
      expect(option.key).toBe(feature.id);
      expect(option.props.children).toBe(feature.properties.name);
    });
  });
  describe('#idProperty', function () {
    it('can be specified', function () {
      var wrapper = _TestUtil["default"].mountComponent(_WfsSearch["default"]);

      var feature = {
        customId: '7355608',
        properties: {
          name: 'Deutschland'
        }
      };
      var option = wrapper.props().renderOption(feature, {
        displayValue: 'name',
        idProperty: 'customId'
      });
      expect(option.key).toBe(feature.customId);
      expect(option.props.children).toBe(feature.properties.name);
    });
  });
});