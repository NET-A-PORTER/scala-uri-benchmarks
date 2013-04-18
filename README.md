# scala-uri-benchmarks

[scala-uri](https://github.com/theon/scala-uri/) is a small Scala library that helps you work with URIs. This project micro benchmarks the library using [scala meter](http://axel22.github.io/scalameter/)

Running these benchmarks requires:

 * Java 7
 * Scala 2.10

Performance tests can be run by running the `./benchmarks` script in the project root. The HTML reports are generated in `results/parsing/report/index.html` and `results/rendering/report/index.html`.

# Results

* [Parsing Time](#parsing-time)
 ** [Path Length](#path-length)
 ** [Hostname Length](#hostname-length)
 ** [Query String Key Length](#query-string-key-length)
 ** [Query String Value Length](#query-string-value-length)
 ** [Number of Query String parameters](#number-of-quer-string-parameters)
* [Parsing Time](#rendering-time)
 ** [Path Length](#path-length-1)
 ** [Hostname Length](#hostname-length-1)
 ** [Query String Key Length](#query-string-key-length-1)
 ** [Query String Value Length](#query-string-value-length-1)
 ** [Number of Query String parameters](#number-of-quer-string-parameters-1)

## Parsing Time

### Path Length

Linear (`O(n)` shape) parsing time for path length up to `2000` characters

<img src="https://raw.github.com/theon/scala-uri-benchmarks/master/results/parsing/report/images/Uri%20Parsing.path%20length.png" width="850" />

### Hostname Length

Linear (`O(n)` shape) parsing time for host length up to `2000` characters

<img src="https://raw.github.com/theon/scala-uri-benchmarks/master/results/parsing/report/images/Uri%20Parsing.domain%20length.png" width="850" />

### Query String Key Length

Linear (`O(n)` shape) parsing time for query string key length up to `2000` characters

<img src="https://raw.github.com/theon/scala-uri-benchmarks/master/results/parsing/report/images/Uri%20Parsing.query%20string%20key%20length.png" width="850" />

### Query String Value Length

Linear (`O(n)` shape) parsing time for query string value length up to `2000` characters

<img src="https://raw.github.com/theon/scala-uri-benchmarks/master/results/parsing/report/images/Uri%20Parsing.query%20string%20value%20length.png" width="850" />

### Number of Query String parameters

Linear (`O(n)` shape) parsing time for uri with up to `2000` query string parameters

<img src="https://raw.github.com/theon/scala-uri-benchmarks/master/results/parsing/report/images/Uri%20Parsing.number%20of%20query%20string%20pairs.png" width="850" />

## toString Rendering Time

### Path Length

Linear (`O(n)` shape) render time for path length up to `2000` characters

<img src="https://raw.github.com/theon/scala-uri-benchmarks/master/results/rendering/report/images/Uri%20Rendering.path%20length.png" width="850" />

### Hostname Length

Linear (`O(n)` shape) render time for host length up to `2000` characters

<img src="https://raw.github.com/theon/scala-uri-benchmarks/master/results/rendering/report/images/Uri%20Rendering.domain%20length.png" width="850" />

### Query String Key Length

Linear (`O(n)` shape) render time for query string key length up to `2000` characters

<img src="https://raw.github.com/theon/scala-uri-benchmarks/master/results/rendering/report/images/Uri%20Rendering.query%20string%20key%20length.png" width="850" />

### Query String Value Length

Linear (`O(n)` shape) render time for query string value length up to `2000` characters

<img src="https://raw.github.com/theon/scala-uri-benchmarks/master/results/rendering/report/images/Uri%20Rendering.query%20string%20value%20length.png" width="850" />

### Number of Query String parameters

Linear (`O(n)` shape) render time for uri with up to `2000` query string parameters

<img src="https://raw.github.com/theon/scala-uri-benchmarks/master/results/rendering/report/images/Uri%20Rendering.number%20of%20query%20string%20pairs.png" width="850" />