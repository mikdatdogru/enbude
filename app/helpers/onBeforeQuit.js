import { app } from 'electron';

const beforeQuit = () => {
  console.log('beforeQuit');

  app.quitting = true;
  console.log('beforeQuit');
};

export default beforeQuit;
