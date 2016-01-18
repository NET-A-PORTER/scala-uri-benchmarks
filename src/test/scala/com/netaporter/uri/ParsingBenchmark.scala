package com.netaporter.uri

import org.scalameter.api._
import util.Random
import com.netaporter.uri.Uri._

/**
 * Date: 14/04/2013
 * Time: 16:46
 */
object ParsingBenchmark extends Bench.OfflineReport {

  val lengths = Gen.range("String Length")(1, 2000, 200)
  val testData = lengths.map(i => Random.alphanumeric.take(i).mkString)

  val testLongPaths = testData.map(data => "/" + data)
  val testLongDomains = testData.map(data => "http://" + data)
  val testLongQueryKeys = testData.map(data => "http://example.com?" + data + "=value")
  val testLongQueryValues = testData.map(data => "http://example.com?key=" + data)

  val numQueryStrings = Gen.range("Num of Query String Pairs")(1, 2000, 200)

  val testNumQueryString = numQueryStrings.map(data =>
    "http://example.com?" + (1 until data).map(i => s"key$i=val$i").mkString("&")
  )

  performance of "Uri-Parsing" config (exec.benchRuns -> 36, exec.maxWarmupRuns -> 10) in {

    measure method "path-length" in {
      using(testLongPaths) in {
        uri => parse(uri)
      }
    }

    measure method "domain-length" in {
      using(testLongDomains) in {
        uri => parse(uri)
      }
    }

    measure method "query-string-key-length" in {
      using(testLongQueryKeys) in {
        uri => parse(uri)
      }
    }

    measure method "query-string-value-length" in {
      using(testLongQueryValues) in {
        uri => parse(uri)
      }
    }

    measure method "number-of-query-string-pairs" in {
      using(testNumQueryString) in {
        uri => parse(uri)
      }
    }
  }
}

