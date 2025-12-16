import styled from "styled-components";
import { FontStyles } from "../../styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SidePart = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

export const Ment = styled.span`
  ${FontStyles.MD1_Medium}
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const CallButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  cursor: pointer;
  text-decoration: none;

  background: rgba(0, 0, 0, 0.55);
  color: white;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;
