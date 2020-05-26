const { config } = require('dotenv');

const { error } = config();

if (error) {
  console.error(error);

  process.on('exit', code => console.log(`About to exit with code ${code}`));
}
