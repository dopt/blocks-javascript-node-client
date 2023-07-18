/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as DoptApi from "../../../../../api";
import * as core from "../../../../../core";

export const TransitionRequest: core.serialization.Schema<
    serializers.TransitionRequest.Raw,
    Omit<DoptApi.TransitionRequest, "transitions" | "version" | "userIdentifier" | "groupIdentifier">
> = core.serialization.object({});

export declare namespace TransitionRequest {
    interface Raw {}
}
