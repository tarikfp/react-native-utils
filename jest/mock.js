module.exports = {
  useGoBackHandler: jest.fn(() => true),
  getDeviceNativeLanguage: jest.fn(() => "en"),
  getWindowWidth: jest.fn(() => 100),
  getWindowHeight: jest.fn(() => 100),
  normalize: jest.fn(() => 100),
  showNativeAlert: jest.fn(),
  getCurrentRouteName: jest.fn(() => "test-route"),
  useBackButtonHandler: jest.fn(),
  useKeyboardListener: jest.fn(),
};
