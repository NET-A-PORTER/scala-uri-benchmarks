name := "scala-uri-benchmarks"

organization  := "com.github.theon"

version       := "0.0.1"

scalaVersion  := "2.10.0"

scalacOptions := Seq("-unchecked", "-deprecation", "-encoding", "utf8")

resolvers += "Sonatype OSS Snapshots" at
  "https://oss.sonatype.org/content/repositories/snapshots"

libraryDependencies ++= Seq(
  "com.github.theon" %% "scala-uri" % "0.3.4",
  "org.parboiled" %% "parboiled-scala" % "1.1.4",
   "com.github.axel22" %% "scalameter" % "0.3"
 )

testFrameworks += new TestFramework("org.scalameter.ScalaMeterFramework")

logBuffered := false

testOptions in Test += Tests.Argument("-CresultDir results")