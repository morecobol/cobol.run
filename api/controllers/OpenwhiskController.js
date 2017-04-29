/**
 * @module OpenwhiskControllerController
 * @description Handle Openwhisk invocations
 *
 * Based on https://github.com/openwhisk/openwhisk/blob/master/core/nodejsActionBase/app.js
 */
module.exports = class OpenwhiskController extends Controller {

  /**
   * Check any necessary preconditions for the action
   */
  init (request, reply) {
    reply({ OK: true })
  }

  /**
   * Activate!
   */
  run (request, reply) {
    const message = request.payload

    return this.services.OpenwhiskService.run(message)
  }
}

