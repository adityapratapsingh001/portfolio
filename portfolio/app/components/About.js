'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const cards = [
        {
            icon: '🚀',
            title: 'Full Stack Development',
            desc: 'Building end-to-end web applications with React, Next.js, Node.js, and Spring Boot.',
        },
        {
            icon: '🤖',
            title: 'AI & RAG Systems',
            desc: 'Designing LLM-powered retrieval systems, agentic workflows, and intelligent automation pipelines.',
        },
        {
            icon: '☁️',
            title: 'Cloud & DevOps',
            desc: 'Deploying scalable infrastructure with AWS (EC2, S3, CloudFront), Docker, Nginx, and CI/CD pipelines.',
        },
    ];

    return (
        <section className="section" id="about" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">About Me</p>
                    <h2 className="section-title">Know Who I Am</h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>
                            I&apos;m a passionate Full Stack Developer who loves building impactful software.
                        </h3>
                        <p>
                            Currently pursuing B.Tech in Computer Science at Lovely Professional University with
                            a CGPA of 7, I specialize in crafting scalable web platforms using modern
                            technologies. From building Redis-inspired in-memory stores to designing RAG-based
                            AI pipelines, I thrive on solving complex engineering challenges.
                        </p>
                        <p>
                            My tech journey spans across building high-performance backend systems with Java &
                            Spring Boot, creating dynamic frontends with React & Next.js, and architecting
                            cloud-native solutions on AWS. I&apos;m always keen on learning new technologies
                            and pushing the boundaries of what&apos;s possible.
                        </p>

                        <div className="about-info-grid">
                            <div className="about-info-item">
                                <span className="about-info-label">Name</span>
                                <span className="about-info-value">Aditya Pratap Singh</span>
                            </div>
                            <div className="about-info-item">
                                <span className="about-info-label">Email</span>
                                <span className="about-info-value">
                                    <a href="mailto:ayushshukla8920@gmail.com">adityathakur6100@gmail.com</a>
                                </span>
                            </div>
                            <div className="about-info-item">
                                <span className="about-info-label">Location</span>
                                <span className="about-info-value">Punjab, India</span>
                            </div>
                            <div className="about-info-item">
                                <span className="about-info-label">Degree</span>
                                <span className="about-info-value">B.Tech CSE</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-cards"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {cards.map((card, i) => (
                            <motion.div
                                key={card.title}
                                className="about-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                            >
                                <div className="about-card-icon">{card.icon}</div>
                                <h4>{card.title}</h4>
                                <p>{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
