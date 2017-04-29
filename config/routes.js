/**
 * Routes Configuration
 *
 * Configure how url patterns map to controllers, views, and static files.
 *
 * @see {@link http://trailsjs.io/doc/config/routes}
 */

module.exports = [
  {
    method: '*',
    path: '/init',
    handler: 'OpenwhiskController.init'
  },
  {
    method: '*',
    path: '/run',
    handler: 'OpenwhiskController.run'
  }
]
