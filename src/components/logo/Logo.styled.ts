import styled from "styled-components";
import { FontStyles } from "../../styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
`;

export const NamePart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstName = styled.span`
  ${FontStyles.LG_Bold}
`;

export const SecondName = styled.span`
  ${FontStyles.MD2_Medium}
`;
