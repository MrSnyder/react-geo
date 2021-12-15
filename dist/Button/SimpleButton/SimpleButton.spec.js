"use strict";

var _TestUtil = _interopRequireDefault(require("../../Util/TestUtil"));

var _SimpleButton = _interopRequireDefault(require("./SimpleButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('<SimpleButton />', function () {
  it('is defined', function () {
    expect(_SimpleButton["default"]).not.toBeUndefined();
  });
  it('can be rendered', function () {
    var wrapper = _TestUtil["default"].mountComponent(_SimpleButton["default"]);

    expect(wrapper).not.toBeUndefined();
  });
  it('allows to set some props', function () {
    var wrapper = _TestUtil["default"].mountComponent(_SimpleButton["default"]);

    wrapper.setProps({
      type: 'secondary',
      iconName: 'bath',
      shape: 'circle',
      size: 'small',
      disabled: true
    });
    expect(wrapper.props().type).toBe('secondary');
    expect(wrapper.props().iconName).toBe('bath');
    expect(wrapper.props().shape).toBe('circle');
    expect(wrapper.props().size).toBe('small');
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.find('button.ant-btn-secondary').length).toBe(1);
    expect(wrapper.find('span.fa-bath').length).toBe(1);
    expect(wrapper.find('button.ant-btn-circle').length).toBe(1);
    expect(wrapper.find('button.ant-btn-sm').length).toBe(1);
    expect(wrapper.find('button', {
      disabled: true
    }).length).toBe(1);
  });
  it('calls a given click callback method onClick', function () {
    var onClick = jest.fn();

    var wrapper = _TestUtil["default"].mountComponent(_SimpleButton["default"], {
      onClick: onClick
    });

    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});