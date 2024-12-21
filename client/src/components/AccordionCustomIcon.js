import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const AccordionCustomIcon = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (id) => setOpen(open === id ? 0 : id);

  const Icon = ({ id }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`h-5 w-5 transition-transform ${
        id === open ? "rotate-180" : ""
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  const accordions = [
    {
      id: 1,
      title: "What is Material Tailwind?",
      body: "Material Tailwind helps you create beautiful user interfaces faster with prebuilt components.",
    },
    {
      id: 2,
      title: "How to use Material Tailwind?",
      body: "You can integrate Material Tailwind into your project by installing the package and importing the components you need.",
    },
    {
      id: 3,
      title: "What can I do with Material Tailwind?",
      body: "You can build responsive and modern UIs for your applications with ease and consistency.",
    },
  ];

  return (
    <>
      {accordions.map(({ id, title, body }) => (
        <Accordion key={id} open={open === id} icon={<Icon id={id} />}>
          <AccordionHeader onClick={() => handleOpen(id)}>
            {title}
          </AccordionHeader>
          <AccordionBody>{body}</AccordionBody>
        </Accordion>
      ))}
    </>
  );
};

export default AccordionCustomIcon;
