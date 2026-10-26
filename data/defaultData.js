export const defaultServices = [
  {
    order: 1,
    title: 'Website Development',
    slug: 'website-development',
    category: 'Web',
    shortDesc: 'Give your business a professional home on the internet.',
    fullDesc: 'We design and build clean, fast, and modern websites that explain what you do in seconds. Whether you are a local shop, manufacturer, or corporate enterprise, your website acts as your 24/7 digital storefront.',
    icon: 'Globe',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    benefits: ['Show your services', 'Build trust with buyers', 'Receive direct enquiries'],
    whoNeedsIt: [
      'Retailers & shopkeepers wanting an online presence',
      'Manufacturers wanting to display their machinery or catalog',
      'Professionals & consultants wanting credibility',
      'Startups launching their first product or brand'
    ],
    problemsSolved: [
      'Customers search for you online and find nothing or an outdated page',
      'Explaining your products or services over phone calls takes too much time',
      'Losing potential clients to competitors with modern websites'
    ],
    deliverables: [
      'Custom responsive design for phones, tablets & laptops',
      'High-speed loading with SEO-ready structure',
      'Interactive contact and enquiry forms',
      'WhatsApp chat button integration'
    ],
    processSteps: [
      { step: 1, title: 'Discovery', desc: 'We learn about your customers, products, and brand identity.' },
      { step: 2, title: 'Visual Design', desc: 'We craft a clean, easy-to-read layout using your brand colors.' },
      { step: 3, title: 'Development', desc: 'We build your fast, secure website with modern web standards.' },
      { step: 4, title: 'Launch', desc: 'We publish your site to your domain and submit it to Google.' }
    ],
    faqs: [
      {
        question: 'Do I need any technical knowledge to maintain my website?',
        answer: 'None at all. We make everything simple, and we can manage all updates, backups, and changes for you.'
      },
      {
        question: 'How long does it take to build a business website?',
        answer: 'A standard professional business website typically takes between 10 to 20 days depending on content.'
      }
    ]
  },
  {
    order: 2,
    title: 'Web Applications',
    slug: 'web-applications',
    category: 'Software',
    shortDesc: 'Manage your business activities from one convenient place.',
    fullDesc: 'Powerful yet simple web software running securely in your browser. From staff portals and booking systems to customer management tools, access your business data anywhere from your laptop or tablet.',
    icon: 'Layers',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    benefits: ['Organize information', 'Reduce manual work', 'Track progress in real time'],
    whoNeedsIt: [
      'Service businesses scheduling appointments and technicians',
      'Firms wanting centralized customer records and interaction history',
      'Growing companies replacing complex spreadsheets'
    ],
    problemsSolved: [
      'Messy Excel sheets leading to lost records or duplicate entries',
      'Multiple team members working on out-of-sync files',
      'Lack of real-time visibility into business performance'
    ],
    deliverables: [
      'Custom role-based access for admins, managers, and staff',
      'Clean interactive dashboards with summary charts',
      'Secure data storage and automated backups',
      'Exportable reports in Excel / PDF format'
    ],
    processSteps: [
      { step: 1, title: 'Workflow Mapping', desc: 'We map how your business currently operates step-by-step.' },
      { step: 2, title: 'User Interface', desc: 'We design intuitive screens that non-tech staff can use easily.' },
      { step: 3, title: 'System Building', desc: 'We build the application logic and test with sample data.' },
      { step: 4, title: 'Staff Training', desc: 'We walk your team through the system and ensure comfort.' }
    ],
    faqs: [
      {
        question: 'Can my employees access this on their smartphones?',
        answer: 'Yes! All web applications built by Pheunix are responsive and adapt seamlessly to phones and tablets.'
      }
    ]
  },
  {
    order: 3,
    title: 'Mobile Applications',
    slug: 'mobile-applications',
    category: 'Mobile',
    shortDesc: 'Let your customers use your services from their phones.',
    fullDesc: 'Put your brand right into your customers hands. We design and develop Android and iOS mobile applications with smooth, intuitive navigation that keeps customers engaged and coming back.',
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    benefits: ['Convenient access', 'Better engagement', 'Custom mobile features'],
    whoNeedsIt: [
      'Businesses wanting direct push notifications to customers',
      'Retail stores offering on-the-go loyalty or ordering',
      'Field teams needing offline or GPS-enabled mobile tools'
    ],
    problemsSolved: [
      'Customers forgetting to visit your website',
      'Difficulty sending updates or offers directly to shoppers',
      'Competitors having apps in the Google Play Store'
    ],
    deliverables: [
      'Cross-platform Android & iOS application',
      'Push notification system for deals & alerts',
      'Secure payment gateway integration',
      'App Store and Google Play publishing support'
    ],
    processSteps: [
      { step: 1, title: 'App Concept', desc: 'We define the core features that bring real value to mobile users.' },
      { step: 2, title: 'Interactive Prototype', desc: 'You test the app design on your actual phone before coding.' },
      { step: 3, title: 'Development', desc: 'We build the app using cutting-edge mobile technologies.' },
      { step: 4, title: 'Store Release', desc: 'We manage the submission and approval process on app stores.' }
    ],
    faqs: [
      {
        question: 'Will the app work on both Android and iPhone?',
        answer: 'Yes, we build apps that run seamlessly on both Android and iOS devices using modern frameworks.'
      }
    ]
  },
  {
    order: 4,
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    category: 'Marketing',
    shortDesc: 'Help more people discover your business online.',
    fullDesc: 'Get your products and services in front of the exact people searching for them. We create targeted campaigns across search engines and social platforms to generate quality customer enquiries.',
    icon: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80',
    benefits: ['Reach ideal customers', 'Promote seasonal offers', 'Generate qualified enquiries'],
    whoNeedsIt: [
      'New businesses wanting quick initial traction',
      'Local service providers wanting more daily phone calls',
      'E-commerce brands seeking targeted buyer traffic'
    ],
    problemsSolved: [
      'Having a great product but nobody knows you exist',
      'Wasting money on unfocused advertisements with zero results',
      'Not knowing which marketing channels bring real sales'
    ],
    deliverables: [
      'Targeted campaign setup (Google Search, Meta/Instagram)',
      'Eye-catching promotional ad creatives and copywriting',
      'Lead tracking and transparent performance reports',
      'Conversion rate optimization for enquiry pages'
    ],
    processSteps: [
      { step: 1, title: 'Audience Research', desc: 'We find who your best customers are and where they spend time.' },
      { step: 2, title: 'Campaign Creation', desc: 'We write simple, persuasive messages and design visuals.' },
      { step: 3, title: 'Launch & Monitor', desc: 'We run the campaigns and optimize daily for lower costs.' },
      { step: 4, title: 'Review & Refine', desc: 'You receive clear reports showing real customer enquiries generated.' }
    ],
    faqs: [
      {
        question: 'How do I track how many enquiries came from the ads?',
        answer: 'We provide simple weekly reports and direct notifications whenever someone submits an enquiry or calls.'
      }
    ]
  },
  {
    order: 5,
    title: 'SEO (Search Visibility)',
    slug: 'seo',
    category: 'Marketing',
    shortDesc: 'Make it easier for people to find your business on Google.',
    fullDesc: 'When prospective buyers search for what you sell, does your business appear? Our search engine optimization positions your website at the top of local and organic search results.',
    icon: 'Search',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=800&q=80',
    benefits: ['Improve search visibility', 'Attract relevant visitors', 'Build long-term presence'],
    whoNeedsIt: [
      'Local businesses serving specific cities or regions',
      'Specialized manufacturers and suppliers',
      'Companies wanting sustainable organic traffic without constant ad spending'
    ],
    problemsSolved: [
      'Your website is invisible on Google beyond page 5',
      'Competitors getting all the high-intent buyers searching in your city',
      'Technical errors preventing Google from indexing your pages'
    ],
    deliverables: [
      'Google Business Profile setup and optimization',
      'Local citation building and keyword targeting',
      'On-page speed and mobile optimization',
      'Monthly keyword ranking growth reports'
    ],
    processSteps: [
      { step: 1, title: 'Audit', desc: 'We inspect your current website and see what Google sees.' },
      { step: 2, title: 'Keyword Strategy', desc: 'We identify phrases your customers actually type when searching.' },
      { step: 3, title: 'Optimization', desc: 'We optimize page titles, content, headings, and speed.' },
      { step: 4, title: 'Growth Monitoring', desc: 'We track your climbs up Google search rankings over time.' }
    ],
    faqs: [
      {
        question: 'How quickly does SEO show results?',
        answer: 'Local map listings often see improvements within weeks, while organic rankings typically build steadily over 2 to 4 months.'
      }
    ]
  },
  {
    order: 6,
    title: 'Business Automation',
    slug: 'business-automation',
    category: 'Automation',
    shortDesc: 'Spend less time on repetitive tasks.',
    fullDesc: 'Automate manual paperwork, customer follow-up messages, invoice reminders, and inventory alerts so you and your team can focus on serving customers and growing your revenue.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    benefits: ['Automate reminders', 'Simplify workflows', 'Reduce manual effort'],
    whoNeedsIt: [
      'Busy owners spending hours copying data between tools',
      'Businesses needing automated WhatsApp payment or appointment reminders',
      'Distribution teams tracking order fulfillments'
    ],
    problemsSolved: [
      'Forgetting to follow up with leads, causing lost sales',
      'Manual human errors in copying orders or customer numbers',
      'Spending precious evening hours typing repetitive invoices'
    ],
    deliverables: [
      'WhatsApp & Email notification pipelines',
      'Automatic order status updates for customers',
      'Inventory threshold alerts',
      'Integration between your website, CRM, and accounts'
    ],
    processSteps: [
      { step: 1, title: 'Identify Bottlenecks', desc: 'We pinpoint the repetitive tasks draining your time daily.' },
      { step: 2, title: 'Design Automation', desc: 'We configure smart triggers that do the tasks automatically.' },
      { step: 3, title: 'Safety Testing', desc: 'We test thoroughly to verify accuracy without missing a beat.' },
      { step: 4, title: 'Hand-off', desc: 'The system runs silently in the background 24/7.' }
    ],
    faqs: [
      {
        question: 'Can you send automated messages to our customers on WhatsApp?',
        answer: 'Yes! We configure official WhatsApp business integrations for automated order updates, alerts, and reminders.'
      }
    ]
  },
  {
    order: 7,
    title: 'E-commerce Solutions',
    slug: 'ecommerce-solutions',
    category: 'Commerce',
    shortDesc: 'Sell your products through your own online store.',
    fullDesc: 'Take your physical store online with a beautiful, secure e-commerce website. Enable your customers to browse products, pay online safely via UPI or cards, and receive automatic order tracking.',
    icon: 'ShoppingCart',
    image: '/assets/images/ecommerce-solutions-3d.jpg',
    benefits: ['Display products beautifully', 'Manage orders easily', 'Simplify shopping for customers'],
    whoNeedsIt: [
      'Clothing, electronics, or retail shop owners',
      'Direct-to-consumer (D2C) brands and craftsmen',
      'Wholesalers accepting bulk online orders'
    ],
    problemsSolved: [
      'Being restricted to foot traffic in your local neighborhood',
      'High commission fees charged by third-party marketplace platforms',
      'Confusion tracking manual orders received via chat'
    ],
    deliverables: [
      'Product catalog with categories, variations, and search',
      'UPI, Credit/Debit card, and Net Banking checkout',
      'Automated shipping invoice generation',
      'Mobile-optimized shopping cart experience'
    ],
    processSteps: [
      { step: 1, title: 'Store Architecture', desc: 'We categorize your products and set pricing and shipping rules.' },
      { step: 2, title: 'Design & Branding', desc: 'We create a clean storefront matching your product aesthetic.' },
      { step: 3, title: 'Payments Setup', desc: 'We integrate secure payment gateways so money goes straight to your bank.' },
      { step: 4, title: 'Go Live', desc: 'Your store is ready to accept customers from across the country.' }
    ],
    faqs: [
      {
        question: 'Will payments go directly into my business bank account?',
        answer: 'Yes, 100%. We integrate verified payment gateways (like Razorpay/Stripe) that deposit directly to your bank.'
      }
    ]
  },
  {
    order: 8,
    title: 'Custom Business Software',
    slug: 'custom-business-software',
    category: 'Software',
    shortDesc: 'Bring your important business activities together.',
    fullDesc: 'Off-the-shelf software rarely fits unique business needs. We build tailored ERP, CRM, and inventory management systems built specifically around the way your company already works.',
    icon: 'Database',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    benefits: ['Manage stock accurately', 'Track customer orders', 'Organize company records'],
    whoNeedsIt: [
      'Manufacturers with multi-step production pipelines',
      'Distributors with multiple warehouses and dispatch points',
      'Enterprises with distinct approval workflows'
    ],
    problemsSolved: [
      'Expensive generic software forcing you to change how you work',
      'Missing stock counts causing delays in customer deliveries',
      'Disconnected departments having conflicting records'
    ],
    deliverables: [
      'Custom database tailored to your exact fields and formulas',
      'Live stock monitoring with low-inventory warnings',
      'Customer order lifecycles from quote to delivery',
      'Full data export and audit trails'
    ],
    processSteps: [
      { step: 1, title: 'Requirement Study', desc: 'We visit or meet to understand every detail of your operations.' },
      { step: 2, title: 'Custom Architecture', desc: 'We design the database tables and operational flows.' },
      { step: 3, title: 'Iterative Builds', desc: 'You review each module as we build it to ensure a perfect fit.' },
      { step: 4, title: 'Deployment & Support', desc: 'We deploy the software on your private cloud with full training.' }
    ],
    faqs: [
      {
        question: 'Can we add new features later as our company expands?',
        answer: 'Yes, our modular architecture is built to scale and accommodate new branches, modules, and staff anytime.'
      }
    ]
  },
  {
    order: 9,
    title: 'Cloud Solutions',
    slug: 'cloud-solutions',
    category: 'Cloud',
    shortDesc: 'Access supported business tools and information online.',
    fullDesc: 'Move your business away from fragile local hard drives. We set up secure, reliable cloud hosting and storage so your systems stay online 24/7 with zero downtime.',
    icon: 'Cloud',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    benefits: ['Convenient remote access', 'Safe team collaboration', 'Scalable infrastructure'],
    whoNeedsIt: [
      'Companies wanting remote work capability for employees',
      'Businesses requiring reliable daily data backups',
      'High-traffic portals needing 99.9% uptime'
    ],
    problemsSolved: [
      'Computer crashes leading to devastating data loss',
      'Inability to work when outside the office',
      'Slow servers crashing during peak customer traffic'
    ],
    deliverables: [
      'Cloud server setup (AWS / DigitalOcean / Google Cloud)',
      'SSL certificates and DDoS security layers',
      'Automated daily off-site database backups',
      'Uptime monitoring and technical maintenance'
    ],
    processSteps: [
      { step: 1, title: 'Infrastructure Review', desc: 'We analyze your current servers, storage, and bandwidth needs.' },
      { step: 2, title: 'Cloud Architecture', desc: 'We select the most cost-effective and secure cloud configuration.' },
      { step: 3, title: 'Migration', desc: 'We migrate your data smoothly with zero business disruption.' },
      { step: 4, title: 'Monitoring', desc: 'Continuous health checks keep your business running smoothly.' }
    ],
    faqs: [
      {
        question: 'Is our company data secure in the cloud?',
        answer: 'Yes, we use enterprise-grade encryption, firewalls, and automated daily backups to ensure complete data security.'
      }
    ]
  }
];

