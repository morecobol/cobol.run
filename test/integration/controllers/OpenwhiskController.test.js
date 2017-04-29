const assert = require('assert')

describe('OpenwhiskControllerController', () => {
  let OpenwhiskController

  before(() => {
    OpenwhiskController = global.app.controllers.OpenwhiskController
    assert(OpenwhiskController)
  })
})

