import { useState } from "react";
import { Accordion } from "react-bootstrap";

const faqsData = [
  "Industry Expertise",
  "Tailored Solutions",
  "Global Reach",
  "Commitment to Compliance",
];

const Index2Accordion = () => {
  const [active, setActive] = useState("collapse1");
  const onClick = (value) =>
    value == active ? setActive(null) : setActive(value);
  return (
    <div className="faq-accordion-three wow fadeInUp" id="accordionOne">
      <Accordion className="accordion" defaultActiveKey={active}>
        {faqsData.map((faq, i) => (
          <div key={faq} className="accordion-card">
            <div className="card-header">
              <Accordion.Toggle
                as="h5"
                eventKey={`collapse${i + 1}`}
                aria-expanded={active == faq ? "true" : "false"}
                onClick={() => onClick(faq)}
              >
                {faq}
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={`collapse${i + 1}`}>
              <div className="card-body">
                <p>
                  We know the export-import landscape inside out.
                </p>
              </div>
            </Accordion.Collapse>
          </div>
        ))}
      </Accordion>

    </div>
  );
};
export default Index2Accordion;
