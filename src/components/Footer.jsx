import { motion } from "framer-motion";
import DataModel from "../models/DataModel";
import { Github, Linkedin, Twitter } from "lucide-react";
import AppController from "../controllers/AppController"
const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.h3 
              className="text-3xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {DataModel.company.name}
            </motion.h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              {DataModel.company.description}
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: DataModel.company.social.github },
                { icon: Linkedin, href: DataModel.company.social.linkedin },
                { icon: Twitter, href: DataModel.company.social.twitter }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-morphism rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {DataModel.navigation.map((item, index) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => AppController.handleNavigation(item.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {DataModel.services.slice(0, 4).map((service, index) => (
                <motion.li 
                  key={service.id}
                  className="text-gray-400 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              &copy; {AppController.getCurrentYear()} {DataModel.company.name}. All rights reserved.
            </motion.p>
            
            <motion.div 
              className="flex space-x-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
              <button className="text-gray-400 hover:text-white transition-colors">Terms of Service</button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;