import { applyDecorators, SetMetadata } from "@nestjs/common";
import {AuthModeOff} from "src/consts/auth-mode-off";

export const SetAuthModeOff = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decorator = SetMetadata(AuthModeOff, true);
  return applyDecorators(decorator);
};
