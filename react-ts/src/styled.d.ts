import "styled-components";

// see https://styled-components.com/docs/api#usage-with-typescript
import {} from "styled-components/cssprop";

// see https://styled-components.com/docs/api#create-a-declarations-file
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme {}
}
