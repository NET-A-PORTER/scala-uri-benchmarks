package com.netaporter.uri

import com.netaporter.uri.inet.PublicSuffixes

import scala.io.Source

/**
 * This is not a proper benchmark like the scalameter tests. This runs in the same JVM as SBT.
 */
object BasicPublicSuffixProfiling extends App {

  val input = Source.fromURL(getClass.getResource("/alexa-top-1million.txt"), "UTF-8").getLines().map(Uri.parse)

  def run(uri: Uri): Option[String] = {
    uri.publicSuffix
  }

  // warmup
  (0 to 1000).foreach(_ => if(input.hasNext) run(input.next))

  // Note that elapsed time includes the overhead from map()
  // Measuring the duration of individual runs always returns 0 nanoseconds because it is not very granular:
  // http://shipilev.net/blog/2014/nanotrusting-nanotime/
  val before = System.nanoTime
  val results = input.map(run)
  val totalTime = System.nanoTime - before

  // 2016-01-26 Average is about 0.5 nanoseconds on MacBook Pro
  val iterations = results.size
  val average = totalTime.toDouble / iterations.toDouble
  val failures = results.count(_.isEmpty)
  println(s"$failures failures")
  println(s"$iterations iterations in $totalTime nanoseconds")
  println(s"${getClass.getName} average $average nanoseconds")

  println(PublicSuffixes.trie.children.size)
  Thread.sleep(100000l)
  println(PublicSuffixes.trie.children.size)
}
