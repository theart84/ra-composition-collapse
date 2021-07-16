import React, { useState } from 'react';
import './App.css';
import Collapse from './components/Collapse/Collapse';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const onExpandedChangeHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="container">
      <Collapse
        collapsedLabel="Подробнее"
        expandedLabel="Скрыть"
        isExpanded={isExpanded}
        onExpandedChange={onExpandedChangeHandler}
      >
        <Paragraph>
          «Звёздные во́йны» (англ. Star Wars, МФА: [stɑːɹ wɔːɹz]) — медиафраншиза в жанре космическая
          опера, включающая в себя 11 художественных фильмов (9 эпизодов основной саги, также
          известна как «Сага Скайуокеров» и 2 фильма «историй»), а также анимационные сериалы,
          мультфильмы, телефильмы, книги, комиксы, видеоигры, игрушки и прочие произведения,
          созданные в рамках единой фантастической вселенной «Звёздных войн», задуманной и
          реализованной американским режиссёром Джорджем Лукасом в конце 1970-х годов и позднее
          расширенной.
        </Paragraph>
      </Collapse>
    </div>
  );
}

export default App;