export const defaultProjects = [
  {
    title: 'AromaCraft Natural Products',
    slug: 'aromacraft-natural-products',
    category: 'E-commerce',
    summary: 'A clean, high-conversion online store for an artisanal skincare and fragrance manufacturer.',
    clientType: 'Retail & D2C Manufacturer',
    challenge: 'AromaCraft was taking all customer orders through direct messaging, leading to misplaced addresses, payment confusion, and lost sales.',
    solution: 'Pheunix built a light, pastel-themed e-commerce store with smooth 1-step checkout, Razorpay UPI integration, and automated WhatsApp order confirmations.',
    outcome: 'Eliminated manual order taking entirely; customer reorders increased by 45% within the first 60 days.',
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    tags: ['E-commerce', 'Online Payments', 'WhatsApp Alerts'],
    demoUrl: 'https://pheunix.in/portfolio/aromacraft-natural-products',
    isFeatured: true,
    isDemo: true
  },
  {
    title: 'PrecisionSteel Inventory & Dispatch Portal',
    slug: 'precisionsteel-inventory-portal',
    category: 'Business Applications',
    summary: 'A streamlined web portal for managing raw materials, production batches, and delivery notes.',
    clientType: 'Industrial Manufacturing Company',
    challenge: 'Workers and supervisors were maintaining handwritten ledgers and separate Excel sheets, leading to stock discrepancies during client audits.',
    solution: 'Designed and deployed a lightweight web application accessible on tablets in the factory floor, featuring barcode scanning and automated dispatch receipts.',
    outcome: 'Stock count accuracy reached 99.8% and dispatch preparation time was cut in half.',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    tags: ['Business Software', 'Inventory Management', 'Factory Portal'],
    demoUrl: 'https://pheunix.in/portfolio/precisionsteel-inventory-portal',
    isFeatured: true,
    isDemo: true
  },
  {
    title: 'Nexus Dental Care Clinic',
    slug: 'nexus-dental-care',
    category: 'Websites',
    summary: 'An inviting, modern website with easy patient appointment booking and doctor profile showcases.',
    clientType: 'Healthcare & Dental Practice',
    challenge: 'Patients struggled to find information about treatments and clinic hours, leading to unnecessary reception phone queues.',
    solution: 'Created an accessible, reassuring website with treatment overviews written in friendly language, clear pricing ranges, and direct calendar booking.',
    outcome: 'New patient appointment bookings increased by 65% with 40% booked after clinic hours.',
    thumbnail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    tags: ['Website Design', 'Local SEO', 'Appointment Booking'],
    demoUrl: 'https://pheunix.in/portfolio/nexus-dental-care',
    isFeatured: true,
    isDemo: true
  },
  {
    title: 'FleetTrack Logistics Mobile Companion',
    slug: 'fleettrack-logistics-app',
    category: 'Mobile Apps',
    summary: 'Driver navigation, trip logging, and digital proof-of-delivery mobile application.',
    clientType: 'Logistics & Transport Provider',
    challenge: 'Delivery confirmation slips were often lost or damaged, delaying customer invoicing by up to 2 weeks.',
    solution: 'Pheunix delivered an Android mobile app allowing drivers to capture recipient digital signatures and photo delivery proofs in real time.',
    outcome: 'Instant billing upon delivery reduced invoice collection cycle from 14 days down to 24 hours.',
    thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    tags: ['Mobile App', 'Android', 'Field Operations'],
    demoUrl: 'https://pheunix.in/portfolio/fleettrack-logistics-app',
    isFeatured: true,
    isDemo: true
  },
  {
    title: 'SolarPure CleanTech Lead Generation',
    slug: 'solarpure-cleantech-marketing',
    category: 'Digital Marketing',
    summary: 'High-intent Google Ads and local search optimization campaign for rooftop solar installations.',
    clientType: 'Renewable Energy Solutions',
    challenge: 'High cost-per-lead and irrelevant inquiries from outside the company’s installation service radius.',
    solution: 'Restructured targeted Google Search campaigns with strict radius geofencing and custom landing pages featuring an interactive solar savings calculator.',
    outcome: 'Lead quality improved by 80% while cost per qualified inquiry decreased by 38%.',
    thumbnail: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    tags: ['Google Search Ads', 'Lead Generation', 'Conversion Rate'],
    demoUrl: 'https://pheunix.in/portfolio/solarpure-cleantech-marketing',
    isFeatured: false,
    isDemo: true
  },
  {
    title: 'Apex Financial Advisors Website & Client Hub',
    slug: 'apex-financial-advisors',
    category: 'Websites',
    summary: 'A trustworthy, high-performance website and secure document sharing portal for tax and wealth advisory.',
    clientType: 'Financial Services Firm',
    challenge: 'Prospective clients found the old website dated and lacked a secure place to upload tax documents.',
    solution: 'Designed a clean, professional web presence with clear service breakdowns and an encrypted client file upload area.',
    outcome: 'Over 120 client consultations booked in the first quarter of deployment.',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    tags: ['Corporate Website', 'Secure Uploads', 'Client Portal'],
    demoUrl: 'https://pheunix.in/portfolio/apex-financial-advisors',
    isFeatured: false,
    isDemo: true
  }
];

