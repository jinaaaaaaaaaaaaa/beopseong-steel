import styled from "styled-components";
import { Colors, FontStyles } from "../../styles";

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

export const Title = styled.div`
  color: ${Colors.G10};
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 70px;
`;

export const MainTitle = styled.p`
  ${FontStyles.XXL_Bold}
`;

export const SubTitle = styled.p`
  ${FontStyles.XL_SemiBold}
`;

export const Content = styled.div`
  position: relative;
  z-index: 1; /* 이미지 위에 올라옴 */
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  gap: 150px;
  align-items: center;
`;
