package com.netaporter.uri

import org.scalameter.Measurer
import org.scalameter.api._

import scala.util.Random

/**
 * Date: 14/04/2013
 * Time: 18:29
 */
object RenderingBenchmark extends Bench.OfflineReport {

  val lengths = Gen.range("String Length")(1, 20000, 2000)
  val testData = lengths.map(i => Random.alphanumeric.take(i).mkString)

  val testLongPaths = testData.map(data => Uri("/" + data))
  val testLongDomains = testData.map(data => Uri("http", data, ""))
  val testLongQueryKeys = testData.map(data => Uri(query = QueryString(Vector(data -> Some("value")))))
  val testLongQueryValues = testData.map(data => Uri(query = QueryString(Vector("key" -> Some(data)))))

  val numQueryStrings = Gen.range("Num of Query String Pairs")(1, 2000, 200)

  val testNumQueryString = numQueryStrings.map(data =>
    Uri(scheme = "http",
      host = "example.com",
      query = QueryString((1 until data).toVector.map(i => ("key" + i, Some("val" + i))))
    )
  )

  performance of "Uri-Rendering" config (exec.benchRuns -> 36, exec.maxWarmupRuns -> 10) in {

    measure method "path-length" in {
      using(testLongPaths) in {
        uri => uri.toString
      }
    }

    measure method "domain-length" in {
      using(testLongDomains) in {
        uri => uri.toString
      }
    }

    measure method "query-string-key-length" in {
      using(testLongQueryKeys) in {
        uri => uri.toString
      }
    }

    measure method "query-string-value-length" in {
      using(testLongQueryValues) in {
        uri => uri.toString
      }
    }

    measure method "number-of-query-string-pairs" in {
      using(testLongQueryValues) in {
        uri => uri.toString
      }
    }
  }
}
