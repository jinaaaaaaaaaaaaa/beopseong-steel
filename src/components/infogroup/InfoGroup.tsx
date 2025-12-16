import * as S from "./InfoGroup.styled";
import Money from "../../assets/icons/Money.png";
import Time from "../../assets/icons/Time.png";
import Clean from "../../assets/icons/Clean.png";
import Trust from "../../assets/icons/Trust.png";
import InfoCard from "../infoCard/InfoCard";
import { useState } from "react";

const InfoItems = [
  {
    icon: Money,
    text: "당일 정산 원칙",
    subText: "상차 후 당일 정산을 원칙으로 하며 늦어도 익일 지급을 보장합니다.",
  },
  {
    icon: Time,
    text: "원하는 시간 투입",
    subText: "주·야간 및 점심시간 등 현장 일정에 맞춰 탄력적으로 투입합니다.",
  },
  {
    icon: Clean,
    text: "수거 후 현장 정리",
    subText: "고철 수거 후 잔여물 정리와 현장 마무리까지 깔끔하게 처리합니다.",
  },
  {
    icon: Trust,
    text: "정확한 계근·정산",
    subText: "투명한 계근과 정직한 단가로 믿을 수 있는 거래를 약속드립니다.",
  },
];

const InfoGroup = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <S.InfoGrid>
      {InfoItems.map((item, index) => (
        <InfoCard
          key={item.text}
          icon={item.icon}
          info={item.text}
          subInfo={item.subText}
          isActive={hoverIndex === index}
          isDimmed={hoverIndex !== null && hoverIndex !== index}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        />
      ))}
    </S.InfoGrid>
  );
};

export default InfoGroup;
