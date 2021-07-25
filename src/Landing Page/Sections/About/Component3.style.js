import styled from "styled-components";

// For styling any nested component, Overlay use the styled method.
// This method works perfectly on all of your any third-party component, as long as they attach the passed className prop to a DOM element.
// Here an example: https://gist.github.com/Miniplop/80b042d1b44293329ef7332fd47b770c

// Nested component imports
import { Component1, Component2 } from "components";

export const Component3 = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const StyledComponent1 = styled(Component1)`
  margin-right: 66px;
`;
export const StyledComponent2 = styled(Component2)`
  align-self: stretch;
`;