const puppeteer = require('puppeteer');
const colors = require('colors');

async function getPic(url, path, name, width, height) {
  console.log(colors.magenta("Working..."));

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  var deviceViewport = page.viewport();
  var pageWidth = width;
  var pageHeight = height;

  if (width === undefined || height === undefined) {
    pageWidth = deviceViewport.width;
    pageHeight = deviceViewport.height;
  }

  await page.goto(url);
  await page.setViewport({width: pageWidth, height: pageHeight})
  await page.screenshot({path: path + name + '.png'});
  await browser.close();

  console.log(colors.green('All done!\n'));
}

var argv = require('minimist')(process.argv.slice(2));

if (argv.u === undefined || argv.p === undefined || argv.n === undefined) {
  console.log('');

  if (Object.keys(argv).length > 1) {
    console.log(colors.red('Incorrect Usage!'));
  }

  console.log(colors.bold('Usage: screenshot -u <url> -p <folder path> -n <filename without extension>\n'));
  console.log('You can also supply screen size by using -w <width> -h <height>');
} else {
  // Check if path supplied ends with a slash
  if (argv.p.split('')[argv.p.split('').length - 1] !== '/') {
    argv.p = argv.p + '/';
  }

  console.log('');
  console.log(
    'Creating screenshot of ' +
    colors.yellow(argv.u) +
    ' called ' +
    colors.yellow(argv.n + '.png') +
    ' in folder ' +
    colors.yellow(argv.p)
  );
  console.log('');

  // Check if height and width is supplied as parameters
  if (argv.w === undefined || argv.h === undefined) {
    console.log(
      'No Width and Height supplied. Reminder: you can supply width and height by using -w and -h'
    );
    getPic(argv.u, argv.p, argv.n);
  } else {
    getPic(argv.u, argv.p, argv.n, argv.w, argv.h);
  }
}
