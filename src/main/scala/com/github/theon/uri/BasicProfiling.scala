package com.github.theon.uri

/**
 * Unlike the ParsingBenchmark and RenderingBenchmark objects, this runs in the same JVM as SBT which makes it
 * easier to profile
 */
object BasicProfiling extends App {

  val uri = "http://example.com?key=value"

  val durations = (0 to 10000000).map(_ => {
    val before = System.currentTimeMillis.toDouble
    Uri.parseUri(uri)
    System.currentTimeMillis.toDouble - before
  })

  println(durations.sum / durations.size.toDouble)
}
