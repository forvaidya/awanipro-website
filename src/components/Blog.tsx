import { useState, useEffect } from 'react';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

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
      const content = await response.text();
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
              <h2 className="section-title">DevOps & Cloud Blog</h2>
              <p className="section-subtitle">
                Stay ahead of the curve with expert insights on Kubernetes, AWS, Git workflows, cloud infrastructure, and DevOps best practices. From CI/CD pipelines to cost optimization strategies, we explore the technologies and methodologies that drive modern software delivery at scale.
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
                      h1: ({node, ...props}) => <h1 className="text-3xl font-bold my-6 text-gray-900 dark:text-white" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-2xl font-bold my-5 text-gray-900 dark:text-white mt-8" {...props} />,
                      h3: ({node, ...props}) => <h3 className="text-xl font-bold my-4 text-gray-900 dark:text-white" {...props} />,
                      h4: ({node, ...props}) => <h4 className="text-lg font-bold my-3 text-gray-900 dark:text-white" {...props} />,
                      p: ({node, ...props}) => <p className="my-4 leading-relaxed" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc list-inside my-4 space-y-2" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal list-inside my-4 space-y-2" {...props} />,
                      li: ({node, ...props}) => <li className="ml-4" {...props} />,
                      blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-4 text-gray-600 dark:text-gray-400" {...props} />,
                      code: ({node, inline, ...props}: any) => 
                        inline ? 
                          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono" {...props} /> :
                          <code className="bg-gray-100 dark:bg-gray-800 p-4 rounded block my-4 text-sm font-mono overflow-x-auto" {...props} />,
                      pre: ({node, ...props}) => <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded my-4 overflow-x-auto" {...props} />,
                      table: ({node, ...props}) => <table className="border-collapse border border-gray-300 dark:border-gray-700 my-4 w-full" {...props} />,
                      th: ({node, ...props}) => <th className="border border-gray-300 dark:border-gray-700 p-2 bg-gray-100 dark:bg-gray-800 text-left" {...props} />,
                      td: ({node, ...props}) => <td className="border border-gray-300 dark:border-gray-700 p-2" {...props} />,
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
