import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 flex items-center justify-center z-50">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-yellow-400/20"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 10}%`,
                width: `${40 + i * 20}px`,
                height: `${40 + i * 20}px`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i + 5}
              className="absolute rounded-full border-2 border-yellow-400/20"
              style={{
                top: `${10 + i * 10}%`,
                right: `${5 + i * 15}%`,
                width: `${30 + i * 15}px`,
                height: `${30 + i * 15}px`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.7,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <motion.div
            className="relative w-28 h-28 mx-auto mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
            
            <div className="absolute inset-0 border-4 border-transparent border-t-yellow-400 rounded-full"></div>
            <motion.div 
              className="absolute inset-4 bg-blue-700 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
            </motion.div>
          </motion.div>

          <motion.h2 
            className="text-4xl font-bold text-yellow-400 mb-6 tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sirohi Tech
          </motion.h2>
          
          {/* Loading Text */}
          <motion.p 
            className="text-yellow-200 text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Loading Amazing Experience...
          </motion.p>
          
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-blue-700/50 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
            />
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-yellow-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1], 
                  opacity: [0.5, 1, 0.5],
                  backgroundColor: ["#F59E0B", "#FBBF24", "#F59E0B"]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;