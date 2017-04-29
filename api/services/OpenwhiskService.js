/**
 * @module OpenwhiskService
 * @description TODO document Service
 */
module.exports = class OpenwhiskService extends Service {

  init () {

  }

  run ({ args, sources, files, flags }) {
    return this.services.CobolService.writeFiles([ ...files, ...sources ])
      .then(() => this.services.CobolService.compileAndRun(sources, flags, args))
      .catch(err => {
        this.log.error('OpenwhiskService.run error', err)
        return err
      })
  }
}

