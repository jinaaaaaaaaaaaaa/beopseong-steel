import styled from "styled-components";
import { Colors } from "../../styles";

export const Container = styled.div`
  position: relative; /* 화살표 & 점 배치를 위해 필요 */
  width: 600px;
  height: 400px;
  background-color: ${Colors.Main20};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 이미지 넘칠 때 잘림 방지 */
`;

export const Image = styled.img`
  width: 590px;
  height: 390px;
  border-radius: 30px;
  object-fit: cover; /* 이미지 꽉 채우기 */
`;

/* 좌우 화살표 버튼 */
export const ArrowButton = styled.button<{ $direction: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$direction === "left" ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  border: none;
  background: rgba(0, 0, 0, 0.35);
  color: white;
  padding: 8px 14px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.55);
  }
`;

/* 점(Indicator) wrapper */
export const DotsWrapper = styled.div`
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

/* 점 하나 */
export const Dot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: ${({ $active }) =>
    $active ? "white" : "rgba(255, 255, 255, 0.4)"};
  transition: background 0.2s ease;
`;
