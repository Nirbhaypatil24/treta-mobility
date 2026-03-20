import type { Product, BlogPost, TeamMember, Testimonial } from '../types';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ricky Smart Auto Meter',
    description: 'An intelligent fare metering system with GPS tracking, digital payments, and real-time trip analytics for modern auto rickshaws.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    features: ['GPS Tracking', 'Digital Payments', 'Trip Analytics', 'Fare Calculation', 'Driver App Integration'],
    category: 'Hardware',
  },
  {
    id: '2',
    name: 'Transit Advertising System',
    description: 'Transform auto rickshaws into moving billboards with smart digital displays that serve hyper-local targeted advertisements.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    features: ['Digital Display', 'Geo-targeted Ads', 'Real-time Campaign Management', 'Revenue Sharing', 'Analytics Dashboard'],
    category: 'Advertising',
  },
  {
    id: '3',
    name: 'Driver Analytics Dashboard',
    description: 'A comprehensive analytics platform providing drivers with insights on earnings, routes, fuel efficiency, and performance metrics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    features: ['Earnings Tracker', 'Route Optimization', 'Fuel Efficiency Monitor', 'Performance Reports', 'Goal Setting'],
    category: 'Software',
  },
  {
    id: '4',
    name: 'Route Intelligence System',
    description: 'AI-powered route optimization system that analyzes traffic patterns, demand hotspots, and helps drivers maximize their income.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    features: ['AI Route Planning', 'Traffic Analysis', 'Demand Prediction', 'Live Navigation', 'Surge Detection'],
    category: 'AI',
  },
  {
    id: '5',
    name: 'Smart Mobility APIs',
    description: 'Comprehensive REST APIs for businesses to integrate auto rickshaw booking, tracking, and mobility data into their applications.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop',
    features: ['RESTful APIs', 'Real-time WebSockets', 'SDKs for Web & Mobile', 'Developer Docs', 'Sandbox Environment'],
    category: 'API',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Auto Rickshaw Technology in Indian Cities',
    excerpt: 'How smart meters and digital infrastructure are transforming the auto rickshaw industry and empowering millions of drivers.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    author: 'Nirbhay Patil',
    category: 'Technology',
    date: '2024-01-15',
    readTime: 5,
    featured: true,
  },
  {
    id: '2',
    title: "Driver Success Stories: How Analytics Changed My Daily Earnings",
    excerpt: "Real stories from auto drivers who have used Treta's analytics platform to increase their daily income by up to 40%.",
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop',
    author: 'Rahul Sharma',
    category: 'Driver Stories',
    date: '2024-01-08',
    readTime: 4,
  },
  {
    id: '3',
    title: 'Transit Advertising: The New Frontier of Hyperlocal Marketing',
    excerpt: 'Why brands are choosing auto rickshaws as their next major advertising channel and the ROI numbers behind the trend.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
    author: 'Priya Mehta',
    category: 'Advertising',
    date: '2024-01-01',
    readTime: 6,
  },
  {
    id: '4',
    title: 'Building Smart Cities: The Role of Three-Wheeler Infrastructure',
    excerpt: 'An in-depth look at how connected auto rickshaws can serve as data collection points for smart city initiatives.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&h=500&fit=crop',
    author: 'Aditya Kumar',
    category: 'Smart Cities',
    date: '2023-12-25',
    readTime: 7,
  },
  {
    id: '5',
    title: "Digital Payments Adoption Among Auto Drivers: A 2024 Report",
    excerpt: "How Treta's integrated payment solutions helped over 10,000 drivers transition to cashless transactions.",
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    author: 'Sneha Patel',
    category: 'Technology',
    date: '2023-12-18',
    readTime: 5,
  },
  {
    id: '6',
    title: "Route Optimization: How AI Is Helping Drivers Earn More",
    excerpt: "A deep dive into the machine learning algorithms behind Treta's route intelligence system.",
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    author: 'Vikram Singh',
    category: 'AI',
    date: '2023-12-10',
    readTime: 8,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Nirbhay Patil',
    role: 'CEO & Co-Founder',
    bio: 'Visionary entrepreneur with 8+ years in mobility tech. Previously led product at major ride-sharing platforms.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: '2',
    name: 'Priya Mehta',
    role: 'CTO & Co-Founder',
    bio: 'Full-stack engineer and systems architect. Expert in IoT and embedded systems for vehicle technology.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Rahul Sharma',
    role: 'Head of Operations',
    bio: 'Operations veteran with deep expertise in on-ground driver networks and fleet management.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: '4',
    name: 'Aditya Kumar',
    role: 'Head of Product',
    bio: "Product designer passionate about building user experiences that resonate with India's next billion users.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ramesh Yadav',
    role: 'Auto Driver, Mumbai',
    content: 'Treta ka smart meter meri zindagi badal di. Ab main apni kamaai track kar sakta hoon aur route bhi better choose karta hoon. Monthly income 30% badh gayi hai!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    location: 'Mumbai, Maharashtra',
  },
  {
    id: '2',
    name: 'Suresh Kumar',
    role: 'Auto Driver, Pune',
    content: "The transit ads on my auto give me extra income every month. I don't have to drive as much but earn the same. Treta has been a true partner in my success.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    location: 'Pune, Maharashtra',
  },
  {
    id: '3',
    name: 'Mohan Das',
    role: 'Auto Driver, Bangalore',
    content: "Digital payments through Treta meter means no more change problems. Passengers love it and I get payments instantly. It's made my life so much easier.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    location: 'Bangalore, Karnataka',
  },
];

export const STATS = [
  { value: '10,000+', label: 'Active Drivers' },
  { value: '50+', label: 'Cities Covered' },
  { value: '₹2Cr+', label: 'Driver Earnings Tracked' },
  { value: '500+', label: 'Brand Campaigns' },
];

export const BLOG_CATEGORIES = ['All', 'Technology', 'Driver Stories', 'Advertising', 'Smart Cities', 'AI'];

export const COMPANY_TIMELINE = [
  { year: '2021', title: 'Idea Born', description: 'Treta Mobility was conceived from a personal experience with auto drivers struggling with fare disputes and low earnings.' },
  { year: '2022', title: 'MVP Launch', description: 'Launched our first smart meter prototype with 50 drivers in Pune. Received overwhelming positive feedback.' },
  { year: '2022', title: 'Seed Funding', description: 'Raised ₹2 Crore in seed funding from angel investors in the mobility and fintech space.' },
  { year: '2023', title: 'Transit Ads', description: 'Launched the transit advertising platform. Signed our first 5 brand clients for hyperlocal campaigns.' },
  { year: '2023', title: '1000 Drivers', description: 'Crossed the 1,000 active driver milestone across 5 cities in Maharashtra.' },
  { year: '2024', title: '10,000+ Drivers', description: 'Expanded to 50+ cities with 10,000+ active drivers. Launched Route Intelligence System.' },
];
