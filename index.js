var sys = require('sys')
var exec = require('child_process').exec;

var sejdaConsole = __dirname + '/bin/sejda-console/bin/sejda-console'

module.exports = {
  splitByPages: function(opts, callback) {
    var cmd = [sejdaConsole, 'splitbypages']

    opts.files.forEach(function(file) {
      cmd.push('--files ' + file)
    })

    cmd.push('--pageNumbers', opts.pages)
    cmd.push('--output', opts.output)

    if(opts.overwrite) cmd.push('--overwrite')

    exec(cmd.join(' '), callback);
  }
}
