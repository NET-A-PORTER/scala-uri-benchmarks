# scala-uri-benchmarks

[scala-uri](https://github.com/theon/scala-uri/) is a small Scala library that helps you work with URIs. This project micro benchmarks the library using [scala meter](http://axel22.github.io/scalameter/)

Running these benchmarks requires:

 * Java 7
 * Scala 2.10

Performance tests can be run by running `sbt test`. The HTML reports are generated in `reports/[date]/index.html` and `target/benchmarks/rendering/report/index.html`.