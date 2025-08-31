    const DataModel = {
    navigation: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' }
    ],
    
    services: [
        {
        id: 1,
        title: 'Web Development',
        description: 'Modern, responsive websites with cutting-edge 3D experiences',
        icon: '🌐',
        features: ['React/Next.js', '3D Integration', 'Performance Optimized'],
        price: 'From ₹35,999'
        },
        {
        id: 2,
        title: 'Mobile Apps',
        description: 'Cross-platform mobile applications with native performance',
        icon: '📱',
        features: ['React Native', 'iOS & Android', 'Cloud Integration'],
        price: 'From ₹45,999'
        },
        {
        id: 3,
        title: 'Digital Strategy',
        description: 'Strategic consulting to elevate your digital presence',
        icon: '💡',
        features: ['Brand Strategy', 'UX/UI Design', 'Growth Hacking'],
        price: 'From ₹25,999'
        },
        {
        id: 4,
        title: '3D Experiences',
        description: 'Immersive 3D web experiences that captivate audiences',
        icon: '🎨',
        features: ['WebGL/Three.js', 'AR/VR Ready', 'Interactive Design'],
        price: 'From ₹60,999'
        }
    ],
    
    portfolio: [
        {
        id: 1,
        title: 'E-commerce Platform',
        category: 'Web Development',
        description: 'Modern e-commerce with 3D product visualization and seamless checkout experience',
        tech: ['React', 'Three.js', 'Node.js', 'MongoDB'],
        status: 'Live',
        year: '2024'
        },
        {
        id: 2,
        title: 'AR Mobile App',
        category: 'Mobile Development', 
        description: 'Augmented reality shopping experience with real-time product placement',
        tech: ['React Native', 'AR Kit', 'Firebase', 'WebRTC'],
        status: 'In Development',
        year: '2024'
        },
        {
        id: 3,
        title: 'Corporate Website',
        category: 'Web Development',
        description: 'Interactive corporate site with 3D animations and dynamic content',
        tech: ['Next.js', 'Three.js', 'Tailwind', 'Strapi'],
        status: 'Live',
        year: '2024'
        },
        {
        id: 4,
        title: 'SaaS Dashboard',
        category: 'Web Development',
        description: 'Analytics dashboard with real-time data visualization',
        tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
        status: 'Live',
        year: '2023'
        },
        {
        id: 5,
        title: 'Gaming Platform',
        category: 'Web Development',
        description: 'WebGL-based gaming platform with multiplayer support',
        tech: ['Three.js', 'Socket.io', 'Express', 'Redis'],
        status: 'Beta',
        year: '2024'
        },
        {
        id: 6,
        title: 'IoT Mobile App',
        category: 'Mobile Development',
        description: 'Smart home control app with voice commands and automation',
        tech: ['React Native', 'MQTT', 'AWS IoT', 'TensorFlow'],
        status: 'Live',
        year: '2024'
        }
    ],
    
    company: {
        name: 'Sirohi Tech',
        tagline: 'Crafting Digital Experiences',
        description: 'We create stunning 3D web experiences that push the boundaries of what\'s possible in the browser.',
        mission: 'To revolutionize digital experiences through innovative 3D web technologies.',
        vision: 'Building the future of web interactions, one pixel at a time.',
        founded: '2020',
        team: '12+ Experts',
        contact: {
        email: 'hello@sirohitech.com',
        phone: '+91-9568259784',
        address: 'Noida sector - 62'
        },
        social: {
        github: 'https://github.com/Sirohi01',
        linkedin: 'https://www.linkedin.com/in/manish-kumar-sirohi-593268217/',
        twitter: 'https://twitter.com/manishsirohi'
        }
    },
    
    testimonials: [
        {
        id: 1,
        name: 'Manish Sirohi',
        position: 'CEO, TechCorp',
        content: 'sirohitech transformed our digital presence with their innovative 3D solutions. Absolutely outstanding!',
        rating: 5
        },
        {
        id: 2,
        name: 'Raju Kumar',
        position: 'CTO, StartupXYZ',
        content: 'The team delivered beyond expectations. Their technical expertise and creativity are unmatched.',
        rating: 5
        },
        {
        id: 3,
        name: 'Akanksha Sirohi',
        position: 'Marketing Director, BrandCo',
        content: 'Our website engagement increased by 300% after the redesign. Incredible results!',
        rating: 5
        }
    ],
    
    stats: [
        { label: 'Projects Completed', value: '50+' },
        { label: 'Happy Clients', value: '25+' },
        { label: 'Years Experience', value: '5+' },
        { label: 'Team Members', value: '12+' }
    ]
    };

    export default DataModel;