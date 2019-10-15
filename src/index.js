// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @namespace google
 */
/**
 * @namespace google.cloud
 */
/**
 * @namespace google.cloud.workflow-executions
 */
/**
 * @namespace google.cloud.workflow-executions.v1alpha1
 */

'use strict';

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v1alpha1: require('./v1alpha1'),
});

/**
 * The `@google-cloud/workflow-executions` package has the following named exports:
 *
 * - `ExecutionsClient` - Reference to
 *   {@link v1alpha1.ExecutionsClient}
 * - `v1alpha1` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `ExecutionsClient` - Reference to
 *       {@link v1alpha1.ExecutionsClient}
 *
 * @module {object} @google-cloud/workflow-executions
 * @alias nodejs-workflow-executions
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/workflow-executions
 *
 * @example <caption>Import the client library:</caption>
 * const workflow-executions = require('@google-cloud/workflow-executions');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new workflow-executions.ExecutionsClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new workflow-executions.ExecutionsClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */

/**
 * @type {object}
 * @property {constructor} ExecutionsClient
 *   Reference to {@link v1alpha1.ExecutionsClient}
 */
module.exports = gapic.v1alpha1;

/**
 * @type {object}
 * @property {constructor} ExecutionsClient
 *   Reference to {@link v1alpha1.ExecutionsClient}
 */
module.exports.v1alpha1 = gapic.v1alpha1;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
