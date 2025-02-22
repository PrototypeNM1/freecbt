import initStoryshots from "@storybook/addon-storyshots";

// Various mocks for quieter logging during tests:
//
// * Quiet, StatusBar
jest.useFakeTimers();

// * Quiet, posed. Thanks, https://stackoverflow.com/a/59593847
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

// * Quiet, AsyncStorage. I'd love to upgrade you, but can't yet - we're locked
// to the version used by Expo.
const consoleError = console.error;
const asyncStorageMsg =
  "Warning: AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/async-storage' instead of 'react-native'. See https://github.com/react-native-community/async-storage";
jest.spyOn(console, "error").mockImplementation((msg) => {
  if (msg !== asyncStorageMsg) {
    consoleError.call(console, msg);
  }
});

initStoryshots();
