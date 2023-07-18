/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const BadRequestErrorResponseBodyCode: core.serialization.Schema<
    serializers.BadRequestErrorResponseBodyCode.Raw,
    DoptApi.BadRequestErrorResponseBodyCode
> = core.serialization.enum_(["invalid_request_error", "intent_request_error"]);

export declare namespace BadRequestErrorResponseBodyCode {
    type Raw = "invalid_request_error" | "intent_request_error";
}
