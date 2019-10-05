const didFinishLoad = mainWindow => {
  console.log('onDidFinishLoad');
  if (!mainWindow) {
    throw new Error('"mainWindow" is not defined');
  }
  if (process.env.START_MINIMIZED) {
    mainWindow.minimize();
  } else {
    mainWindow.hide();
    // mainWindow.focus();
  }
};

export default didFinishLoad;
