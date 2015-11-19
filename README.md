# Sejda JS

Javascript wrapper for [Sejda PDF](https://github.com/torakiki/sejda), the engine behind [Sejda.com](http://www.sejda.com)  

## Usage

### Split by pages

```
var sejda = require('sejda-js')

sejda.splitByPages({
    files:['pdfs/2_pages.pdf'],
    pages: '1',
    output: '/tmp'
  },
  function(err, stdout, stderr){
    console.log(stdout);
    console.error(stderr);

    if(err) console.error('Failed. ', err)
    else console.log('OK')
  }
)
```

Reference docs: [Split PDF online by pages](http://www.sejda.com/split-by-pages)

## License

AGPLv3




