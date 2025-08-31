    import React, { useRef } from 'react';
    import { Canvas, useFrame } from '@react-three/fiber';
    import { Float, MeshDistortMaterial, OrbitControls, Environment } from '@react-three/drei';
    import { motion } from 'framer-motion';
    import { ChevronDown } from 'lucide-react';
    import DataModel from '../models/DataModel';
    import AppController from '../controllers/AppController';

    // 3D Floating Shape Component
    const FloatingShape = ({ position, color, shape = 'sphere', scale = 1 }) => {
    const meshRef = useRef();
    
    useFrame((state) => {
        if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.02;
        }
    });

    const renderGeometry = () => {
        switch (shape) {
        case 'box':
            return <boxGeometry args={[scale, scale, scale]} />;
        case 'torus':
            return <torusGeometry args={[scale, scale * 0.3, 16, 100]} />;
        case 'octahedron':
            return <octahedronGeometry args={[scale]} />;
        default:
            return <sphereGeometry args={[scale, 32, 32]} />;
        }
    };

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} position={position}>
            {renderGeometry()}
            <MeshDistortMaterial 
            color={color} 
            attach="material" 
            distort={0.4}
            speed={2}
            transparent
            opacity={0.8}
            />
        </mesh>
        </Float>
    );
    };

    // 3D Scene Component
    const Hero3DScene = () => {
    return (
        <Canvas className="absolute inset-0 -z-10">
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#764ba2" />
        
        <FloatingShape position={[-4, 1, -2]} color="#667eea" shape="torus" scale={1.2} />
        <FloatingShape position={[4, -1, -3]} color="#764ba2" shape="octahedron" scale={1} />
        <FloatingShape position={[0, 2, -4]} color="#f093fb" shape="sphere" scale={0.8} />
        <FloatingShape position={[-2, -2, -5]} color="#4facfe" shape="box" scale={0.6} />
        <FloatingShape position={[3, 3, -6]} color="#43e97b" shape="torus" scale={0.8} />
        
        <Environment preset="night" />
        <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
        />
        </Canvas>
    );
    };

    const AnimatedText = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
        className={className}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        >
        {children}
        </motion.div>
    );
    };

    const CTAButtons = () => {
    return (
        <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        >
        <motion.button
            onClick={() => AppController.handleNavigation('portfolio')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-yellow-600 rounded-full text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(102, 126, 234, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
        >
            View Our Work
        </motion.button>
        
        <motion.button
            onClick={() => AppController.handleNavigation('contact')}
            className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ 
            scale: 1.05,
            backgroundColor: 'rgba(255,255,255,0.2)'
            }}
            whileTap={{ scale: 0.95 }}
        >
            Get Started
        </motion.button>
        </motion.div>
    );
    };

    const ScrollIndicator = () => {
    return (
        <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => AppController.handleNavigation('about')}
        whileHover={{ scale: 1.2 }}
        >
        <div className="flex flex-col items-center space-y-2">
            <span className="text-white/60 text-sm">Scroll to explore</span>
            <ChevronDown className="text-white/60" size={32} />
        </div>
        </motion.div>
    );
    };

    const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>

        <div className="absolute inset-0">
            <Hero3DScene />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
            <AnimatedText delay={0}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {DataModel.company.name}
                </span>
            </h1>
            </AnimatedText>
            
            <AnimatedText delay={0.2} className="text-xl md:text-3xl mb-8 text-gray-300 font-light">
            {DataModel.company.tagline}
            </AnimatedText>
            
            <AnimatedText delay={0.4} className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-400 leading-relaxed">
            {DataModel.company.description}
            </AnimatedText>
            
            <CTAButtons />

            <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            >
            {DataModel.stats.map((stat, index) => (
                <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                </motion.div>
            ))}
            </motion.div>
        </div>
        
        <ScrollIndicator />

        <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        </section>
    );
    };

    export default HeroSection;