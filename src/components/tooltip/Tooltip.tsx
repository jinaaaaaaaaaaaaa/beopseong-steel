import * as S from "./Tooltip.styled";

type Props = {
  label: string;
  children: React.ReactNode;
};

const Tooltip = ({ label, children }: Props) => {
  return (
    <S.Wrap>
      {children}
      <S.Bubble>{label}</S.Bubble>
    </S.Wrap>
  );
};

export default Tooltip;
