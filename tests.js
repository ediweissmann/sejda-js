var sejda = require('./index.js')

sejda.splitByPages({
    files:['pdfs/2_pages.pdf'],
    pages: '1',
    output: '/tmp',
    overwrite: true
  },
  function(err, stdout, stderr){
    console.log(stdout);
    console.error(stderr);

    if(err) console.error('Failed. ', err)
    else console.log('OK')
  }
)
