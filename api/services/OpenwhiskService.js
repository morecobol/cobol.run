/**
 * @module OpenwhiskService
 * @description TODO document Service
 */
module.exports = class OpenwhiskService extends Service {

  init () {

  }

  run ({ args, source, files, options }) {
    return this.services.CobolService.writeFiles(files)
      .then(() => this.services.CobolService.compileAndRun(source, options, args))
      .catch(err => {
        this.log.error('OpenwhiskService.run error', err)
        return err
      })
  }
}

