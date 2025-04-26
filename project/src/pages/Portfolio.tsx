import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, ExternalLink } from 'lucide-react';
import axios from 'axios';

// Define portfolio item types
type MediaPlatform = 'instagram' | 'youtube' | 'all';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  platform: 'instagram' | 'youtube';
  link: string;
  featured: boolean;
  date: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Summer Travel Series",
    description: "Exploring hidden gems in Europe with authentic local experiences",
    imageUrl: "https://images.pexels.com/photos/4339954/pexels-photo-4339954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Travel",
    platform: "youtube",
    link: "https://youtube.com/",
    featured: true,
    date: "June 15, 2024"
  },
  {
    id: 2,
    title: "Beauty Tutorials",
    description: "Easy-to-follow beauty routines and product reviews",
    imageUrl: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Beauty",
    platform: "instagram",
    link: "https://www.instagram.com/suparnakhanna05/?hl=en",
    featured: true,
    date: "May 22, 2024"
  },
  {
    id: 3,
    title: "Day in My Life",
    description: "Follow along for my daily routines, productivity tips, and lifestyle hacks",
    imageUrl: "https://images.pexels.com/photos/3062542/pexels-photo-3062542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Lifestyle",
    platform: "youtube",
    link: "https://youtube.com/",
    featured: true,
    date: "April 10, 2024"
  },
  {
    id: 4,
    title: "Fashion Lookbook",
    description: "Seasonal fashion trends and outfit inspirations",
    imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Fashion",
    platform: "instagram",
    link: "https://www.instagram.com/suparnakhanna05/?hl=en",
    featured: false,
    date: "March 5, 2024"
  },
  {
    id: 5,
    title: "Healthy Recipes",
    description: "Quick and nutritious meal prep ideas for busy people",
    imageUrl: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Food",
    platform: "youtube",
    link: "https://youtube.com/",
    featured: false,
    date: "February 18, 2024"
  },
  {
    id: 6,
    title: "Home Decor Ideas",
    description: "Budget-friendly home styling tips and DIY projects",
    imageUrl: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Lifestyle",
    platform: "instagram",
    link: "https://www.instagram.com/suparnakhanna05/?hl=en",
    featured: false,
    date: "January 30, 2024"
  },
  {
    id: 7,
    title: "Fitness Challenge",
    description: "30-day workout program with daily exercise routines",
    imageUrl: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Fitness",
    platform: "youtube",
    link: "https://youtube.com/",
    featured: false,
    date: "December 12, 2023"
  },
  {
    id: 8,
    title: "Travel Photography",
    description: "Capturing breathtaking landscapes and cultural moments",
    imageUrl: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Travel",
    platform: "instagram",
    link: "https://www.instagram.com/suparnakhanna05/?hl=en",
    featured: false,
    date: "November 8, 2023"
  },
  {
    id: 9,
    title: "Tech Reviews",
    description: "Honest reviews of the latest gadgets and tech products",
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Technology",
    platform: "youtube",
    link: "https://youtube.com/",
    featured: false,
    date: "October 25, 2023"
  }
];

// Get unique categories from portfolio items
const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [platform, setPlatform] = useState<MediaPlatform>('all');

  const [items, setItems] = useState<PortfolioItem[]>(portfolioItems);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch latest YouTube videos
        const ytResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?channelId=${import.meta.env.VITE_YOUTUBE_CHANNEL_ID}&part=snippet&order=date&maxResults=9&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
        );
        const ytItems = ytResponse.data.items.map((video: any): PortfolioItem => ({
          id: video.id.videoId,
          title: video.snippet.title,
          description: '',
          imageUrl: video.snippet.thumbnails.medium.url,
          category: '',
          platform: 'youtube',
          link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
          featured: false,
          date: video.snippet.publishedAt
        }));

        // Fetch latest Instagram posts
        const igResponse = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&access_token=${import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN}`
        );
        const igItems = igResponse.data.data.map((post: any): PortfolioItem => ({
          id: post.id,
          title: post.caption || '',
          description: '',
          imageUrl: post.media_url,
          category: '',
          platform: 'instagram',
          link: post.permalink,
          featured: false,
          date: post.timestamp
        }));

        // Combine and update
        setItems([...ytItems, ...igItems]);
      } catch (error) {
        console.error('Error fetching social media items', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="pt-24 pb-16">
        <p className="text-center">Loading portfolio...</p>
      </div>
    );
  }

  // Filter portfolio items based on category and platform
  const filteredItems = items.filter(item => {
    const categoryMatch = filter === 'All' || item.category === filter;
    const platformMatch = platform === 'all' || item.platform === platform;
    return categoryMatch && platformMatch;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">My Portfolio</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Browse through my work across different platforms, categories, and styles. Click on any item to view it on the original platform.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Platform Filters */}
          <div className="flex gap-2">
            <button
              onClick={() => setPlatform('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center transition-colors ${
                platform === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All Platforms
            </button>
            <button
              onClick={() => setPlatform('instagram')}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-colors ${
                platform === 'instagram'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Instagram size={16} />
              Instagram
            </button>
            <button
              onClick={() => setPlatform('youtube')}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-colors ${
                platform === 'youtube'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Youtube size={16} />
              YouTube
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 group-hover:opacity-100 transition-opacity">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full text-white ${
                          item.platform === 'instagram'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                            : 'bg-red-600'
                        }`}
                      >
                        {item.platform === 'instagram' ? (
                          <span className="flex items-center gap-1">
                            <Instagram size={12} /> Instagram
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Youtube size={12} /> YouTube
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-white/80">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300"
                >
                  View Original
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-medium mb-2">No items found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try changing your filter options to see more content.
            </p>
            <button
              onClick={() => {
                setFilter('All');
                setPlatform('all');
              }}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;