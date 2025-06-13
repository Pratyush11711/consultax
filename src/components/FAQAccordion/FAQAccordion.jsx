import React, { useState } from 'react';
import './FAQAccordion.css';

const faqData = [
  {
    category: "Payments",
    items: [
      {
        question: "What is World Financial Group (WFG)?",
        answer: "World Financial Group offers life insurance, among other products and services, to clients through its affiliated insurance agency, World Financial Group Insurance Agency, LLC (WFGIA). In addition, agents also provide clients with information about financial fundamentals so they can make sound decisions both now and in the future. These things combined help clients plan for their financial future.",
      },
      {
        question: "Why Should I Talk to a WFG Agent?",
        answer: " In learning about WFG, prospective clients learn about financial topics, and through this, they typically take action to increase their financial resilience. In doing so, clients can gain more knowledge about financial options and concepts. The journey of learning about financial options helps people gain confidence and reduce their anxiety about money and their future finances.\n Independent WFG agents have the ability to offer products and services from a broad array of financial services Independent WFG agents have the ability to offer products and services from a broad array of financial services providers, which allows them to find a suitable solution for their clients.\nWe have been able to validate that our independent agents' work through WFG has made an impact on their lives—but we discovered we have made an impact on our clients' lives.\n WFG agents are highly trained and have ongoing training to keep current on the latest information on insurance and financial topics.",
      },
      {
        question: "Why Join WFG?",
        answer: "World Financial Group offers a variety of tools and resources that other companies may not. Additionally, we have a unique compensation and field-advancement system that encourages people to grow in their careers.",
      },
      {
        question: "How Do I Join WFG?",
        answer: "Please contact this agent in your area if you are interested in becoming part of WFGIA and have not yet been contacted. You will need to sign an Associate Acknowledgement & Non-Disclosure Agreement, if you’re not currently life licensed, or an Agent Agreement if you already have an active life insurance license in your state of residency. You will pay a one-time, $125 fee that goes directly to the home office and is used for administrative costs such as running a background check and other items.",
      },      {
        question: "Where Does WFG Conduct Business?",
        answer: " In the United States, the Virgin Islands, Puerto Rico, and Canada.",
      }, {
        question: "How Long Does It Take to Become a Licensed Agent with WFG?",
        answer: " New associates have nine months to earn their life insurance license. WFG provides an onboarding platform with training videos and discounted pre-licensing courses from several different educational providers. Typically, most associates become licensed within three to four months.",
      },
      {
        question: "What Types of Providers and Other Companies Are Available Through WFG?",
        answer: " Products are offered through several well-known companies, including Transamerica, Nationwide, American Financial Solutions Group (AMS), Prudential and Pacific Life.",
      },      {
        question: "How Is WFGIA Regulated?",
        answer: "  WFGIA is regulated by state departments of insurance as well as federal regulations as they apply to life insurance. The WFG home office also has a full compliance team responsible for monitoring agent behavior and ensuring best ethical practices are being followed by our agents at all times.",
      },      {
        question: "How Large Is WFGIA?",
        answer: " There are currently more than 78,000 WFG insurance agents across North America.Numbers are based on the 2024 internal analysis and survey of the WFG life-licensed agents as of May 31, 2024.",
      },      {
        question: "Who Owns WFGIA?",
        answer: "WFGIA is a Transamerica company, which is a subsidiary of Aegon (NYSE: AEG), a global provider of pensions, insurance and asset management headquartered in the Netherlands.",
      },    {
        question: "Who Is President of WFG?",
        answer: "Todd Buchanan is a seasoned financial services executive, bringing more than 25 years of experience in insurance distribution, digital transformation, retirement, and wealth management leadership to his new roles. Most recently, Todd served as the U.S. CEO for Coherent, one of the fastest-growing insurance technology companies in the world. He is also a veteran of the U.S. Army, having spent six years as a Field Artillery Officer and attaining the rank of Captain. Todd serves on the boards of the Tampa Bay Sports Commission, ReliaQuest Bowl and Cogent Bank, and resides in Tampa, Florida with his wife and three children.",
      },    {
        question: "When Was the Company Founded?",
        answer: " World Financial Group was formed in 2001 with the mission of serving the financial needs of middle-income individuals, families, and businesses across North America. This mission continues today.",
      },    {
        question: "Does WFG Go by Other Names?",
        answer: "Prior to 2001, a similar company named World Marketing Alliance (WMA) existed. When Aegon purchased certain assets of WMA it was renamed to World Financial Group. WFG Direct is a California-only platform that enables sales representatives to offer home security products and education planning services.",
      },    {
        question: "What Is FIQ?",
        answer: "FIQ, or Financial Intelligence Quotient, was developed by World Financial Group as a measurement of a person’s attitudes towards their own financial resilience. With five simple questions based on preparedness, knowledge, control and more, you and your agent can assess your ability to withstand any type of financial shock. The higher your score, the more financially resilient you are! And making our clients more financial resilient—more prepared for their financial future—is our goal! In our annual FIQ study that includes questions to the general population as well as WFG clients, we see strong changes in the financial resilience of our clients as well as in their financial literacy. To learn more, please ask your agent to share the FIQ study results with you or visit www.MyFinancialIQ.com.",
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
