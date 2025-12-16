import * as S from "./DirectionsModal.styled";
import Modal from "../Modal";
import { useModalStore } from "../../../stores/useModalStore";
import XIcon from "../../../assets/icons/XIcon.svg";
import Place from "../../../assets/images/Place.png";
import Location from "../../../assets/icons/Location.png";
import Copy from "../../../assets/icons/Copy.png";
import Tooltip from "../../tooltip/Tooltip";
import { useToastStore } from "../../../stores/useToastStore";

const address = "경남 김해시 주촌면 소망길 76-8";

const DirectionsModal = () => {
  const closeModal = useModalStore((s) => s.closeModal);
  const { showToast, isDisabled } = useToastStore();

  const copyAddress = () => {
    if (isDisabled) return;

    navigator.clipboard
      .writeText(address)
      .then(() => {
        showToast("주소가 복사되었습니다.");
      })
      .catch(() => {
        alert("복사에 실패했습니다. 다시 시도해주세요.");
      });
  };

  return (
    <Modal onClose={closeModal}>
      <S.Container>
        <S.XButton src={XIcon} onClick={closeModal} />
        <S.Title>
          <span>법성철강 </span> 오시는길
        </S.Title>
        <S.Navi>
          <S.NaviImg src={Place} alt="네이버 지도" />
          <S.GoNavi
            href="https://map.naver.com/p/search/%EB%B2%95%EC%84%B1%EC%B2%A0%EA%B0%95/place/21902744?c=15.00,0,0,0,dh&placePath=/home?entry=pll&from=map&fromPanelNum=2&timestamp=202512161641&locale=ko&svcName=map_pcv5&searchText=%EB%B2%95%EC%84%B1%EC%B2%A0%EA%B0%95"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도로 보기 →
          </S.GoNavi>
        </S.Navi>
        <S.Address>
          <S.LocateIcon src={Location} />
          {address}
          <Tooltip label="복사하기">
            <S.CopyIcon src={Copy} onClick={copyAddress} />
          </Tooltip>
        </S.Address>
      </S.Container>
    </Modal>
  );
};

export default DirectionsModal;
