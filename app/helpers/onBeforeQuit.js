import { app } from 'electron';

const beforeQuit = () => {
  app.quitting = true;
  console.log('beforeQuit');
};

export default beforeQuit;
