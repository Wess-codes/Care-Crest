// src/data/services.ts
import {
    UserPlus,
    Brain,
    RefreshCcw,
    Accessibility,
    HeartPulse,
    Baby,
  } from "lucide-react";
  
  export const services = [
    {
      slug: "elder-care",
      title: "Elder Care",
      icon: <UserPlus className="h-8 w-8 text-primary" />,
      image: "/se3.jpeg",
      description:
        "We provide professional elder care that helps seniors live with dignity, independence, and comfort in their own homes.",
      details: [
        "Daily living support",
        "Medication management",
        "Companionship and supervision",
      ],
    },
    {
      slug: "dementia-care",
      title: "Dementia Care",
      icon: <Brain className="h-8 w-8 text-primary" />,
      image: "/se4.jpeg",
      description:
        "Specialized care tailored to the needs of individuals living with memory loss.",
      details: [
        "Structured routines",
        "Cognitive stimulation",
        "Safe environment practices",
      ],
    },
    {
      slug: "post-op-recovery",
      title: "Post-Op Recovery",
      icon: <RefreshCcw className="h-8 w-8 text-primary" />,
      image: "/se1.jpeg",
      description:
        "Recover in the comfort of your home with professional help for faster healing.",
      details: [
        "Wound care & hygiene",
        "Physiotherapy assistance",
        "Mobility support",
      ],
    },
    {
      slug: "disability-support",
      title: "Disability Support",
      icon: <Accessibility className="h-8 w-8 text-primary" />,
      image: "/se3.jpeg",
      description:
        "We assist clients living with physical or cognitive challenges to thrive independently.",
      details: [
        "Mobility & transfer support",
        "Meal prep & daily care",
        "Inclusive communication",
      ],
    },
    {
      slug: "palliative-care",
      title: "Palliative Care",
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
      image: "/se17.jpeg",
      description:
        "Holistic care for individuals facing life-limiting illnesses, focused on dignity and comfort.",
      details: [
        "Pain management",
        "Emotional support",
        "Family collaboration",
      ],
    },
    {
      slug: "childcare",
      title: "Childcare",
      icon: <Baby className="h-8 w-8 text-primary" />,
      image: "/se7.jpeg",
      description:
        "Safe, loving, and developmentally appropriate care for children of all ages.",
      details: [
        "Feeding & hygiene",
        "Educational play",
        "Special needs support",
      ],
    },
  ];
 