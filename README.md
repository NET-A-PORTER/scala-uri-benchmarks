# scala-uri-benchmarks

[scala-uri](https://github.com/theon/scala-uri/) is a small Scala library that helps you work with URIs. This project micro benchmarks the library using [scala meter](http://axel22.github.io/scalameter/)

Running these benchmarks requires:

 * Java 7
 * Scala 2.10

Performance tests can be run by running the `./benchmarks` script in the project root. The HTML reports are generated in `results/parsing/report/index.html` and `results/rendering/report/index.html`.

# Results

# 0.3.6

* [Parsing Time](http://net-a-porter.github.io/scala-uri-benchmarks/parsing-0.3.6/report/index.html)
* [toString Rendering Time](http://net-a-porter.github.io/scala-uri-benchmarks/rendering-0.3.6/report/index.html)

# 0.4.2

`scala-uri` 0.4.x upgrades from parboiled to parboiled2 which gives 2x to 3x faster parsing times.

* [Parsing Time](http://net-a-porter.github.io/scala-uri-benchmarks/parsing-0.4.2/report/index.html)
* [toString Rendering Time](http://net-a-porter.github.io/scala-uri-benchmarks/rendering-0.4.2/report/index.html)

# 0.4.3

* [Parsing Time](http://net-a-porter.github.io/scala-uri-benchmarks/parsing-0.4.3/report/index.html)
* [toString Rendering Time](http://net-a-porter.github.io/scala-uri-benchmarks/rendering-0.4.3/report/index.html)

# 0.4.12-SNAPSHOT

* [Parsing Time](http://net-a-porter.github.io/scala-uri-benchmarks/parsing-0.4.12-SNAPSHOT/report/index.html)
* [toString Rendering Time](http://net-a-porter.github.io/scala-uri-benchmarks/rendering-0.4.12-SNAPSHOT/report/index.html)