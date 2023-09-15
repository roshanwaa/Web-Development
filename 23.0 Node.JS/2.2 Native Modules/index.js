const fs = require('fs');

fs.writeFile('message.txt', 'Hello from node.js', (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log('File Saved ');
});
