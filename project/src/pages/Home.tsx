import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Instagram, Youtube, Camera, Video } from 'lucide-react';

const Home = () => {
  const featuredRef = useRef<HTMLDivElement>(null);

  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-900 -z-10"></div>
        
        {/* Animated background circles */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-accent-200/30 dark:bg-accent-900/20 rounded-full blur-3xl -z-10 animate-float"></div>
        <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
                Social Media Content Creator
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Creating Authentic <span className="text-primary-500 dark:text-primary-400">Digital Stories</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                Hi, I'm Suparna Khanna. I create engaging content that connects brands with their audiences through authentic storytelling and creative visuals.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/portfolio" className="btn-primary">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button 
                  onClick={scrollToFeatured} 
                  className="btn-secondary inline-flex items-center"
                >
                  <PlayCircle className="mr-2 h-5 w-5 text-primary-500" />
                  Watch Reel
                </button>
              </div>
              
              <div className="mt-10 flex items-center justify-center md:justify-start">
                <span className="text-sm text-gray-600 dark:text-gray-400 mr-4">Follow me:</span>
                <div className="flex space-x-3">
                  <a href="https://www.instagram.com/suparnakhanna05/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Instagram size={18} />
                  </a>
                  <a href="https://www.youtube.com/@SuparnaKhanna" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Youtube size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border-8 border-white dark:border-gray-800">
                <img 
                  src="/1.jpg" 
                  alt="Content Creator" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-accent-100 dark:bg-accent-900/50 p-3 rounded-lg">
                    <Camera className="h-6 w-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">5M+ Reach</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Across platforms</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating engagement card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-6 -right-6 glass p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-lg">
                    <Video className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">200+ Videos</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Created to date</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section ref={featuredRef} className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Content</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Check out some of my recent work that has been making waves across social media platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* YouTube Video */}
            <motion.div 
              className="card group"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="relative overflow-hidden">
                <iframe
                  width="100%"
                  height="360"
                  src="https://www.youtube.com/embed/Ol9dDKqqKq4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full mb-2">
                  YouTube
                </span>
                <h3 className="text-xl font-semibold mb-2">Latest YouTube Video</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Watch my latest YouTube video featuring...
                </p>
              </div>
            </motion.div>

            {/* Instagram Reel 1 */}
            <motion.div 
              className="card group"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="relative overflow-hidden">
                <iframe
                  width="100%"
                  height="360"
                  src="https://www.instagram.com/p/Cx6hAmEhmrW/embed"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full mb-2">
                  Instagram
                </span>
                <h3 className="text-xl font-semibold mb-2">Recent Instagram Reel</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Check out my latest Instagram reel featuring...
                </p>
              </div>
            </motion.div>

            {/* Instagram Reel 2 */}
            <motion.div 
              className="card group"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="relative overflow-hidden">
                <iframe
                  width="100%"
                  height="360"
                  src="https://www.instagram.com/p/CxX0qxIJF-v/embed"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full mb-2">
                  Instagram
                </span>
                <h3 className="text-xl font-semibold mb-2">Latest Instagram Reel</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Watch my most recent Instagram reel featuring...
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/portfolio" 
              className="btn-secondary inline-flex items-center"
            >
              View All Content
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's create amazing content that resonates with your audience and elevates your brand.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/booking" className="btn bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700">
                Book a Session
              </Link>
              <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-white/10">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;