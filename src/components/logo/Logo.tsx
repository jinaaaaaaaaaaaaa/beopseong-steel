import * as S from "./Logo.styled";
import LogoIcon from "../../assets/images/로고2.png";

const Logo = () => {
  return (
    <S.Container>
      <S.Logo src={LogoIcon} />
      <S.NamePart>
        <S.FirstName>법성철강</S.FirstName>
        <S.SecondName>Sambo Steel</S.SecondName>
      </S.NamePart>
    </S.Container>
  );
};

export default Logo;
