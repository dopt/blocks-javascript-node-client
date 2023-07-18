/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const FlowIntentQueryString: core.serialization.ObjectSchema<
    serializers.FlowIntentQueryString.Raw,
    DoptApi.FlowIntentQueryString
> = core.serialization.object({
    version: core.serialization.number(),
    userIdentifier: core.serialization.string(),
    groupIdentifier: core.serialization.string().optional(),
});

export declare namespace FlowIntentQueryString {
    interface Raw {
        version: number;
        userIdentifier: string;
        groupIdentifier?: string | null;
    }
}
