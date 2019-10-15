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

'use strict';

const assert = require('assert');

const workflowExecutionsModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('ExecutionsClient', () => {
  it('has servicePath', () => {
    const servicePath = workflowExecutionsModule.v1alpha1.ExecutionsClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = workflowExecutionsModule.v1alpha1.ExecutionsClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = workflowExecutionsModule.v1alpha1.ExecutionsClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new workflowExecutionsModule.v1alpha1.ExecutionsClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new workflowExecutionsModule.v1alpha1.ExecutionsClient({fallback: true});
    assert(client);
  });

  describe('listExecutions', () => {
    it('invokes listExecutions without error', done => {
      const client = new workflowExecutionsModule.v1alpha1.ExecutionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const request = {
        parent: parent,
      };

      // Mock response
      const nextPageToken = '';
      const executionsElement = {};
      const executions = [executionsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        executions: executions,
      };

      // Mock Grpc layer
      client._innerApiCalls.listExecutions = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.executions);
      };

      client.listExecutions(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.executions);
        done();
      });
    });

    it('invokes listExecutions with error', done => {
      const client = new workflowExecutionsModule.v1alpha1.ExecutionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const request = {
        parent: parent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listExecutions = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listExecutions(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createExecution', () => {
    it('invokes createExecution without error', done => {
      const client = new workflowExecutionsModule.v1alpha1.ExecutionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const execution = {};
      const request = {
        parent: parent,
        execution: execution,
      };

      // Mock response
      const name = 'name3373707';
      const argument = 'argument-1589682499';
      const result = 'result-934426595';
      const error = 'error96784904';
      const workflowVersionId = 928613986;
      const expectedResponse = {
        name: name,
        argument: argument,
        result: result,
        error: error,
        workflowVersionId: workflowVersionId,
      };

      // Mock Grpc layer
      client._innerApiCalls.createExecution = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createExecution(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createExecution with error', done => {
      const client = new workflowExecutionsModule.v1alpha1.ExecutionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const execution = {};
      const request = {
        parent: parent,
        execution: execution,
      };

      // Mock Grpc layer
      client._innerApiCalls.createExecution = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createExecution(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('cancelExecution', () => {
    it('invokes cancelExecution without error', done => {
      const client = new workflowExecutionsModule.v1alpha1.ExecutionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const name = 'name3373707';
      const request = {
        name: name,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const argument = 'argument-1589682499';
      const result = 'result-934426595';
      const error = 'error96784904';
      const workflowVersionId = 928613986;
      const expectedResponse = {
        name: name2,
        argument: argument,
        result: result,
        error: error,
        workflowVersionId: workflowVersionId,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelExecution = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.cancelExecution(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes cancelExecution with error', done => {
      const client = new workflowExecutionsModule.v1alpha1.ExecutionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const name = 'name3373707';
      const request = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelExecution = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.cancelExecution(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getExecution', () => {
    it('invokes getExecution without error', done => {
      const client = new workflowExecutionsModule.v1alpha1.ExecutionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const name = 'name3373707';
      const request = {
        name: name,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const argument = 'argument-1589682499';
      const result = 'result-934426595';
      const error = 'error96784904';
      const workflowVersionId = 928613986;
      const expectedResponse = {
        name: name2,
        argument: argument,
        result: result,
        error: error,
        workflowVersionId: workflowVersionId,
      };

      // Mock Grpc layer
      client._innerApiCalls.getExecution = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getExecution(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getExecution with error', done => {
      const client = new workflowExecutionsModule.v1alpha1.ExecutionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const name = 'name3373707';
      const request = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.getExecution = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getExecution(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

});

function mockSimpleGrpcMethod(expectedRequest, response, error) {
  return function(actualRequest, options, callback) {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
