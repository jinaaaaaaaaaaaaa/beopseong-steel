import styled from "styled-components";
import { Colors, FontStyles } from "../../styles";

export const Container = styled.div<{ $active: boolean; $dimmed: boolean }>`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: ${({ $dimmed }) => ($dimmed ? 0.3 : 1)};
  z-index: ${({ $active }) => ($active ? 10 : 1)};
`;

export const BackgroundCircle = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? "#f1711bff" : Colors.Main10)};
  box-shadow: ${({ $active }) =>
    $active
      ? "0 12px 30px rgba(0,0,0,0.25)"
      : "0 6px 18px rgba(0,0,0,0.18), 0 0 0 4px rgba(255,255,255,0.2)"};
  transition: transform 0.25s ease, background-color 0.25s ease;
  transform: ${({ $active }) => ($active ? "scale(1.25)" : "scale(1)")};
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  ${FontStyles.LG_Bold}
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

export const InfoText = styled.div`
  ${FontStyles.SM_Medium}
  text-align: center;
  opacity: 0.9;
`;
