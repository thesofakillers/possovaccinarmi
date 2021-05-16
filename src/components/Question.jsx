import React from "react";
import { useDispatch } from "react-redux";
import { answerQuestion, setQuestion } from "../state/rootSlice";

const questionMap = {
  0: { text: "Sei un ospite di un' RSA?", nextQuestion: 1 },
  1: { text: "Fai parte del personale di un' RSA?", nextQuestion: 2 },
  2: { text: "Sei un operatore sanitario o sociosanitario?", nextQuestion: 3 },
  3: { text: "Hai almeno 60 anni?", nextQuestion: 5 },
  4: { text: "Hai almeno 40 anni?", nextQuestion: 6 },
  5: {
    text: (
      <div>
        Sei una{" "}
        <a
          href="https://www.salutelazio.it/documents/10182/59078875/01_Allegato_3_circ_0005079_09_02_21.pdf/a4fd4b3b-04f8-ff6b-0f1f-967d34377369"
          target="_blank"
          rel="noreferrer"
        >
          persona estremamente vulnerabile?
        </a>
      </div>
    ),
    nextQuestion: 4,
  },
  6: {
    text: (
      <div>
        Soffri di una o più delle patologie elencate nella{" "}
        <a
          href="http://www.salute.gov.it/imgs/C_17_pubblicazioni_3014_allegato.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Tabella 4
        </a>
        ?
      </div>
    ),
    nextQuestion: 7,
  },
  7: {
    text: (
      <div>
        Fai parte del personale scolastico e universitario<br></br>
        docente e non docente?
      </div>
    ),
    nextQuestion: 8,
  },
  8: {
    text: "Sei membro delle Forze Armate o della Polizia?",
    nextQuestion: 9,
  },
  9: {
    text: "Fai parte del personale carcerario o della Polizia penitenziaria?",
    nextQuestion: 10,
  },
  10: {
    text: "Sei un detenuto penitenziario?",
    nextQuestion: 11,
  },
  11: {
    text: "Lavori in luoghi di comunità del tipo civile o religioso?",
    nextQuestion: null,
  },
};

export const Question = (props) => {
  const dispatch = useDispatch();
  const questionID = props.id;
  const questionText = questionMap[questionID].text;
  const nextQuestion = questionMap[questionID].nextQuestion;

  const handleYes = (e) => {
    e.preventDefault();
    dispatch(answerQuestion({ question_id: questionID, answer: true }));
  };
  const handleNo = (e) => {
    e.preventDefault();
    dispatch(answerQuestion({ question_id: questionID, answer: false }));
    dispatch(setQuestion(nextQuestion));
  };
  return (
    <div>
      <div className="block is-size-3 is-size-5-mobile">{questionText}</div>
      <div className="block buttons are-large">
        <button className="button is-link" onClick={handleYes}>
          Sì
        </button>
        <button className="button is-dark" onClick={handleNo}>
          No
        </button>
      </div>
    </div>
  );
};
