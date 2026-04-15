import React, { useState } from 'react';

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Como posso participar da turma do bem?',
      answer: 'Você pode se inscrever através do formulário disponível no nosso site.',
    },
    {
      question: 'Quais são os requisitos para participar?',
      answer: 'Basta ter interesse em ajudar e disponibilidade para participar das atividades.',
    },
    {
      question: 'Como são organizados os eventos?',
      answer: 'Os eventos são planejados pela equipe com base nas necessidades da comunidade.',
    },
  ];

  return (
    <div className="min-h-screen bg-base text-text px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">
        <h1 className="text-5xl font-semibold tracking-tight">Perguntas Frequentes</h1>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-apple-lg overflow-hidden">
              <button
                className="w-full p-4 text-left bg-mantle hover:bg-accent/10 focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-subtext">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Faq;