/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from 'fs';
import qr from 'qr-image';
import inquirer from 'inquirer';

const randomNumber = Math.floor(Math.random() * 100 + 1);

inquirer
  .prompt([
    {
      message: 'Please enter your URL: ',
      name: 'URL',
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(`qr_${url + randomNumber}.png`));

    fs.writeFile('./URL.txt', url, (err) => {
      if (err) throw err;
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log('Successfully rendered');
    }
  });
