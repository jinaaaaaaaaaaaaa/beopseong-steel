import * as S from "./ImageSlider.stlyed";
import InfoImg1 from "../../assets/images/infoImg1.jpg";
import InfoImg2 from "../../assets/images/infoImg2.jpg";
import InfoImg3 from "../../assets/images/infoImg3.jpg";
import { useEffect, useState } from "react";

const images = [InfoImg1, InfoImg2, InfoImg3];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드 (3초마다)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3초마다 변경

    // 컴포넌트 사라질 때 타이머 정리
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <S.Container>
      <S.ArrowButton $direction="left" onClick={handlePrev}>
        ‹
      </S.ArrowButton>

      <S.Image src={images[currentIndex]} alt={`slide-${currentIndex}`} />

      <S.ArrowButton $direction="right" onClick={handleNext}>
        ›
      </S.ArrowButton>

      {/* 아래 동그라미 인디케이터 (선택사항) */}
      <S.DotsWrapper>
        {images.map((_, idx) => (
          <S.Dot
            key={idx}
            $active={idx === currentIndex}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </S.DotsWrapper>
    </S.Container>
  );
};

export default ImageSlider;
