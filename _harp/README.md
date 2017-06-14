# [CUEST website](http://cuest.soc.srcf.net/)

Cambridge University Estonian Society webpage

## Instructions

Compiled using [Harp](http://harpjs.com/):

```shell
npm install -g harp
```

Serve from the `_harp` directory (for testing):

```shell
cd _harp
harp server
```

Compile for deployment:

```shell
harp compile _harp ./
```

The development pattern has been to make the necessary edits to the
source files and followed by a corresponding git commit, then compile
and make another commit for the build (see history).

## Structure

The design patterns and purposes of different files should be clear
after reading Harp documentation. Files beginning with an underscore
`_` are not directly served but used in other files.

The site uses [Bootstrap](https://getbootstrap.com/) as its framework
and makes use of [pug](https://pugjs.org/) (previously known as Jade),
some Markdown for longer text and Less for any custom styling.

## License

The content on this site is licensed under
a [Creative Commons Attribution 4.0 International License][CC-BY-4.0],
and the underlying source code used to format and display that content
is licensed under the [MIT license][MIT].

[CC-BY-4.0]: http://creativecommons.org/licenses/by/4.0/
[MIT]: https://opensource.org/licenses/MIT
