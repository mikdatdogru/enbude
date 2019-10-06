const blur = mainWindow => {
  console.log('onBlur');

  if (!process.env.ALWAYS_SHOW) {
    mainWindow.hide();
  }
};

export default blur;
