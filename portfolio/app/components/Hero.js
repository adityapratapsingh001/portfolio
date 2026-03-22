'use client';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-bg" />
            <div className="hero-container">
                <div className="hero-content">
                    <motion.p
                        className="hero-greeting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Hi, I am
                    </motion.p>

                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Aditya Pratap Singh
                    </motion.h1>

                    <motion.h2
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Full Stack Developer
                    </motion.h2>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        I build scalable, high-performance web applications and backend systems using modern frameworks like React, Next.js, Node.js, Spring Boot, and FastAPI. Passionate about clean architecture, cloud infra, and AI-driven solutions.
                    </motion.p>

                    <motion.div
                        className="hero-socials"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <a
                            href="https://www.linkedin.com/in/adityaps01/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://github.com/adityapratapsingh001"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:adityathakur6100@gmail.com"
                            className="hero-social-link"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <a href="#contact" className="btn-primary">
                            Hire Me
                        </a>
                        <a href="/cva.pdf" className="btn-secondary" download>
                            <FaDownload /> Download CV
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <div className="hero-stat">
                            <div className="hero-stat-number">2+</div>
                            <div className="hero-stat-label">Projects</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">100+</div>
                            <div className="hero-stat-label">Problems Solved</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">7</div>
                            <div className="hero-stat-label">CGPA</div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="hero-image-container">
                        <div className="hero-image-ring" />
                        <div className="hero-image-ring-2" />
                        <Image
                            src="/hero-profile.png"
                            alt="Aditya Pratap Singh"
                            width={420}
                            height={420}
                            className="hero-image"
                            priority
                        />
                        <div className="hero-image-glow" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
