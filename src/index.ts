import app from '~/slackapp';

(async () => {
  // Start yor app
  await app.start(process.env.PORT || 3000);

  console.log(process.env.NODE_ENV);
  console.log('Bolt app is running');
})();
