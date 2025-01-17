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
          '2 Video Editors, 1 Graphic Designer.',
          '8-10 Videos per month (10-15 minutes each).',
          'Expert video editing (cuts, transitions, music integration).',
          'Eye-catching thumbnail creation.',
          'High-resolution video rendering.',
        ],
      },
      {
        id: 'ContentCreator',
        name: 'Content Creator',
        price: 4500,
        description:
          'Growing YouTubers seeking to refine their content and strategy.',
        features: [
          '3 Video Editors, 1 Graphic Designer, 1 Content Strategist (Lite)',
          '12-15 Videos per month (10-20 minutes each)',
          'All Starter Boost.',
          'Advanced video editing (color correction, motion graphics - limited)',
          'Content brainstorming and keyword research',
          'Basic script outlines (optional)',
        ],
      },
      {
        id: 'GrowthAccelerator',
        name: 'Growth Accelerator',
        price: 6000,
        description:
          'Established YouTubers ready to take their channel to the next level.',
        features: [
          '3 Video Editors, 2 Graphic Designers, 1 Content Strategist (Full).',
          '18-22 Videos per month (10-20 minutes each)',
          'All Content Creator.',
          'In-depth content strategy (topic research, scripting)',
          'Professional video editing (extensive motion graphics)',
          'SEO optimization for YouTube',
          '2 Social media post designs per video',
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
        description:
          'New short-form influencers building their audience and experimenting with content.',
        features: [
          '2 Video Editors',
          '15 Videos per month (30-45 seconds each)',
          'Expert video editing and transitions',
          'Trendy thumbnail creation (upon request)',
          'High-resolution video rendering.',
        ],
      },
      {
        id: 'ContentIgnite',
        name: 'Content Ignite',
        price: 2500,
        description:
          'Growing short-form influencers refining their content and audience engagement.',
        features: [
          '2 Video Editors, 1 Content Strategist (Lite).',
          '20 Videos per month (1 minute each).',
          'All Spark Up.',
          'Content brainstorming and trending topic research.',
          'Basic script outlines (optional).',
          'Hashtag and caption strategy suggestions.',
        ],
      },
      {
        id: 'ViralVelocity',
        name: 'Viral Velocity',
        price: 4000,
        description:
          'Established short-form influencers ready to explode their reach and engagement.',
        features: [
          '2 Video Editors, 1 Graphic Designer, 1 Content Strategist (Full).',
          '25-30 Videos per month (1 minute each).',
          'All Content Ignite.',
          'Professional video editing with motion graphics and effects.',
          'In-depth content strategy (concept development, scripting).',
          'Eye-catching custom thumbnail creation',
          'Platform-specific optimization tips.',
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
          '8-10 Videos per month (10-15 minutes each)',
          'Product explainer videos',
          'Social media teasers',
          'Customer testimonial (additional fee).',
        ],
      },
      {
        id: 'ExpertiseBuilder',
        name: 'Expertise Builder',
        price: 4500,
        description:
          'Established businesses positioning themselves as industry leaders.',
        features: [
          '3 Video Editors, 1 Graphic Designer, 1 Content Strategist (Lite)',
          '10-15 videos both long and short.',
          'Educational Tutorials.',
          'Customer Testimonial Videos.',
          'Social Media Promo Videos.',
        ],
      },
      {
        id: 'LeadGeneration',
        name: 'Lead Generation',
        price: 5500,
        description:
          'Businesses seeking to capture qualified leads and generate sales.',
        features: [
          '3 Video Editors, 2 Graphic Designers, 1 Content Strategist (Full)',
          '20-25 videos both long and short.',
          'Compelling Video Ads.',
          'Landing Page Videos.',
          'Product Demonstration Video (additional fee).',
        ],
      },
    ],
  },
];
