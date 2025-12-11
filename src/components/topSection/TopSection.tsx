import Header from "../header/Header";
import * as S from "./TopSection.styled";
import MainImg from "../../assets/images/Main.jpg";

const TopSection = () => {
  return (
    <S.Container>
      <S.BackgroundImg src={MainImg} alt="main" />
      <S.Content>
        <Header />
      </S.Content>
    </S.Container>
  );
};

export default TopSection;
