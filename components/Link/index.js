import styled, { css } from "styled-components";
const { default: Link } = require("next/link");

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-smoke);

  ${({ $isFlexColumn }) =>
    $isFlexColumn &&
    css`
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      &:hover {
        letter-spacing: 0.3px;
      }
    `}
`;
