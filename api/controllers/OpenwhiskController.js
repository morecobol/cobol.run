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
   *
   */
  run (request, reply) {
    const payload = Object.assign({
      args: [ ],
      sources: [ ],
      files: [ ],
      flags: [ ]
    }, request.payload.value)

    this.log.info('OpenwhiskController.run: invoking action with payload', payload)

    reply(this.services.OpenwhiskService.run(payload))
  }
}

