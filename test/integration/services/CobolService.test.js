const assert = require('assert')

describe('CobolService', () => {
  let CobolService

  before(() => {
    CobolService = global.app.services.CobolService
    assert(CobolService)
  })
})

