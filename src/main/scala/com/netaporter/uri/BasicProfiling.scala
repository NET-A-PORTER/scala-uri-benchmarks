package com.netaporter.uri

import java.util.UUID

/**
 * Unlike the ParsingBenchmark and RenderingBenchmark objects, this runs in the same JVM as SBT which makes it
 * easier to profile
 */
object BasicProfiling extends App {

  val durations = (0 to 1000000).map(_ => {
    val uri = "http://example.com?key=" + UUID.randomUUID().toString
    val before = System.nanoTime
    Uri.parse(uri)
    System.nanoTime - before
  })

  //Outputs about 7000 on a Macbook Pro
  println(durations.sum.toDouble / durations.size.toDouble)
}
