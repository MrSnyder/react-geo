"use strict";

var _Map = _interopRequireDefault(require("ol/Map"));

var _View = _interopRequireDefault(require("ol/View"));

var _Tile = _interopRequireDefault(require("ol/layer/Tile"));

var _OSM = _interopRequireDefault(require("ol/source/OSM"));

var _TestUtil = _interopRequireDefault(require("../../Util/TestUtil"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _NominatimSearch = _interopRequireDefault(require("../NominatimSearch/NominatimSearch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('<NominatimSearch />', function () {
  it('is defined', function () {
    expect(_NominatimSearch["default"]).not.toBeUndefined();
  });
  it('can be rendered', function () {
    var wrapper = _TestUtil["default"].mountComponent(_NominatimSearch["default"]);

    expect(wrapper).not.toBeUndefined();
  });
  describe('#onUpdateInput', function () {
    it('resets state.dataSource', function () {
      var wrapper = _TestUtil["default"].mountComponent(_NominatimSearch["default"]);

      wrapper.instance().onUpdateInput();
      expect(wrapper.state().dataSource).toEqual([]);
    });
    it('sets the inputValue as state.searchTerm', function () {
      var wrapper = _TestUtil["default"].mountComponent(_NominatimSearch["default"]);

      var inputValue = 'a';
      wrapper.instance().onUpdateInput(inputValue);
      expect(wrapper.state().searchTerm).toBe(inputValue);
    });
    it('sends a request if input is as long as props.minChars', function () {
      var wrapper = _TestUtil["default"].mountComponent(_NominatimSearch["default"]);

      var fetchSpy = jest.spyOn(window, 'fetch');
      var inputValue = 'Bonn';
      wrapper.instance().onUpdateInput(inputValue);
      expect(fetchSpy).toHaveBeenCalled();
      fetchSpy.mockRestore();
    });
  });
  describe('#doSearch', function () {
    it('sends a request with appropriate parts', function () {
      var wrapper = _TestUtil["default"].mountComponent(_NominatimSearch["default"]);

      var fetchSpy = jest.spyOn(window, 'fetch');
      var inputValue = 'Bonn';
      wrapper.setState({
        searchTerm: inputValue
      });
      wrapper.instance().doSearch();
      expect(fetchSpy).toHaveBeenCalled();
      var fetchUrl = fetchSpy.mock.calls[0][0];
      var expectations = [wrapper.props().nominatimBaseUrl, encodeURIComponent(wrapper.props().format), encodeURIComponent(wrapper.props().viewBox), encodeURIComponent(wrapper.props().bounded), encodeURIComponent(wrapper.props().polygonGeoJSON), encodeURIComponent(wrapper.props().addressDetails), encodeURIComponent(wrapper.props().limit), encodeURIComponent(wrapper.props().countryCodes), encodeURIComponent(inputValue)];
      expectations.forEach(function (expectation) {
        expect(fetchUrl).toMatch(expectation);
      });
      fetchSpy.mockRestore();
    });
  });
  describe('#onFetchSuccess', function () {
    it('sets the response as state.dataSource', function () {
      var wrapper = _TestUtil["default"].mountComponent(_NominatimSearch["default"]);

      var response = [{
        // eslint-disable-next-line camelcase
        place_id: 123,
        // eslint-disable-next-line camelcase
        display_name: 'peter'
      }];
      wrapper.instance().onFetchSuccess(response);
      expect(wrapper.state().dataSource).toEqual(response);
    });
  });
  describe('#onFetchError', function () {
    it('sets the response as state.dataSource', function () {
      var wrapper = _TestUtil["default"].mountComponent(_NominatimSearch["default"]);

      var loggerSpy = jest.spyOn(_Logger["default"], 'error');
      wrapper.instance().onFetchError('Peter');
      expect(loggerSpy).toHaveBeenCalled();
      expect(loggerSpy).toHaveBeenCalledWith('Error while requesting Nominatim: Peter');
      loggerSpy.mockRestore();
    });
  });
  describe('#onMenuItemSelected', function () {
    it('calls this.props.onSelect with the selected item', function () {
      // SETUP
      var dataSource = [{
        // eslint-disable-next-line camelcase
        place_id: 752526,
        // eslint-disable-next-line camelcase
        display_name: 'Böen, Löningen, Landkreis Cloppenburg, Niedersachsen, Deutschland'
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

      var wrapper = _TestUtil["default"].mountComponent(_NominatimSearch["default"], {
        onSelect: selectSpy,
        map: map
      });

      wrapper.setState({
        dataSource: dataSource
      });
      wrapper.instance().onMenuItemSelected('752526', {
        value: '752526',
        children: '752526',
        key: '752526'
      });
      expect(selectSpy).toHaveBeenCalled();
      expect(selectSpy).toHaveBeenCalledWith(dataSource[0], map);
      selectSpy.mockRestore();
    });
  });
  describe('#onSelect', function () {
    it('zooms to the boundingbox of the selected entry', function () {
      // SETUP
      var bbox = ['52.7076346', '52.7476346', '7.7702617', '7.8102617'];
      var transformedExtent = [parseFloat(bbox[2]), parseFloat(bbox[0]), parseFloat(bbox[3]), parseFloat(bbox[1])];
      var item = {
        // eslint-disable-next-line camelcase
        place_id: '752526',
        boundingbox: bbox
      };
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

      var wrapper = _TestUtil["default"].mountComponent(_NominatimSearch["default"], {
        map: map
      });

      var fitSpy = jest.spyOn(map.getView(), 'fit');
      wrapper.props().onSelect(item, map);
      expect(fitSpy).toHaveBeenCalled();
      expect(fitSpy).toHaveBeenCalledWith(transformedExtent, expect.any(Object));
      fitSpy.mockRestore();
    });
  });
  describe('#renderOption', function () {
    it('returns an AutoComplete.Option', function () {
      var wrapper = _TestUtil["default"].mountComponent(_NominatimSearch["default"]);

      var item = {
        // eslint-disable-next-line camelcase
        place_id: '752526',
        // eslint-disable-next-line camelcase
        display_name: 'Böen, Löningen, Landkreis Cloppenburg, Niedersachsen, Deutschland'
      };
      var option = wrapper.props().renderOption(item);
      expect(option.key).toBe(item.place_id);
      expect(option.props.children).toBe(item.display_name);
    });
  });
});