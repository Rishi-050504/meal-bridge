
import React from 'react';
import { motion } from 'framer-motion';

const PageLayout = ({ children, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <header className="page-header text-center">
        <div className="container">
          <h1>{title}</h1>
          {subtitle && <p className="lead text-muted mt-2">{subtitle}</p>}
        </div>
      </header>
      <div className="container section-padding">
        {children}
      </div>
    </motion.div>
  );
};

export default PageLayout;