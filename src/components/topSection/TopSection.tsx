import Header from "../header/Header";
import * as S from "./TopSection.styled";
import MainImg from "../../assets/images/Main.jpg";
import ImageSlider from "../imageSlider/ImageSlider";

const TopSection = () => {
  return (
    <S.Container>
      <S.BackgroundImg src={MainImg} alt="main" />
      <Header />
      <S.Content>
        <S.Info>각종 철판/고철/스덴 매입합니다. 공장고철 매입 전문.</S.Info>
        <ImageSlider />
      </S.Content>
    </S.Container>
  );
};

export default TopSection;
