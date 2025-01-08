import React from 'react';
interface BlogHeaderProps {
  title: string;
  subtitle: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, subtitle }) => {
    return (
      <header className="text-center py-8 bg-orange-200 dark:bg-gray-800">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{subtitle}</p>
      </header>
    );
  };
  
  // BlogCard Component
  interface BlogCardProps {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
    link: string;
  }
  
  const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image, date, author, link }) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{excerpt}</p>
          <div className="mt-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <span>{author}</span>
            <span>{date}</span>
          </div>
          <a
            href={link}
            className="block mt-4 text-orange-500 hover:text-orange-700 transition-colors"
          >
            Read More →
          </a>
        </div>
      </div>
    );
  };
  
  // BlogFooter Component
  const BlogFooter = () => {
    return (
      <footer className="py-8 bg-orange-200 dark:bg-gray-800 text-center">
        <p className="text-gray-700 dark:text-gray-300">
          © 2025 Lawbay Advocates. All rights reserved.
        </p>
      </footer>
    );
  };
export { BlogHeader, BlogCard, BlogFooter };