export const defaultBlogs = [
  {
    title: '5 Signs Your Business Has Outgrown Messy Excel Spreadsheets',
    slug: '5-signs-business-outgrown-excel',
    excerpt: 'Spreadsheets are great for getting started, but as orders grow, they often lead to duplicate data, missed customer follow-ups, and hours of manual cleanup.',
    content: `When you first started your business, keeping records in a simple Excel spreadsheet or Google Sheet made complete sense. It was free, familiar, and flexible.

However, as your business grows, relying on spreadsheets for inventory, orders, and customer details often turns into a major bottleneck.

### 1. Multiple Versions of the Same File
Have you ever seen files named "Orders_Final_v2_Updated_Oct.xlsx"? When different staff members edit separate copies, data gets lost, and nobody knows which version is accurate.

### 2. Manual Data Entry Consumes Your Evenings
If your team spends hours every week copying numbers from receipts or WhatsApp messages into spreadsheets, that is valuable time lost that could have been spent closing sales.

### 3. Accidental Formula Deletions
One accidental keystroke can break a calculation across hundreds of rows without anyone noticing until tax time or client billing.

### 4. No Role-Based Permissions
In a spreadsheet, anyone with access can view sensitive margins, employee salaries, or client contact lists. There is no way to grant partial access.

### 5. Lack of Real-Time Mobile Visibility
When you are meeting a client or traveling, finding information in a 2,000-row spreadsheet on your phone screen is frustrating and slow.

### What Is the Solution?
A lightweight custom web application built specifically for your workflow solves all of these problems. It stores your records safely in the cloud, gives your staff simple screens to enter data without seeing sensitive company financials, and works effortlessly on your phone.`,
    author: 'Pheunix Digital Team',
    readTime: '4 min read',
    category: 'Business Operations',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    publishedAt: new Date('2026-10-15')
  },
  {
    title: 'How a Simple Website Helps Local Manufacturers Win Better Orders',
    slug: 'how-website-helps-manufacturers-win-orders',
    excerpt: 'Many industrial manufacturers rely on word-of-mouth. Here is how a modern digital presence builds instant credibility with high-value corporate buyers.',
    content: `Many manufacturing companies across the country produce outstanding components, machinery, and industrial supplies, yet their digital presence is either completely nonexistent or looks like it was built in 2005.

Here is why that hurts business, and how changing it transforms your pipeline.

### Corporate Buyers Always Research Online First
When a procurement manager or factory owner is looking for a new supplier, the very first thing they do is search online to verify if you are legitimate. If they find no website, or an error-ridden page, they immediately move to your competitor.

### Showcase Your Real Machinery and Quality Standards
A great website does not need to be fancy or complex. What buyers want to see are:
- Photos of your actual factory floor and machinery
- Clear specifications of components you manufacture
- Quality certifications (ISO, BIS, CE)
- Simple enquiry forms to request a bulk quote or spec sheet

### Receive Inquiries from Across the Country
Word of mouth is wonderful, but it is limited to your immediate geographic circle. A search-optimized website puts your machinery catalog in front of engineers and purchasing heads across different states who would have never heard of you otherwise.`,
    author: 'Pheunix Editorial Team',
    readTime: '5 min read',
    category: 'Growth & Strategy',
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    publishedAt: new Date('2026-10-18')
  },
  {
    title: 'The Non-Technical Guide to Getting Found on Google in 2026',
    slug: 'guide-getting-found-on-google-2026',
    excerpt: 'You do not need to understand complex algorithms to rank locally. Learn the three practical steps every business owner should take today.',
    content: `Search Engine Optimization (SEO) sounds intimidating when digital agencies talk in technical buzzwords. But the fundamentals of helping local customers find you are straightforward.

### Step 1: Claim and Perfect Your Google Business Profile
If you serve customers in a specific city, your Google Map listing is your most valuable digital asset.
- Ensure your business name, address, and phone number match everywhere.
- Add real, bright photos of your office, storefront, or work samples.
- Ask satisfied customers to leave genuine reviews.

### Step 2: Answer the Exact Questions Your Customers Ask
Google ranks websites that provide direct, clear answers. Instead of filling your pages with corporate jargon, write simple sentences that answer:
- What products or services do you offer?
- What problems do you solve?
- What areas do you serve?
- How much does it typically cost or how do they get a quote?

### Step 3: Ensure Your Website Loads Fast on Mobile Phones
Over 75% of searches for local services happen on smartphones. If your website takes more than 3 seconds to load or requires pinching and zooming, Google will push you down the rankings.

At Pheunix, we build websites that load in under a second and are structured specifically so search engines understand your business instantly.`,
    author: 'Pheunix Digital Team',
    readTime: '6 min read',
    category: 'Search & Visibility',
    coverImage: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=800&q=80',
    publishedAt: new Date('2026-10-21')
  }
];

