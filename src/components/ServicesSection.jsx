    import React from 'react';
    import { motion } from 'framer-motion';
    import { ArrowRight, Check } from 'lucide-react';
    import DataModel from '../models/DataModel';
    import AppController from '../controllers/AppController';
    const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
        className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: AppController.getStaggeredDelay(index) }}
        viewport={{ once: true }}
        whileHover={{ 
            scale: 1.02, 
            rotateY: 5,
            rotateX: 5
        }}
        >

        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">

            <motion.div 
            className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            >
            {service.icon}
            </motion.div>
            

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
            {service.title}
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
            {service.description}
            </p>

            <ul className="space-y-3 mb-6">
            {service.features.map((feature, idx) => (
                <motion.li 
                key={idx} 
                className="flex items-center text-sm text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                >
                <Check className="text-green-400 mr-3 flex-shrink-0" size={16} />
                {feature}
                </motion.li>
            ))}
            </ul>

            <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {service.price}
            </span>
            
            <motion.button
                className="flex items-center space-x-2 text-blue-400 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
                onClick={() => AppController.handleNavigation('contact')}
            >
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight size={16} />
            </motion.button>
            </div>
        </div>

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
        </motion.div>
    );
    };

    const SectionHeader = ({ title, subtitle, delay = 0 }) => {
    return (
        <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
        >
        <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
            viewport={{ once: true }}
        >
            <span className="bg-gradient-to-r from-white via-blue-400 to-purple-500 bg-clip-text text-transparent">
            {title}
            </span>
        </motion.h2>
        
        <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.4 }}
            viewport={{ once: true }}
        >
            {subtitle}
        </motion.p>
        </motion.div>
    );
    };

    const ServicesSection = () => {
    return (
        <section id="services" className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative container mx-auto px-6">
            <SectionHeader 
            title="Our Services"
            subtitle="We offer comprehensive digital solutions that transform your ideas into reality with cutting-edge technology and creative excellence"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {DataModel.services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
            ))}
            </div>

            <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            >
            <motion.button
                onClick={() => AppController.handleNavigation('contact')}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(102, 126, 234, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
            >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
            </motion.button>
            
            <motion.p 
                className="text-gray-400 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                Free consultation • No commitment required
            </motion.p>
            </motion.div>
        </div>
        </section>
    );
    };

    export default ServicesSection;