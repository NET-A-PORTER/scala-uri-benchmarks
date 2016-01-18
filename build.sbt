name := "scala-uri-benchmarks"

organization  := "com.github.theon"

version       := "0.0.1"

scalaVersion  := "2.11.7"

scalacOptions := Seq("-unchecked", "-deprecation", "-encoding", "utf8")

resolvers += "Sonatype OSS Snapshots" at "https://oss.sonatype.org/content/repositories/snapshots"

libraryDependencies ++= Seq(
  "com.netaporter" %% "scala-uri" % "0.4.12-SNAPSHOT",
  "com.storm-enroute" %% "scalameter" % "0.7"
 )

testFrameworks += new TestFramework("org.scalameter.ScalaMeterFramework")

logBuffered := false
