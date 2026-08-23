import { Fragment, ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";
import { AGENTIC_FACTORY_URL } from "./constants";

const TARGET = "agentic-factory.fr";

const InlineLink = styled(Link)`
  color: inherit;
  text-decoration: underline;
`;

// Translation strings mention "agentic-factory.fr" as plain text (bullets,
// FAQ answers) rather than JSX, so there's no way to embed a real <Link>
// there directly — this finds every literal occurrence and swaps it in at
// render time, leaving the rest of the string untouched.
export const linkifyAgenticFactory = (text: string): ReactNode => {
  const parts = text.split(TARGET);
  if (parts.length === 1) return text;

  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 && (
        <InlineLink
          href={AGENTIC_FACTORY_URL}
          target="_blank"
          rel="noreferrer"
        >
          {TARGET}
        </InlineLink>
      )}
    </Fragment>
  ));
};
