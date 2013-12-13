function parse(line) {

  var env = true;
  var out = {
    envs: {},
    exec: null,
    args: []
  };

  var split = line.split(/\s+/);
  split.forEach(function (item) {
    // check for environment varable
    if (env && item[0] != '-' && item.indexOf('=') > 0) {
      var key_arg   = item.split('=');
      var key       = key_arg[0];
      var arg       = key_arg[1];
      return out.envs[key] = arg;
    } else {
      env = false;
    }

    // write exec
    if (!out.exec) {
      return out.exec = item;
    }

    // everything else is an argument
    out.args.push(item);

  });

  return out;

}

module.exports = parse;
