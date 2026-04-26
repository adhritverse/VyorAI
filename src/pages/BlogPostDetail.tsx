import { useParams, Link } from 'react-router';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Clock, ArrowLeft, Calendar, User, Share2, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { CTABanner } from '@/components/SharedSections';
import { useEffect } from 'react';

export default function BlogPostDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/blog" className="text-vyor-purple hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-vyor-purple z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-vyor-purple transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Resources
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-vyor-purple/10 text-vyor-purple text-[10px] font-black rounded-full uppercase tracking-[0.2em] font-heading">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-xs text-gray-400 font-sans">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-gray-900 leading-[1.05] mb-8 font-heading">
              {post.title}
            </h1>

            <div className="flex items-center justify-between py-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <User className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-black text-gray-900 font-heading tracking-tight">{post.author}</p>
                  <p className="text-xs text-gray-500 font-sans">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400 font-sans">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-2xl"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <article className="prose prose-xl max-w-none prose-headings:font-black prose-headings:font-heading prose-headings:tracking-tighter prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:font-sans prose-li:text-gray-600 prose-li:font-sans prose-blockquote:border-vyor-purple prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:font-heading prose-blockquote:italic">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }} 
              className="blog-content-wrapper"
            />
          </article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-black font-heading tracking-tight text-gray-900">Keep Reading</h2>
            <Link to="/blog" className="text-sm font-black text-vyor-purple hover:underline flex items-center gap-1 font-heading uppercase tracking-widest">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {relatedPosts.map((rp) => (
              <Link 
                key={rp.id} 
                to={`/blog/${rp.id}`}
                className="group block"
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 shadow-md">
                  <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-black text-xl group-hover:text-vyor-purple transition-colors line-clamp-2 font-heading tracking-tight leading-tight">
                  {rp.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
