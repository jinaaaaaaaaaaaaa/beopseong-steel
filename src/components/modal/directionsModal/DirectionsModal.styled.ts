import styled from "styled-components";
import { Colors, FontStyles } from "../../../styles";

export const Container = styled.div`
  background-color: white;
  border-radius: 30px;
  width: 800px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const XButton = styled.img`
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
`;

export const Title = styled.p`
  color: ${Colors.G10};
  ${FontStyles.LG_Medium}
  > span {
    ${FontStyles.XL_Bold}
  }
`;

export const Navi = styled.div`
  position: relative;
  display: flex;
`;

export const NaviImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: fill;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
`;

export const GoNavi = styled.a`
  position: absolute;
  bottom: 10px;
  right: 15px;
  text-decoration: none;
  color: ${Colors.Grayscale60};
  ${FontStyles.SM_Medium};
  z-index: 1000;
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  ${FontStyles.MD1_Medium};
  gap: 10px;
`;

export const LocateIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const CopyIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
