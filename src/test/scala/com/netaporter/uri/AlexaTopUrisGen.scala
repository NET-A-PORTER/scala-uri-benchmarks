package com.netaporter.uri

import org.scalameter
import org.scalameter.Parameter
import org.scalameter.api.Gen
import org.scalameter.picklers.Implicits._

import scala.io.Source

class AlexaTopUrisGen(axisName: String) extends Gen[List[String]] {
  def createSource() = Source.fromURL(getClass.getResource("/alexa-top-10thousand.txt"), "UTF-8").getLines().grouped(1000).map(_.toList)

  override def warmupset: Iterator[List[String]] = createSource().take(100)
  override def generate(params: scalameter.Parameters): List[String] = params(axisName)
  override def dataset: Iterator[scalameter.Parameters] = createSource().map(uris => scalameter.Parameters(Parameter[List[String]](axisName) -> uris))
}
