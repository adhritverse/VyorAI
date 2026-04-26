import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Search, Clock } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { FAQ, Testimonials, CTABanner } from '@/components/SharedSections';
import { blogPosts } from '@/data/blog';

const filters = ["All", "Blog", "Case Study", "Guide"];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchesFilter = activeFilter === "All" || post.category === activeFilter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featured = filtered.slice(0, 3);
  const rest = filtered.slice(3);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Blog": return "bg-blue-100 text-blue-700";
      case "Case Study": return "bg-green-100 text-green-700";
      case "Guide": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-violet-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-center font-heading"
          >
            Insights & Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto text-center"
          >
            Case studies, playbooks, product updates, and thought leadership — all in one searchable hub.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Looking for anything specific..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-500 shadow-sm"
            />
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 flex justify-center gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-8">
              <h2 className="text-xl font-bold font-heading tracking-tight">Featured</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 0.1}>
                  <Link to={`/blog/${post.id}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 font-heading tracking-widest ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <h3 className="font-bold text-xl mb-2 line-clamp-2 text-gray-900 group-hover:text-vyor-purple transition-colors font-heading tracking-tight">{post.title}</h3>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </div>
                        <span className="text-xs text-gray-400">{post.date}</span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Resources */}
      <section className="bg-white py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8">
            <h2 className="text-xl font-bold font-heading tracking-tight">All Resources</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.1}>
                <Link to={`/blog/${post.id}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 font-heading tracking-widest ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <h3 className="font-bold text-xl mb-2 line-clamp-2 text-gray-900 group-hover:text-vyor-purple transition-colors font-heading tracking-tight">{post.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </div>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
      <FAQ />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
