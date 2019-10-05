const closed = mainWindow => {
  console.log('onClosed');
  mainWindow = null;
};

export default closed;
