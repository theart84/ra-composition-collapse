import React, { useState } from "react";
import "./App.css";
import Collapse from "./components/Collapse/Collapse";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [paragraphHeight, setParagraphHeight] = useState(0);

  const onExpandedChangeHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const getHeightOfParagraph = (value) => {
    setParagraphHeight(value);
  };

  return (
    <div className="container">
      <Collapse
        collapsedLabel="Подробнее"
        expandedLabel="Скрыть"
        height={paragraphHeight}
        getHeight={getHeightOfParagraph}
        isExpanded={isExpanded}
        onExpandedChange={onExpandedChangeHandler}
      >
        <Paragraph getHeight={getHeightOfParagraph}>
          «Звёздные во́йны» (англ. Star Wars, МФА: [stɑːɹ wɔːɹz]) — медиафраншиза
          в жанре космическая опера, включающая в себя 11 художественных фильмов
          (9 эпизодов основной саги, также известна как «Сага Скайуокеров» и 2
          фильма «историй»), а также анимационные сериалы, мультфильмы,
          телефильмы, книги, комиксы, видеоигры, игрушки и прочие произведения,
          созданные в рамках единой фантастической вселенной «Звёздных войн»,
          задуманной и реализованной американским режиссёром Джорджем Лукасом в
          конце 1970-х годов и позднее расширенной.
        </Paragraph>
      </Collapse>
    </div>
  );
}

export default App;
