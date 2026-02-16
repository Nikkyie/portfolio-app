import React from 'react';
import { motion } from 'motion/react';
import './qualification.css';

const Qualification = () => {
  const positions = [
    {
      id: 3,
      title: 'Full Stack Developer',
      company: '3XPO',
      location: 'Makati City, Philippines',
      period: '2025',
      description: 'Designed and developed full-stack Flutter mobile and web with Supabase backend. Implemented complex schema planning, RLS policies, S3 integration, and real-time chat messaging. Utilized GetX for state management, push notifications, and file handling. Managed projects with Jira and GitLab version control.',
      color: '#EC4899'
    },
    {
      id: 2,
      title: 'Application Developer',
      company: 'KPI Business Advisors & Consultants',
      location: 'Dubai, United Arab Emirates',
      period: '2022 - 2024',
      description: 'Developed mobile applications with REST APIs, payment gateway integration, and advanced features including OCR, thermal printing, and push notifications. Managed app deployments to AppStore and PlayStore with version control and signing keys. Collaborated with functional consultants on BRD planning and led cross-functional teams coordinating NetSuite, backend, and mobile development.',
      color: '#8B5CF6'
    },
    {
      id: 1,
      title: 'PHP Developer',
      company: 'Whizsoft Technologies',
      location: 'Dubai, United Arab Emirates',
      period: '2020 - 2022',
      description: 'Developed and maintained ERP/CRM systems for shipping, logistics, and freight forwarding industries. Built user-friendly modules including quotations, costsheets, and HR features with autocomplete, dialogs, and report generation (PDF, Excel). Utilized PHP, MySQL, AngularJS, and jQuery for full-stack solutions with efficient testing and client support.',
      color: '#3B82F6'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      {/* <span className="section__subtitle">My Professional Journey</span> */}

      <div className="qualification__container container">
        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              className="timeline__item"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Timeline line and dot */}
              <div className="timeline__marker">
                <motion.div
                  className="timeline__dot"
                  style={{ backgroundColor: position.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      `0 0 0 0 ${position.color}`,
                      `0 0 0 10px ${position.color}33`,
                      `0 0 0 0 ${position.color}`
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
                {/* {index !== positions.length - 1 && <div className="timeline__line" />} */}
                <div className="timeline__line" />
              </div>

              {/* Content card */}
              <motion.div
                className="timeline__content"
                style={{ borderLeftColor: position.color }}
              >
                <motion.h3
                  className="timeline__title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {position.title}
                </motion.h3>

                <motion.p
                  className="timeline__company"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {position.company}
                </motion.p>

                <motion.p
                  className="timeline__company"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {position.location}
                </motion.p>

                <motion.span
                  className="timeline__period"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {position.period}
                </motion.span>

                <motion.p
                  className="timeline__description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {position.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Qualification;