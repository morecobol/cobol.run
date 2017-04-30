/**
 * Routes Configuration
 *
 * Configure how url patterns map to controllers, views, and static files.
 *
 * @see {@link http://trailsjs.io/doc/config/routes}
 */

module.exports = [
  {
    method: 'POST',
    path: '/init',
    handler: 'OpenwhiskController.init'
  },
  {
    method: 'POST',
    path: '/run',
    handler: 'OpenwhiskController.run'
  }
]
