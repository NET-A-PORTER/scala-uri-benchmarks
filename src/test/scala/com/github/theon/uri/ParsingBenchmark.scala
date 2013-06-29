package com.github.theon.uri

import org.scalameter._
import execution.SeparateJvmsExecutor
import reporting.ChartReporter.ChartFactory
import util.Random
import com.github.theon.uri.Uri._
import org.scalameter.reporting.HtmlReporter
import org.scalameter.Executor.Measurer
/**
 * Date: 14/04/2013
 * Time: 16:46
 */
object ParsingBenchmark extends PerformanceTest {

  lazy val executor = SeparateJvmsExecutor(
    Executor.Warmer.Default(),
    Aggregator.average,
    new Measurer.IgnoringGC
  )
  //lazy val reporter = new LoggingReporter
  //lazy val reporter = ChartReporter(ChartFactory.XYLine())
  lazy val reporter = HtmlReporter(HtmlReporter.Renderer.Info(), HtmlReporter.Renderer.BigO(), HtmlReporter.Renderer.Chart(ChartFactory.XYLine()))
  lazy val persistor = Persistor.None

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

  performance of "Uri Parsing" config (api.exec.benchRuns -> 10) in {

    measure method "path length" in {
      using(testLongPaths) in {
        uri => parseUri(uri)
      }
    }

    measure method "domain length" in {
      using(testLongDomains) in {
        uri => parseUri(uri)
      }
    }

    measure method "query string key length" in {
      using(testLongQueryKeys) in {
        uri => parseUri(uri)
      }
    }

    measure method "query string value length" in {
      using(testLongQueryValues) in {
        uri => parseUri(uri)
      }
    }

    measure method "number of query string pairs" in {
      using(testNumQueryString) in {
        uri => parseUri(uri)
      }
    }
  }
}
