"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What kind of projects do you work on?",
    answer:
      "We specialize in custom web applications, mobile apps, enterprise solutions, and digital transformation projects. From MVPs to full-scale products, we handle it all.",
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "Costs vary depending on the complexity and scope of the project. We provide a transparent breakdown of expenses after understanding your requirements.",
  },
  {
    question: "How long does it take to deliver a project?",
    answer:
      "Timelines depend on the project size and features. MVPs can take 4–6 weeks, while enterprise-grade solutions may take several months. We always share realistic timelines before starting.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes, we offer flexible support and maintenance plans. This includes regular updates, bug fixes, performance optimization, and feature enhancements.",
  },
  {
    question: "Can you scale the solution as my business grows?",
    answer:
      "Absolutely. We design all solutions with scalability in mind, ensuring they can handle increased users, features, and integrations as your business expands.",
  },
];
