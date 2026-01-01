export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  description: string;
  contentPath: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '003-git-merge-vs-rebase',
    title: 'Git Merge vs Rebase: A Comprehensive Guide',
    date: '2025-01-20',
    author: 'Mahesh Vaidya',
    description: 'Master the differences between git merge and rebase, understand when to use each strategy, and learn best practices for maintaining clean commit history',
    contentPath: '/content/blog/003-git-merge-vs-rebase.md'
  },
  {
    id: '001-getting-started-with-kubernetes',
    title: 'Getting Started with Kubernetes',
    date: '2025-01-15',
    author: 'Mahesh Vaidya',
    description: 'A comprehensive guide to getting started with Kubernetes for DevOps professionals',
    contentPath: '/content/blog/001-getting-started-with-kubernetes.md'
  },
  {
    id: '002-aws-best-practices',
    title: 'AWS Best Practices for Production Workloads',
    date: '2025-01-10',
    author: 'Mahesh Vaidya',
    description: 'Essential AWS best practices to ensure secure, scalable, and cost-effective production deployments',
    contentPath: '/content/blog/002-aws-best-practices.md'
  }
];
