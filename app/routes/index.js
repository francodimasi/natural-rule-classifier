/* Copyright IBM Corp. 2016
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = function (app) {

  // Run prelim check for forbidden requests
  // app.use(function(req, res, next) {
  //   // Do not allow POST requests to route '/classify/...'
  //   // when app is living in cloud platform
  //   if ( req.method === 'POST' &&
  //        /^\/classify\/.*/i.test(req.url) ) {

  //     var error = {
  //       code: 403,
  //       error: 'POST requests to /classify/ are forbidden',
  //       url: req.url
  //     };

  //     console.log('error:', error);
  //     res.status(403).json(error);
  //   }
  //   else
  //     next();
  // });

  app.use('/classify', require('./classify'));

};
