package com.netaporter.uri

import java.util.UUID

/**
 * This is not a proper benchmark like the scalameter tests. This runs in the same JVM as SBT.
 */
object BasicParsingProfiling extends App {

  def run(i: Int): Long = {
    val uri = "http://example.com?key=" + UUID.randomUUID().toString
    val before = System.nanoTime
    Uri.parse(uri)
    System.nanoTime - before
  }

  // warmup
  (0 to 1000).foreach(run)

  val durations = (0 to 1000000).map(run)

  // 2013-06-29: Outputs about 7000 on a Macbook Pro
  // 2016-01-19: Outputs about 3000 on a Macbook Pro
  val average = durations.sum.toDouble / durations.size.toDouble
  println(s"${getClass.getName} average $average nanoseconds")
}
