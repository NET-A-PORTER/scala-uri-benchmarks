package com.github.theon.uri

import org.scalameter._
import org.scalameter.execution.{LocalExecutor, SeparateJvmsExecutor}
import org.scalameter.Executor.Measurer
import org.scalameter.reporting.{RegressionReporter, HtmlReporter}
import org.scalameter.reporting.ChartReporter.ChartFactory
import util.Random
import org.scalameter.persistence.SerializationPersistor

/**
 * Date: 14/04/2013
 * Time: 18:29
 */
object RenderingBenchmark extends PerformanceTest {

  lazy val executor = LocalExecutor(
    Executor.Warmer.Default(),
    Aggregator.complete(Aggregator.average),
    new Measurer.IgnoringGC
  )

  lazy val reporter = Reporter.Composite(
    new RegressionReporter(
      RegressionReporter.Tester.Accepter(),
      RegressionReporter.Historian.ExponentialBackoff()
    ),
    HtmlReporter(embedDsv = true)
  )
  lazy val persistor = new SerializationPersistor

  val lengths = Gen.range("String Length")(1, 20000, 2000)
  val testData = lengths.map(i => Random.alphanumeric.take(i).mkString)

  val testLongPaths = testData.map(data => Uri("/" + data))
  val testLongDomains = testData.map(data => Uri("http", data, ""))
  val testLongQueryKeys = testData.map(data => Uri(query = QueryString(Vector(data -> "value"))))
  val testLongQueryValues = testData.map(data => Uri(query = QueryString(Vector("key" -> data))))

  val numQueryStrings = Gen.range("Num of Query String Pairs")(1, 2000, 200)

  val testNumQueryString = numQueryStrings.map(data =>
    Uri(scheme = "http",
      host = "example.com",
      query = QueryString((1 until data).toVector.map(i => ("key" + i, "val" + i)))
    )
  )

  performance of "Uri-Rendering" config (api.exec.benchRuns -> 36, api.exec.maxWarmupRuns -> 10) in {

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