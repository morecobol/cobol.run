const spawn = require('child_process').spawn
//const path = require('path')
const fs = require('fs')

/**
 * @module CobolService
 * @description Operate on COBOL code
 */
module.exports = class CobolService extends Service {

  writeFiles (files) {
    return Promise.all([
      files.map(file => new Promise((resolve, reject) => {
        this.log.info('CobolService.writeFiles: writing file', file.fd, '...')
        fs.writeFile(file.fd, file.data + '\n', error => {
          if (error) return reject({ error })

          this.log.info('CobolService.writeFiles: wrote file', file.fd, '...')
          return resolve({ file })
        })
      }))
    ])
  }

  compileAndRun (sources = [ ], flags = [ ], args = [ ]) {
    let output = ''
    let error = ''

    const sourceFds = sources.map(source => source.fd)

    const spawnArgs = [ ...flags, '-xjF', ...sourceFds, ...args ]

    return new Promise((resolve, reject) => {
      this.log.info('CobolService.compileAndRun: spawning cobc process with args', spawnArgs)

      const cobc = spawn('cobc', spawnArgs)
      cobc.stdout.on('data', data => output += data.toString())
      cobc.stderr.on('data', data => error += data.toString())
      cobc.on('close', code => {
        if (code === 0) resolve({ code, output: output.trim() })
        else reject({ code, error: error.trim() })
      })
    })
  }
}
