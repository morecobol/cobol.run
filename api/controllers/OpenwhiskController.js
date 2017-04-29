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
    this.log.info('OpenwhiskController.init: request payload', request.payload)
    reply({ OK: true })
  }

  /**
   * Activate!
   */
  run (request, reply) {
    const payload = Object.assign({
      args: [ ],
      files: [ ],
      options: { }
    }, request.payload.value)

    this.log.info('OpenwhiskController.run: invoking action with payload', request.payload.value)

    reply(this.services.OpenwhiskService.run(payload))
  }
}

