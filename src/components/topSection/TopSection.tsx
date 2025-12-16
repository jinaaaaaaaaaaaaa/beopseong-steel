import Header from "../header/Header";
import * as S from "./TopSection.styled";
import MainImg from "../../assets/images/Main.jpg";
import ImageSlider from "../imageSlider/ImageSlider";
import InfoGroup from "../infogroup/InfoGroup";

const TopSection = () => {
  return (
    <S.Container>
      <S.BackgroundImg src={MainImg} alt="main" />
      <Header />
      <S.Title>
        <S.MainTitle>철판·고철·스테인리스 전문 매입</S.MainTitle>
        <S.SubTitle>공장·산업현장 고철 처리 원스톱 서비스</S.SubTitle>
      </S.Title>
      <S.Content>
        <InfoGroup />
        <ImageSlider />
      </S.Content>
    </S.Container>
  );
};

export default TopSection;
