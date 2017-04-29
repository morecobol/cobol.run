/**
 * Server Configuration
 * (app.config.web)
 *
 * Configure the Web Server
 *
 * @see {@link http://trailsjs.io/doc/config/web}
 */
module.exports = {

  /**
   * The port to bind the web server to
   */
  port: 8080,

  /**
   * The host to bind the web server to
   */
  host: process.env.HOST || '0.0.0.0',

  serverOptions: {
    mime: {
      override: {
        'text/html': {
          compressible: false
        },
        'application/json': {
          compressible: false
        }
      }
    }
  }
}
