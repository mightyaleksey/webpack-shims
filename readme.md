webpack-shims
=============

Small example to illustrate enormous bundle size.


## description

Run

```
npm install
webpack
```

As the result you'll get the `result.js` file generated from the `entry.js`. It contains a lot of shims for the nodejs environment, which dramatically increase it's size (buffer, process and etc) and actually is not necessary.

In order to see the minimized variant, run

```
webpack --optimize-minimize
```
