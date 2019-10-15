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

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Request for the `ListExecutions` method.
 *
 * @property {string} parent
 *   Required. Name of the workflow from which the executions should be listed,
 *   for example, "projects/project1/locations/us-central1/workflows/workflow1".
 *
 * @property {number} pageSize
 *   Maximum number of workflow executions to return per call.
 *
 * @property {string} pageToken
 *   The value returned by the last
 *   `ListExecutionsResponse` indicates that
 *   this is a continuation of a prior `ListExecutions` call, and that
 *   the system should return the next page of data.
 *
 * @property {string} filter
 *   The filter expression.
 *
 * @typedef ListExecutionsRequest
 * @memberof google.cloud.workflows.executions.v1alpha1
 * @see [google.cloud.workflows.executions.v1alpha1.ListExecutionsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/executions/v1alpha1/executions.proto}
 */
const ListExecutionsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `CreateExecution` method.
 *
 * @property {string} parent
 *   Required. Name of the workflow for which an execution should be created,
 *   for example, "projects/project1/locations/us-central1/workflows/workflow1".
 *
 * @property {Object} execution
 *   Required. Execution to be created.
 *
 *   This object should have the same structure as [Execution]{@link google.cloud.workflows.executions.v1alpha1.Execution}
 *
 * @typedef CreateExecutionRequest
 * @memberof google.cloud.workflows.executions.v1alpha1
 * @see [google.cloud.workflows.executions.v1alpha1.CreateExecutionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/executions/v1alpha1/executions.proto}
 */
const CreateExecutionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `CancelExecution` method.
 *
 * @property {string} name
 *   Required. Name of the workflow execution which should be cancelled.
 *   "projects/project1/locations/us-central1/workflows/workflow1/executions/execution1"
 *
 * @typedef CancelExecutionRequest
 * @memberof google.cloud.workflows.executions.v1alpha1
 * @see [google.cloud.workflows.executions.v1alpha1.CancelExecutionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/executions/v1alpha1/executions.proto}
 */
const CancelExecutionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `GetExecution` method.
 *
 * @property {string} name
 *   Required. Name of the workflow execution which information should be
 *   retrieved, for example,
 *   "projects/project1/locations/us-central1/workflows/workflow1/executions/execution1"
 *
 * @typedef GetExecutionRequest
 * @memberof google.cloud.workflows.executions.v1alpha1
 * @see [google.cloud.workflows.executions.v1alpha1.GetExecutionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/executions/v1alpha1/executions.proto}
 */
const GetExecutionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the `ListExecutions` method.
 *
 * @property {Object[]} executions
 *   The workflow executions which match the request.
 *
 *   This object should have the same structure as [Execution]{@link google.cloud.workflows.executions.v1alpha1.Execution}
 *
 * @property {string} nextPageToken
 *   If not empty, indicates that there may be more workflow executions that
 *   match the request; this value should be passed in a new
 *   cloud.eventworkflows.v1alpha.ListWorkflowExecutionsRequest
 *   to get more workflows.
 *
 * @typedef ListExecutionsResponse
 * @memberof google.cloud.workflows.executions.v1alpha1
 * @see [google.cloud.workflows.executions.v1alpha1.ListExecutionsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/executions/v1alpha1/executions.proto}
 */
const ListExecutionsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A running instance of Cloud Workflow.
 *
 * @property {string} name
 *   Output only. Resource name of the Cloud Workflow Execution. It must have
 *   the format of "projects/* /locations/* /workflows/* /executions/*".
 *   For example:
 *   "projects/project1/locations/us-central1/workflows/workflow1/executions/execution1".
 *
 * @property {Object} startTime
 *   Output only. Marks the beginning of execution.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   Output only. Marks the end of execution, successful or not.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} state
 *   Output only. Current state of Cloud Workflow Execution.
 *
 *   The number should be among the values of [State]{@link google.cloud.workflows.executions.v1alpha1.State}
 *
 * @property {string} argument
 *   Input parameters of the Cloud Workflow represented as a JSON string.
 *
 * @property {string} result
 *   Output only. Output of the Cloud Workflow represented as a JSON string. The
 *   value is only present if the execution's state is FINISHED.
 *
 * @property {string} error
 *   Output only. The error which caused the execution to fail. The value is
 *   only present if the execution's state is FAILED.
 *
 * @property {number} workflowVersionId
 *   Output only. The version of the workflow used.
 *
 * @typedef Execution
 * @memberof google.cloud.workflows.executions.v1alpha1
 * @see [google.cloud.workflows.executions.v1alpha1.Execution definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/executions/v1alpha1/executions.proto}
 */
const Execution = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Describes the current state of the execution.
   *
   * @enum {number}
   * @memberof google.cloud.workflows.executions.v1alpha1
   */
  State: {

    /**
     * Invalid state.
     */
    STATE_UNSPECIFIED: 0,

    /**
     * The Workflow Execution is in progress.
     */
    ACTIVE: 1,

    /**
     * The Workflow Execution has finished successfully.
     */
    SUCCEEDED: 2,

    /**
     * The Workflow Execution failed with an error.
     */
    FAILED: 3,

    /**
     * The Workflow Execution has been stopped intentionally.
     */
    CANCELLED: 4
  }
};