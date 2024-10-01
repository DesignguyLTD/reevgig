import React, { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: 'How do I get a refund?',
        answer: 'You can get a refund by contacting our support team via the contact form or email.',
    },
    {
        question: 'What is the return policy?',
        answer: 'Our return policy is 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.',
    },
    {
        question: 'Can I exchange an item?',
        answer: 'Exchanges are possible within 30 days of purchase. Contact our support team to initiate an exchange.',
    },
    {
        question: 'Can I exchange an item?',
        answer: 'Exchanges are possible within 30 days of purchase. Contact our support team to initiate an exchange.',
    },
    {
        question: 'Can I exchange an item?',
        answer: 'Exchanges are possible within 30 days of purchase. Contact our support team to initiate an exchange.',
    },
    {
        question: 'Can I exchange an item?',
        answer: 'Exchanges are possible within 30 days of purchase. Contact our support team to initiate an exchange.',
    },
    ];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed
    };

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
                            <div className={styles.faqQuestion1}>{faq.question}</div>
                            <div className={`${styles.faqIcon} ${openIndex === index ? styles.openIcon : ''}`}>
                                {openIndex === index ? '-' : '+'}
                            </div>
                        </div>
                        <div
                            className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ''}`}
                            style={{ maxHeight: openIndex === index ? '75px' : '0px' }} // Adjust max-height for smooth transitions
                        >
                            <div className={styles.faqAnswerContent}>{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
