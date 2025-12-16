import * as S from "./InfoCard.styled";

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  info: string;
  subInfo: string;
  isActive: boolean;
  isDimmed: boolean;
}

const InfoCard = ({
  icon,
  info,
  subInfo,
  isActive,
  isDimmed,
  ...rest
}: InfoCardProps) => {
  return (
    <S.Container $active={isActive} $dimmed={isDimmed} {...rest}>
      <S.BackgroundCircle $active={isActive} />
      <S.Content>
        <S.Icon src={icon} alt={info} />
        {info}
        {isActive && <S.InfoText>{subInfo}</S.InfoText>}
      </S.Content>
    </S.Container>
  );
};

export default InfoCard;
