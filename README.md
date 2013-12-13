# Command Parser

## Install

```
npm install --save lib-cmdparse
```

## How it Works

Command parser changes this:

```
USER=bob PASS=hunter2 ./cmd -opt1=bla -opt2=bla x y z
```

into this:

```
{
  envs: {
    "USER": "bob",
    "PASS": "hunter2"
  },
  exec: "./cmd",
  args: ["-otp1=bla", "0opt2=bla", "x", "y", "z"]
}
```

