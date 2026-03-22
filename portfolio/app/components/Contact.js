'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:ayushshukla8920@gmail.com?subject=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.open(mailtoLink, '_blank');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="section contact-section" id="contact" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">Get In Touch</p>
                    <h2 className="section-title">Let&apos;s Work Together</h2>
                    <p className="section-subtitle">
                        I&apos;m always open to discussing new opportunities, interesting projects, or just
                        having a chat about technology.
                    </p>
                    <div className="section-divider" />
                </motion.div>

                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>Contact Information</h3>
                        <p>
                            Feel free to reach out through any of the following channels. I typically respond
                            within 24 hours.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail">
                                <div className="contact-detail-icon">
                                    <FaEnvelope />
                                </div>
                                <div className="contact-detail-text">
                                    <h4>Email</h4>
                                    <p>
                                        <a href="mailto:ayushshukla8920@gmail.com">adityathakur6100@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="contact-detail-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="contact-detail-text">
                                    <h4>Location</h4>
                                    <p>Phagwara, Punjab, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-social-links">
                            <a
                                href="https://www.linkedin.com/in/adityaps01/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-social-link"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://github.com/adityapratapsingh001"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-social-link"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="mailto:adityathakur6100@gmail.com"
                                className="contact-social-link"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3>Send Me a Message</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="Project Discussion"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="form-submit">
                            {submitted ? '✓ Opening Mail Client...' : 'Send Message →'}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
