function parse(line) {

  var env = true;
  var out = {
    envs: {},
    exec: null,
    args: []
  };

  var split = line.split(/\s+/);
  split.forEach(function (item) {
    process.stdout.write('----> ' + item);
    // check for environment varable
    if (env && item[0] != '-' && item.indexOf('=') > 0) {
      console.log(' env');
      var key_arg   = item.split('=');
      var key       = key_arg[0];
      var arg       = key_arg[1];
      return out.envs[key] = arg;
    } else {
      env = false;
    }

    // write exec
    if (!out.exec) {
      console.log(' exec');
      return out.exec = item;
    }

    // everything else is an argument
    out.args.push(item);
    console.log(' arg');

  });

  return out;

}

module.exports = parse;
