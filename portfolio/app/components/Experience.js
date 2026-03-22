'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineData = [
    {
        date: "Jun '25 — Jul '25",
        title: 'Full-Stack Web Development (MERN)',
        org: 'Programming Pathshala',
        points: [
            'Mastered the MERN stack to build scalable, data-driven web applications.',
            'Developed RESTful APIs, JWT-based authentication, Middlewares, Indexing and Security.',
        ],
    },
    {
        date: "Sep '25",
        title: 'AWS Training & Certification',
        org: 'Amazon EC2 Basics',
        points: [
            'Completed hands-on training on deploying and managing EC2 instances.',
            'Learned about cloud infrastructure, security groups, and scaling strategies.',
        ],
    },
    {
        date: "Jan '26 — Present",
        title: 'Cloud Computing Certification',
        org: 'NPTEL Online — IIT Kharagpur',
        points: [
            'Studying cloud computing fundamentals through IIT Kharagpur\'s NPTEL program.',
            'Exploring distributed systems, virtualization, and cloud service models.',
        ],
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section experience-section" id="experience" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">Training & Certifications</p>
                    <h2 className="section-title">Learning Journey</h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="timeline">
                    {timelineData.map((item, i) => (
                        <motion.div
                            key={item.title}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                        >
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <span className="timeline-date">{item.date}</span>
                                <h3>{item.title}</h3>
                                <h4>{item.org}</h4>
                                <ul>
                                    {item.points.map((point, j) => (
                                        <li key={j}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
