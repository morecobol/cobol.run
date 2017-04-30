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
        this.log.debug('CobolService.writeFiles: writing file', file.name, '...')

        fs.writeFile(file.name, file.data + '\n', error => {
          if (error) return reject({ error })

          this.log.debug('CobolService.writeFiles: wrote file', file.name, '...')
          return resolve({ file })
        })
      }))
    ])
  }

  compileAndRun (source, options = { }, args = [ ]) {
    let output = ''
    let error = ''

    const compilerOptions = this.getCompilerOptions(options, options.dialect)
    const spawnArgs = [ ...compilerOptions, ...args ]

    return new Promise((resolve, reject) => {
      this.log.debug('CobolService.compileAndRun: spawning cobc process with args', spawnArgs)

      const cobc = spawn('cobc', spawnArgs)
      cobc.stdout.on('data', data => output += data.toString())
      cobc.stderr.on('data', data => error += data.toString())
      cobc.on('close', code => {
        if (code === 0) resolve({ code, output: output.trim() })
        else reject({ code, error: error.trim() })
      })

      cobc.stdin.write(source)
      cobc.stdin.end()
    })
  }

  getCompilerOptions (options, dialect = 'default') {
    if (!this.config.cobol.dialects[dialect]) {
      throw new RangeError(`Specified dialect "${dialect}" not supported`)
    }
    const dialectFlag = `-std=${dialect}`

    return [ '-xjF', dialectFlag, '-' ]
  }

  constructor (app) {
    super(app)
    this.log.debug('Using cobc compiler version', this.config.cobol.compilerVersion)
  }
}
