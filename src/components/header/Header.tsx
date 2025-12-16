import * as S from "./Header.styled";
import Logo from "../logo/Logo";
import CallIcon from "../../assets/icons/Call.png";
import { useModalStore } from "../../stores/useModalStore";
import { useToastStore } from "../../stores/useToastStore";

const phoneNumber = "010-4455-2964";

const Header = () => {
  const openModal = useModalStore((s) => s.openModal);
  const { showToast, isDisabled } = useToastStore();

  const handleClick = (e: React.MouseEvent) => {
    if (window.innerWidth > 768) {
      if (isDisabled) return;
      e.preventDefault();
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          showToast("전화번호가 복사되었습니다.");
        })
        .catch(() => {
          alert("복사에 실패했습니다. 직접 연결해주세요!");
        });
    }
  };

  return (
    <S.Container>
      <Logo />
      <S.SidePart>
        <S.Ment onClick={() => openModal("directions")}>오시는길</S.Ment>
        <S.CallButton href={`tel:${phoneNumber}`} onClick={handleClick}>
          <S.Icon src={CallIcon} alt="call" />
          <S.Ment>전화문의 {phoneNumber}</S.Ment>
        </S.CallButton>
      </S.SidePart>
    </S.Container>
  );
};

export default Header;
