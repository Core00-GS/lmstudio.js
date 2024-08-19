import { SimpleLogger, type Validator } from "@lmstudio/lms-common";
import { type LLMPort } from "@lmstudio/lms-external-backend-interfaces";
import { type ModelDescriptor, type ModelSpecifier } from "@lmstudio/lms-shared-types";
import { type SpecificModel } from "../modelShared/SpecificModel";
import { LLMDynamicHandle } from "./LLMDynamicHandle";

/**
 * Represents a specific loaded LLM. Most LLM related operations are inherited from
 * {@link LLMDynamicHandle}.
 *
 * @public
 */
export class LLMSpecificModel
  extends LLMDynamicHandle
  implements
    SpecificModel<// prettier-ignore
    /** @internal */ LLMPort>
{
  public readonly identifier: string;
  public readonly path: string;
  /** @internal */
  public constructor(
    llmPort: LLMPort,
    instanceReference: string,
    descriptor: ModelDescriptor,
    validator: Validator,
    logger: SimpleLogger = new SimpleLogger(`LLMSpecificModel`),
  ) {
    const specifier: ModelSpecifier = {
      type: "instanceReference",
      instanceReference,
    };
    super(llmPort, specifier, validator, logger);
    this.identifier = descriptor.identifier;
    this.path = descriptor.path;
  }
}
