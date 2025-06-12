import React, { useState } from 'react';
import './FAQAccordion.css';

const faqData = [
  {
    category: "Payments",
    items: [
      {
        question: "Which device can I use to enter your service?",
        answer: "You can access our service from any device with an internet connection.",
      },
      {
        question: "What are your products and services?",
        answer: "We offer a wide range of services tailored to your needs.",
      },
      {
        question: "How can I contact your customer support department?",
        answer: "You can contact our customer support department by [provide contact information such as phone number or email] during our business hours. Our team is ready to assist you with any inquiries or concerns.",
      },
      {
        question: "Can I return items if I'm not satisfied?",
        answer: "Yes, you can return items within [specify time frame] if you are not satisfied. Please review our return policy for further instructions.",
      },
    ],
  },
  {
    category: "Suggestion",
    items: [
      {
        question: "What is your warranty policy?",
        answer: "We offer a [specify duration] warranty on our products. Please see our warranty policy for specific details and coverage.",
      },
      {
        question: "What are your shipping and delivery policies?",
        answer: "Our shipping and delivery policies vary depending on the location and shipping method chosen. Please refer to our shipping page for detailed information.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods, including [list accepted payment methods]. You can choose the most convenient option during the checkout process.",
      },
      {
        question: "Do you have a customer loyalty program?",
        answer: "Yes, we have a customer loyalty program. Earn points with each purchase and enjoy exclusive benefits. Join now to start earning rewards!",
      },
    ],
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">FAQ</h2>
      <p className="faq-subtext">
        Explore our frequently asked questions and our answers to them
      </p>
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h3 className="faq-category">{section.category}</h3>
          {section.items.map((item, itemIndex) => {
            const index = `${sectionIndex}-${itemIndex}`;
            const isActive = activeIndex === index;
            return (
              <div className={`faq-item ${isActive ? 'active' : ''}`} key={index}>
                <div
                  className="faq-question"
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{isActive ? '−' : '+'}</span>
                </div>
                {isActive && <div className="faq-answer">{item.answer}</div>}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
