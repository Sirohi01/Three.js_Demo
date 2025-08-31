import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, ArrowRight } from 'lucide-react';
import DataModel from '../models/DataModel';
import AppController from '../controllers/AppController';

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'In Development': return 'bg-yellow-500';
      case 'Beta': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: AppController.getStaggeredDelay(index, 0.1) }}
      whileHover={{ scale: 1.03, rotateY: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      {/* Project Image/Visual */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* Project Number */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 ${getStatusColor(project.status)} text-white text-xs font-semibold rounded-full`}>
            {project.status}
          </span>
        </div>
        
        {/* Year */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full flex items-center">
            <Calendar size={12} className="mr-1" />
            {project.year}
          </span>
        </div>
        
        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-white text-6xl font-bold opacity-30 group-hover:opacity-50 transition-opacity duration-300"
            animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.div>
        </div>
        
        {/* Hover Overlay */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1 }}
        >
          <motion.button
            className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink size={20} />
          </motion.button>
          <motion.button
            className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Project Details */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-blue-400 font-medium">{project.category}</span>
          <Users size={16} className="text-gray-400" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <motion.span 
              key={idx} 
              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {/* View Project Button */}
        <motion.button
          className="w-full py-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg text-white font-medium border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          whileTap={{ scale: 0.98 }}
        >
          <span>View Project</span>
          <ArrowRight size={16} />
        </motion.button>
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
};

// Filter Button Component
const FilterButton = ({ category, isActive, onClick, count }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
          : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>{category}</span>
      {count && (
        <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
          {count}
        </span>
      )}
      
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"
          layoutId="activeFilter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
};

// Main Portfolio Section Component
const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(DataModel.portfolio.map(project => project.category))];
  
  // Filter projects
  const filteredProjects = AppController.filterPortfolio(DataModel.portfolio, selectedCategory);
  
  // Get project counts per category
  const getCategoryCount = (category) => {
    if (category === 'All') return DataModel.portfolio.length;
    return DataModel.portfolio.filter(p => p.category === category).length;
  };

  return (
    <section id="portfolio" className="relative section-padding bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative container mx-auto container-padding">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our <span className="gradient-text">Portfolio</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore our latest projects and see how we bring innovative ideas to life 
            through cutting-edge technology and creative design.
          </motion.p>
          
          {/* Category Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <FilterButton
                key={category}
                category={category}
                isActive={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                count={getCategoryCount(category)}
              />
            ))}
          </motion.div>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={`${selectedCategory}-${project.id}`} 
                project={project} 
                index={index} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-400 text-lg">
              No projects found in this category.
            </div>
          </motion.div>
        )}
        
        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h3>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise 
            in modern web technologies and 3D experiences.
          </p>
          
          <motion.button
            onClick={() => AppController.handleNavigation('contact')}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(102, 126, 234, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Work Together</span>
            <ArrowRight size={20} />
          </motion.button>
          
          <motion.p 
            className="text-gray-400 mt-4 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Free consultation • Custom solutions • Worldwide delivery
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;