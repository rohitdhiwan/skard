import { motion } from 'framer-motion';
import { Instagram, Youtube, Award, Heart, Users } from 'lucide-react';

const About = () => {
  // Stats data
  const stats = [
    { id: 1, label: 'Followers', value: '250K+', icon: <Users className="h-5 w-5 text-primary-500" /> },
    { id: 2, label: 'Projects', value: '100+', icon: <Award className="h-5 w-5 text-primary-500" /> },
    { id: 3, label: 'Brand Collaborations', value: '50+', icon: <Heart className="h-5 w-5 text-primary-500" /> },
  ];

  // Skills data
  const skills = [
    { name: 'Content Creation', level: 95 },
    { name: 'Photography', level: 90 },
    { name: 'Video Editing', level: 85 },
    { name: 'Social Media Management', level: 80 },
    { name: 'Digital Marketing', level: 75 },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                About <span className="text-primary-500 dark:text-primary-400">Me</span>
              </h1>
              <div className="bg-primary-500 h-1 w-20 mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Hey there! I'm Suparna Khanna, a passionate content creator with a love for storytelling through digital media. 
                I've been creating content since 2019 and have built a community of amazing followers across multiple platforms.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                My content focuses on lifestyle, beauty, and travel, and I strive to create authentic, engaging, and high-quality content 
                that resonates with my audience. When I'm not creating content, you'll find me exploring new places, 
                trying out new recipes, or curled up with a good book.
              </p>
              
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/suparnakhanna05/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Instagram size={20} />
                </a>
                <a href="https://www.youtube.com/@SuparnaKhanna" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Youtube size={20} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl h-full">
                  <img 
                    src="/2.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-primary-200 dark:bg-primary-900/50 rounded-lg -z-10"></div>
                <div className="absolute -top-4 -right-4 h-24 w-24 bg-accent-200 dark:bg-accent-900/50 rounded-lg -z-10"></div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="card p-8 text-center flex flex-col items-center"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-full mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* My Story Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Story</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              How I went from a casual creator to a full-time content professional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I started creating content as a hobby in 2019, sharing my passion for lifestyle and beauty with friends and family.
                    What began as casual phone recordings quickly gained traction when one of my videos unexpectedly went viral.
                  </p>
                </div>
                
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-2">The Growth</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    As my audience grew, I invested in better equipment and dedicated more time to understanding my audience.
                    I expanded to multiple platforms and began collaborating with other creators and brands.
                  </p>
                </div>
                
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-2">Today</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Now, I create content full-time, working with amazing brands and connecting with an incredible community.
                    I'm constantly learning, evolving, and finding new ways to engage and inspire my audience.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="relative h-[500px]">
                <img 
                  src="https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Creator Journey" 
                  className="absolute top-0 left-0 w-3/4 h-64 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/3062544/pexels-photo-3062544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Creator Setup" 
                  className="absolute bottom-0 right-0 w-3/4 h-64 object-cover rounded-lg shadow-lg"
                />
                {/* Center decorative element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary-500 dark:bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                  2024
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The expertise I've developed over years of content creation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary-500 dark:text-primary-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary-500 dark:bg-primary-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Services I Offer</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-accent-500 rounded-full mr-2"></div>
                    Content Creation & Strategy
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-accent-500 rounded-full mr-2"></div>
                    Brand Collaborations & Sponsored Content
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-accent-500 rounded-full mr-2"></div>
                    Photography & Videography
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-accent-500 rounded-full mr-2"></div>
                    Social Media Management
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-accent-500 rounded-full mr-2"></div>
                    Consulting & Workshops
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;