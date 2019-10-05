const activate = mainWindow => {
  console.log('onActivate');
  mainWindow.show();
  mainWindow.focus();
  // fix me: burasi ne icin ?
};

export default activate;
