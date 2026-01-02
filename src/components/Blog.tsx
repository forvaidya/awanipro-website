import { useState, useEffect } from 'react';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import { businessConfig } from '../config/business';

interface BlogPostData {
  id: string;
  title: string;
  date: string;
  author: string;
  description: string;
  contentPath: string;
}

interface SelectedPost extends BlogPostData {
  content: string;
}

export function Blog() {
  const { blog } = businessConfig;
  const [selectedPost, setSelectedPost] = useState<SelectedPost | null>(null);
  const [loading, setLoading] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleSelectPost = async (post: BlogPostData) => {
    setLoading(true);
    try {
      const response = await fetch(post.contentPath);
      const fileContent = await response.text();

      // Parse frontmatter manually - remove everything between first and second ---
      const frontmatterRegex = /^---[\s\S]*?---\n/;
      const content = fileContent.replace(frontmatterRegex, '').trim();

      setSelectedPost({ ...post, content });
    } catch (error) {
      console.error('Error loading blog post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="blog" className="py-20 sm:py-32 bg-white dark:bg-gray-900">
      <div className="container-max">
        {!selectedPost ? (
          <>
            <div className="text-center mb-12">
              <h2 className="section-title">{blog.sectionTitle}</h2>
              <p className="section-subtitle">
                {blog.sectionDescription}
              </p>
            </div>

            {blogPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">No blog posts available yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="group relative p-6 rounded-lg border border-gray-300 dark:border-slate-700 hover:border-indigo-500 transition-all duration-300 cursor-pointer bg-white dark:bg-slate-800/50"
                    onClick={() => handleSelectPost(post)}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300 -z-10"></div>
                    
                    <div className="relative z-10">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {formatDate(post.date)} • {post.author}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {post.description}
                      </p>
                      <button className="inline-flex items-center text-indigo-600 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-cyan-300 font-semibold transition-colors">
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center text-indigo-600 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-cyan-300 font-semibold transition-colors mb-8"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Posts
            </button>

            <article className="bg-white dark:bg-slate-800/50 rounded-lg border border-gray-300 dark:border-slate-700 p-8">
              <header className="mb-8 pb-8 border-b border-gray-300 dark:border-slate-700">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedPost.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{formatDate(selectedPost.date)}</span>
                  <span>•</span>
                  <span>{selectedPost.author}</span>
                </div>
              </header>

              {loading ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 dark:text-gray-400">Loading post...</p>
                </div>
              ) : (
                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                  <ReactMarkdown
                    components={{
                      h1: ({node, ...props}) => <h1 className={blog.markdownStyles.h1} {...props} />,
                      h2: ({node, ...props}) => <h2 className={blog.markdownStyles.h2} {...props} />,
                      h3: ({node, ...props}) => <h3 className={blog.markdownStyles.h3} {...props} />,
                      h4: ({node, ...props}) => <h4 className={blog.markdownStyles.h4} {...props} />,
                      p: ({node, ...props}) => <p className={blog.markdownStyles.p} {...props} />,
                      ul: ({node, ...props}) => <ul className={blog.markdownStyles.ul} {...props} />,
                      ol: ({node, ...props}) => <ol className={blog.markdownStyles.ol} {...props} />,
                      li: ({node, ...props}) => <li className={blog.markdownStyles.li} {...props} />,
                      blockquote: ({node, ...props}) => <blockquote className={blog.markdownStyles.blockquote} {...props} />,
                      code: ({node, inline, ...props}: any) =>
                        inline ?
                          <code className={blog.markdownStyles.code_inline} {...props} /> :
                          <code className={blog.markdownStyles.code_block} {...props} />,
                      pre: ({node, ...props}) => <pre className={blog.markdownStyles.pre} {...props} />,
                      table: ({node, ...props}) => <table className={blog.markdownStyles.table} {...props} />,
                      th: ({node, ...props}) => <th className={blog.markdownStyles.th} {...props} />,
                      td: ({node, ...props}) => <td className={blog.markdownStyles.td} {...props} />,
                    }}
                  >
                    {selectedPost.content}
                  </ReactMarkdown>
                </div>
              )}
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
