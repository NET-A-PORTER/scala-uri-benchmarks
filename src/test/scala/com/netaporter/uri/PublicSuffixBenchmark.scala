package com.netaporter.uri

import org.scalameter.api._

object PublicSuffixBenchmark extends Bench.OfflineReport {
  val uris = new AlexaTopUrisGen("uri")
  val scalaUris = uris.map(_.map(Uri.parse))

  performance of "Uri-PublicSuffix" config (exec.benchRuns -> 36, exec.maxWarmupRuns -> 10) in {

    measure method "trie" in {
      using(scalaUris) in { uris =>
        uris.foreach(_.publicSuffix)
      }
    }
  }
}
