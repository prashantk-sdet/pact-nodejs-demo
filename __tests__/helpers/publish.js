let publisher = require("@pact-foundation/pact-node")
let path = require("path")

let opts = {
  pactFilesOrDirs: [path.resolve(process.cwd(), "pacts")],
  pactBroker: "https://localhost:3000",
  pactBrokerUsername: process.env.PACT_USERNAME,
  pactBrokerPassword: process.env.PACT_PASSWORD,
  consumerVersion: "1.0.0",
}

publisher.publishPacts(opts)
