import React, { useState } from 'react';

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [showCorrect, setShowCorrect] = useState(false);

  function handleChange(qIndex, value) {
    setAnswers(prev => ({ ...prev, [qIndex]: value }));
  }

  function handleSubmit() {
    setShowCorrect(true);
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correct++;
    });
    setResults(`Hai risposto correttamente a ${correct} su ${questions.length}`);
  }

  return (
    <div>
      {questions.map((q, i) => (
        <div key={i} className="mb-4 p-3 border rounded">
          <p className="font-semibold">{q.question}</p>
          {Object.entries(q.answers).map(([letter, text]) => {
            let bgColor = '';
            if (showCorrect) {
              if (letter === q.correctAnswer) bgColor = 'bg-green-200';
              else if (answers[i] === letter && letter !== q.correctAnswer) bgColor = 'bg-red-200';
            }
            return (
              <label
                key={letter}
                className={`block mb-1 cursor-pointer p-1 rounded ${bgColor}`}
              >
                <input
                  type="radio"
                  name={`question${i}`}
                  value={letter}
                  checked={answers[i] === letter}
                  onChange={() => handleChange(i, letter)}
                  className="mr-2"
                  disabled={showCorrect}
                />
                {letter}: {text}
              </label>
            );
          })}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded mt-2 cursor-pointer"
      >
        Controlla Risposte
      </button>
      {results && <div className="mt-2 font-bold">{results}</div>}
    </div>
  );
}
