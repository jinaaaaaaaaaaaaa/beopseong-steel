import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px 50px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 비율 유지하며 꽉 채우기 */
  opacity: 0.6; /* ← 원하는 투명도 */
  z-index: -1; /* 뒤로 */
`;

export const Content = styled.div`
  position: relative;
  z-index: 1; /* 이미지 위에 올라옴 */
  display: flex;
  width: 100%;
  padding: 50px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.p``;
