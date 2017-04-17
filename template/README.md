# {{ name }}

> {{ description }}

***Based*** on [Vue-cli Webpack](http://vuejs-templates.github.io/webpack/).

## Added

- `Pug Support` Alt Standart HTML
- `Sass Support` Awesome!!! Right?!
- `Bootstrap-grid` Pretty cool...
- `Vuex included` Very simple usage for example

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```
## Build For Cross-Platform Setup

``` bash
# install cordova
npm install -g cordova

# add browser, android or ios platforms
cordova platform add <platform>

# if daemon non-start, find and change `gradle.jvmargs`:
<--GradleBuilder.js-->
`args.push('-Dorg.gradle.jvmargs=-Xmx1024m');` or `args.push('-Dorg.gradle.jvmargs=-Xmx512m');`

And replace sdk tools from [download page](https://developer.android.com/studio/index.html#downloads)* 

*-(under title: Get just the command line tools)
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
