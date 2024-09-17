import React, { useState, useRef, useEffect } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: 'How do I hire a hardware programmer?',
        answer: 'You can browse through profiles of hardware programming experts, view their portfolios, and send a request for a custom project or consultation.',
    },
    {
        question: 'What is the process for developing hardware solutions?',
        answer: 'The hardware programmer will typically review your project requirements, design schematics, build prototypes, and finalize the hardware design. The process may also involve software integration, testing, and debugging.',
    },
    {
        question: 'Can I get a refund if the project doesn’t meet my expectations?',
        answer: 'Refunds are subject to the terms agreed upon in the project contract. We recommend setting clear milestones and expectations with the hardware programmer before starting a project.',
    },
    {
        question: 'How do I manage a project with a hardware programmer?',
        answer: 'Use the platform’s project management tools to track milestones, set deadlines, and communicate with your hardware programmer regularly to ensure the project stays on track.',
    },
    {
        question: 'What type of hardware projects can I post?',
        answer: 'You can post a wide range of hardware projects, including embedded systems, IoT devices, PCB design, robotics, and more. Ensure your project description is detailed to attract the right talent.',
    },
    {
        question: 'How do I make payments for a hardware programming project?',
        answer: 'Payments are made securely through the platform, either on a milestone basis or upon project completion. Be sure to review and approve each milestone before making payments.',
    },
    {
        question: 'How do I verify the skills of a hardware programmer?',
        answer: 'You can check the hardware programmer’s profile for certifications, past projects, and reviews from previous clients. You can also conduct interviews or request sample work to ensure their expertise fits your needs.',
    },
    {
        question: 'What if I encounter a technical issue with my hardware product after the project is completed?',
        answer: 'You can negotiate post-project support or warranty terms with the hardware programmer. Alternatively, you can hire them again for maintenance or troubleshooting services.'
    },
];


const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const answerRefs = useRef<(HTMLDivElement | null)[]>([]); // Store references to answer elements

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed
    };

    useEffect(() => {
        answerRefs.current.forEach((ref, idx) => {
            if (ref) {
                if (openIndex === idx) {
                    ref.style.height = `${ref.scrollHeight}px`; // Expand
                } else {
                    ref.style.height = '0'; // Collapse
                }
            }
        });
    }, [openIndex]);

    return (
        <div className={styles.faqContainer}>
            <h2 className={styles.faqHeadertext}>FAQs</h2>
            <div className={styles.faqItems}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className={styles.faqQuestion}>
                            {faq.question}
                            <span className={`${styles.faqIcon} ${openIndex === index ? styles.openIcon : ''}`}>{openIndex === index ? '-' : '+'}</span>
                        </div>
                        <div
                            ref={(el) => (answerRefs.current[index] = el)}
                            className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ''}`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