export const defaultTestimonials = [
  {
    clientName: 'Rajesh Sharma',
    roleOrBusiness: 'Director, Precision Components Ltd.',
    quote: 'Pheunix explained everything in plain language without throwing confusing tech terms at us. Our new website and factory portal made our operations so much smoother.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    isSample: true,
    approved: true
  },
  {
    clientName: 'Priya Venkatesh',
    roleOrBusiness: 'Founder, Organica Living Store',
    quote: 'Moving our retail shop online felt daunting, but Pheunix walked us through step-by-step. Our online store launched on schedule and customers love how easy it is to order.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    isSample: true,
    approved: true
  },
  {
    clientName: 'Vikram Mehta',
    roleOrBusiness: 'Managing Partner, Apex Legal Consultants',
    quote: 'Their attention to detail and clean, bright design language completely elevated our brand presence. The enquiry form brings quality prospective clients every week.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    isSample: true,
    approved: true
  }
];

export const defaultSettings = {
  companyName: 'Pheunix',
  tagline: 'Your Digital Growth Partner',
  email: 'contact@pheunix.in',
  phone: '+91 98765 43210',
  whatsappNumber: '+919876543210',
  address: '32, Gajendra Nagar, Shobhawato ki Dhani, Opp. Victorian palace, Pal road, Jodhpur, Rajasthan, 342001, India',
  socialLinks: {
    linkedin: 'https://linkedin.com/company/pheunix',
    twitter: 'https://twitter.com/pheunix_tech',
    instagram: 'https://instagram.com/pheunix.in',
    github: 'https://github.com/pheunix'
  }
};


