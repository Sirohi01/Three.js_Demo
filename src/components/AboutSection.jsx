import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award, ArrowRight } from 'lucide-react';
import DataModel from '../models/DataModel';
import AppController from '../controllers/AppController';

// Stat Card Component
const StatCard = ({ stat, index }) => {
  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: AppController.getStaggeredDelay(index) }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
        <motion.div 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3"
          whileHover={{ scale: 1.1 }}
        >
          {stat.value}
        </motion.div>
        <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
        <div className="text-gray-400 text-sm leading-relaxed">{stat.description || 'Excellence in delivery'}</div>
      </div>
    </motion.div>
  );
};

// Value Card Component
const ValueCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: AppController.getStaggeredDelay(index, 0.2) }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, rotateY: 5 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative z-10">
        <motion.div 
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="text-white" size={24} />
        </motion.div>
        
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Team Member Component
const TeamMember = ({ member, index }) => {
  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: AppController.getStaggeredDelay(index, 0.1) }}
      viewport={{ once: true }}
    >
      <div className="relative mb-6">
        <motion.div 
          className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-white"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {member.name.charAt(0)}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
      <p className="text-blue-400 text-sm mb-2">{member.role}</p>
      <p className="text-gray-400 text-xs">{member.expertise}</p>
    </motion.div>
  );
};

// Main About Section Component
const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: DataModel.company.mission
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We constantly push boundaries with cutting-edge technologies and creative solutions.'
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Your success is our success. We build lasting partnerships through exceptional service.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Every project meets our rigorous standards for performance, design, and user experience.'
    }
  ];

  const team = [
    { name: 'Alex Chen', role: 'Lead Developer', expertise: '3D Web Technologies' },
    { name: 'Sarah Kim', role: 'UI/UX Designer', expertise: 'Digital Experiences' },
    { name: 'Mike Johnson', role: 'Tech Lead', expertise: 'Full Stack Development' },
    { name: 'Emma Davis', role: 'Project Manager', expertise: 'Client Relations' }
  ];

  return (
    <section id="about" className="relative section-padding bg-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative container mx-auto container-padding">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
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
            About <span className="gradient-text">Us</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We are a team of passionate developers and designers who specialize in creating 
            immersive digital experiences that combine cutting-edge technology with stunning visuals.
          </motion.p>
        </motion.div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {DataModel.stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
        
        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Story</span>
            </h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Founded in {DataModel.company.founded}, SirohiTech began with a simple vision: 
                to revolutionize how businesses connect with their audiences through innovative 
                web technologies.
              </p>
              
              <p>
                Today, we're a team of {DataModel.company.team} specialists who have delivered 
                cutting-edge solutions to clients worldwide. Our expertise spans from interactive 
                3D experiences to performance-optimized web applications.
              </p>
              
              <p className="text-blue-400 font-semibold">
                {DataModel.company.vision}
              </p>
            </div>
            
            <motion.button
              onClick={() => AppController.handleNavigation('portfolio')}
              className="mt-8 inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>See Our Work</span>
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-md border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                {team.map((member, index) => (
                  <TeamMember key={index} member={member} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard 
                key={index} 
                icon={value.icon} 
                title={value.title} 
                description={value.description} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
        
        {/* Testimonials Preview */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    ⭐
                  </motion.div>
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-6 leading-relaxed">
              "{DataModel.testimonials[0].content}"
            </blockquote>
            
            <div className="text-center">
              <div className="font-semibold text-white">{DataModel.testimonials[0].name}</div>
              <div className="text-blue-400 text-sm">{DataModel.testimonials[0].position}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;