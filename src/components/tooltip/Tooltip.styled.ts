import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  display: inline-flex;
`;

export const Bubble = styled.span`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-6px);

  padding: 6px 8px;
  border-radius: 8px;
  background: #111;
  color: #fff;
  font-size: 12px;
  white-space: nowrap;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;

  ${Wrap}:hover & {
    opacity: 1;
  }
`;
