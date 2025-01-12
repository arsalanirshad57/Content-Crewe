import { Star, Users, Briefcase } from 'lucide-react';

export const pricingData = [
  {
    id: 'youtuber',
    icon: Star,
    title: 'YouTuber',
    plans: [
      {
        id: 'StarterBoost',
        name: 'Starter Boost',
        price: 2500,
        description:
          'New YouTubers or those with established channels seeking a refresh.',
        features: [
          '2 Video Editors, 1 Graphic Designer',
          '8-10 Videos per month (10-15 minutes each)',
          'Expert video editing (cuts, transitions, music)',
          'Eye-catching thumbnail creation',
          'High-resolution video rendering',
        ],
      },
      {
        id: 'ContentCreator',
        name: 'Content Creator',
        price: 4500,
        description:
          'Growing YouTubers seeking to refine their content and strategy.',
        features: [
          '3 Video Editors, 1 Graphic Designer, 1 Content Strategist',
          '12-15 Videos per month (10-20 minutes each)',
          'Advanced video editing with color correction',
          'Content brainstorming and keyword research',
          'Basic script outlines',
        ],
      },
      {
        id: 'GrowthAccelerator',
        name: 'Growth Accelerator',
        price: 6000,
        description:
          'Established YouTubers ready to take their channel to the next level.',
        features: [
          'Full team of editors, designers, and strategist',
          '18-22 Videos per month (10-20 minutes each)',
          'Professional editing with motion graphics',
          'In-depth content strategy and SEO',
          'Social media post designs',
        ],
      },
    ],
  },
  {
    id: 'influencer',
    icon: Users,
    title: 'Influencer',
    plans: [
      {
        id: 'SparkUp',
        name: 'SparkUp',
        price: 1750,
        description: 'New short-form influencers building their audience.',
        features: [
          '2 Video Editors',
          '15 Videos per month (30-45 seconds each)',
          'Expert video editing and transitions',
          'Trendy thumbnail creation',
          'High-resolution rendering',
        ],
      },
      {
        id: 'ContentIgnite',
        name: 'Content Ignite',
        price: 2500,
        description: 'Growing short-form influencers refining their content.',
        features: [
          '2 Video Editors, 1 Content Strategist',
          '20 Videos per month (1 minute each)',
          'Content brainstorming',
          'Script outlines and trending topics',
          'Hashtag strategy',
        ],
      },
      {
        id: 'ViralVelocity',
        name: 'Viral Velocity',
        price: 4000,
        description: 'Established influencers ready to explode their reach.',
        features: [
          'Full team with strategist',
          '25-30 Videos per month',
          'Professional editing with effects',
          'In-depth content strategy',
          'Platform optimization',
        ],
      },
    ],
  },
  {
    id: 'entrepreneur',
    icon: Briefcase,
    title: 'Entrepreneur',
    plans: [
      {
        name: 'BrandLaunchBoost',
        name: 'Brand Launch Boost',
        price: 3500,
        description: 'New businesses creating a strong first impression.',
        features: [
          '2 Video Editors, 1 Graphic Designer',
          '8-10 Videos per month',
          'Product explainer videos',
          'Social media teasers',
          'Customer testimonial options',
        ],
      },
      {
        id: 'ExpertiseBuilder',
        name: 'Expertise Builder',
        price: 4500,
        description: 'Established businesses becoming industry leaders.',
        features: [
          'Full content team',
          '10-15 Videos monthly',
          'Educational tutorials',
          'Testimonial videos',
          'Social media promotions',
        ],
      },
      {
        id: 'LeadGeneration',
        name: 'Lead Generation',
        price: 5500,
        description: 'Businesses focused on qualified leads and sales.',
        features: [
          'Complete production team',
          '20-25 Videos monthly',
          'Video ads and demonstrations',
          'Landing page videos',
          'Product showcases',
        ],
      },
    ],
  },
];
