# iClaps - Digital Marketing Website: Complete System Prompts
**Project**: iClaps - Full-Stack Digital Marketing Agency  
**Theme**: Modern Blue & Saffron | Professional | Results-Driven  
**Framework**: React + Tailwind CSS + Framer Motion  
**Target**: B2B Digital Marketing Services

---

## 🎨 DESIGN SYSTEM & THEME GUIDELINES

### Color Palette
- **Primary Blue**: #3b82f6 (Trust, Professionalism, Reliability)
- **Dark Blue**: #1e40af (Authority, Strength)
- **Light Blue**: #dbeafe (Accessibility, Hierarchy)
- **Accent Saffron**: #f97316 (Energy, Urgency, Call-to-Action)
- **Background**: #ffffff / #f9fafb (Clean, Premium)
- **Text Dark**: #1f2937 (Readability)
- **Text Light**: #6b7280 (Secondary Information)

### Typography
- **Font Family**: Inter System Font
- **Headlines**: Bold, sans-serif, 48px+
- **Body**: Regular, 16px, line-height 1.6
- **CTAs**: Medium weight, Saffron background, Blue text hover

### Animation Philosophy
- **Framer Motion** smooth entry animations (opacity + y-transform)
- **Stagger delay**: 0.15s between child elements
- **Hover effects**: Lift, scale, color transition
- **Scroll-triggered**: Fade-in from bottom effect
- **Duration**: 0.7s for main animations, 0.3s for interactions

---

## 📄 PAGE-SPECIFIC SYSTEM PROMPTS

### 🏠 HOME PAGE PROMPT
**Purpose**: Capture attention, communicate value proposition, guide users through funnel  
**Key Sections**: Hero | Benefits | Challenges/Solutions | Services Preview | Portfolio Highlight | CTA

```
You are creating a high-converting landing page for a digital marketing agency (iClaps).

HERO SECTION:
- Lead with a compelling headline (8-12 words) that addresses business pain point
- Include power words: "Results", "Growth", "Proven", "Transparent"
- Subheading should clarify unique value (WHY choose us over competitors)
- Include 2-3 trust signals: Awards, clients, years in business, success metrics
- CTA button: "Start Your Growth Journey" or "Get Free Strategy Audit"
- Hero image/background: Abstract tech visuals or team collaboration imagery

CHALLENGES SECTION (Address 6 pain points):
1. "Marketing subscription confusion" → Solution: Full-stack team approach
2. "Freelancers vs Agencies" → Solution: Unified strategy & transparency
3. "Past bad experiences" → Solution: Performance-backed guarantees
4. "Lack of transparency" → Solution: Weekly dashboards & reporting
5. "Disconnected marketing channels" → Solution: Integrated framework
6. "Need flexibility" → Solution: No lock-in, monthly adjustments

BENEFITS GRID (4 core benefits):
- Each benefit should have icon, title, description (50 words max), and visual
- Connect each to real business outcomes (revenue, traffic, engagement)
- Include concrete numbers: "300% average increase", "60% cost reduction"

SERVICES PREVIEW:
- Show 6-8 flagship services as interactive cards
- Each card: Icon + Title + 1-line description + "Learn More" link
- Arrange in 2x3 or 3x2 grid with hover lift effect

PORTFOLIO HIGHLIGHT:
- Feature 3-4 success stories with before/after metrics
- Each story: Client testimonial + specific results + industry
- Layout: Alternating left/right text + image pattern

CLOSING CTA:
- Strong secondary call-to-action: "Schedule a free 30-min strategy call"
- Include social proof: "Join 500+ growing businesses"
- Add countdown urgency: "Next consultation slots fill up fast"
```

---

### 🛠️ SERVICES PAGE PROMPT
**Purpose**: Showcase all services, build credibility, facilitate discovery  
**Key Sections**: Overview | Service Cards | Deep-Dive Features | Industry Applications | Comparison Table | CTA

```
You are designing a comprehensive services overview page for a digital marketing agency.

PAGE HEADER:
- Headline: "Complete Digital Marketing Solutions Under One Roof"
- Subheading: Emphasize integration and unified strategy (60 words max)
- Short paragraph explaining service synergy

SERVICES GRID (13 services):
1. Search Engine Optimization (SEO) - Organic Visibility
2. Social Media Marketing - Community & Engagement
3. Pay-Per-Click (PPC) - Paid Advertising
4. Content Marketing - Thought Leadership
5. Email Marketing Automation - Conversion Nurturing
6. Data & Analytics - Decision Intelligence
7. Community Management - Audience Relations
8. Influencer Marketing - Reach Expansion
9. Digital Design - Brand Excellence
10. Development - Technical Excellence
11. Conversion Rate Optimization - Performance Tuning
12. Strategic Public Relations - Reputation Building
13. Strategy & Consulting - Foundation

SERVICE CARD STRUCTURE:
- Icon (lucide-react) representing service
- Service title
- 1-line value proposition (15 words max)
- 3-5 key features/deliverables as bullet points
- Estimated ROI or improvement metric
- "Explore Service" link → individual service page
- Color accent: Primary blue with saffron highlight on hover

SERVICE DEPTH SECTION:
For each major service category (group similar ones):
- Problem it solves (2 sentences)
- How we approach it (3-4 steps)
- Expected timeline and results
- Typical budget range (if applicable)
- Case study reference

COMPARISON TABLE:
- Compare: In-house hire | Freelancer | Generic Agency | iClaps
- Criteria: Cost, Quality, Speed, Reporting, Flexibility, Consistency
- Use checkmarks/X's + color coding (green for iClaps advantages)

INTEGRATION CALLOUT:
- Visual diagram showing how all services connect
- Explain synergy effect: "2+2=5 when services work together"
- Include quote from client about integrated approach

FINAL CTA:
- "Can't decide which services?" → "Talk to our strategist"
- Free consultation link with calendar integration
```

---

### 💼 SERVICE DETAIL PAGES (13 INDIVIDUAL PAGES) PROMPT
**Purpose**: Deep-dive into each service, build expertise, drive conversion  
**Key Sections**: Hero | Problem/Solution | Process | Deliverables | Case Studies | Pricing | FAQ | CTA

```
You are creating an in-depth service page for: [SERVICE_NAME]

HERO SECTION:
- Headline: Action-oriented, benefit-focused (8-10 words)
  Example: "Dominate Search Rankings with Strategic SEO" (for SEO page)
- Subheading: Specific outcome promise + timeframe
- Background: Relevant industry imagery or abstract design
- Quick stats: "Avg +250% traffic increase in 6 months"

PROBLEM IDENTIFICATION (150-200 words):
- Start with relatable pain point in target industry
- Address specific challenges this service solves
- Reference common mistakes competitors make
- Include stat/stat about cost of inaction
- Create sense of urgency

SOLUTION FRAMEWORK (Our Approach):
- 5-7 step process with visual timeline
- Each step: Name + description (1-2 sentences) + expected outcome
- Include timeline estimates for each phase
- Show how we differ from competitors
- Emphasize data-driven, transparent methodology

CORE DELIVERABLES:
- List 8-12 specific deliverables clients receive
- For each: name, frequency (weekly/monthly), format, value
- Example for SEO:
  * Keyword research report (initial + monthly updates)
  * Technical SEO audit (quarterly)
  * Content recommendations (ongoing)
  * Competitor analysis (monthly)
  * Ranking tracking dashboard (real-time access)
  * Monthly performance report with strategy adjustments

PROCESS WORKFLOW:
- Visual flowchart showing phases: Discovery → Strategy → Execution → Optimization
- Typical duration: [SERVICE] takes X months to show initial results
- Explain why this timeline is realistic
- Set expectations about lead time

CASE STUDIES (2-3 industry-specific examples):
- Client name (or anonymized) + industry
- Challenge they faced
- Strategy implemented (3-4 key tactics)
- Quantified results (before/after metrics)
- Testimonial quote from client
- Timeline: "Results achieved in X months"

ROI CALCULATOR:
- Interactive tool or simple math explanation
- Show potential revenue impact for different business sizes
- Factor in: current traffic/leads → projected growth → revenue impact
- Emphasize: "Average ROI of X% within Y months"

PRICING & INVESTMENT:
- Transparent pricing structure
- Starter/Standard/Premium tier (or custom)
- What's included at each level
- Payment terms: monthly, quarterly, annual options
- Money-back guarantee or performance guarantee clause

FAQ SECTION (6-8 questions):
- "How long before we see results?"
- "What makes iClaps different from competitors?"
- "Can we pause or modify the service?"
- "What if we're not satisfied?"
- "Do you integrate with [specific tool client likely uses]?"
- "How often do we review progress?"
- "What if we scale our business?"
- "Do you work with startups/established businesses?"

FINAL CTA STACK:
- Primary: "Get [Service] Strategy Session" (calendar)
- Secondary: "View Success Stories"
- Tertiary: "Request Custom Proposal"

TESTIMONIAL/SOCIAL PROOF:
- 2-3 client testimonials specific to this service
- Rating (4.9/5 stars based on client feedback)
- "Trusted by [NUMBER] companies in [INDUSTRIES]"
```

---

### 🖼️ PORTFOLIO PAGE PROMPT
**Purpose**: Demonstrate proven results, build credibility, inspire confidence  
**Key Sections**: Filter Categories | Project Cards | Results Grid | Testimonials | CTA

```
You are designing a portfolio/case studies page showcasing successful projects.

PAGE HEADER:
- Headline: "Results That Speak for Themselves"
- Subheading: "Proven success across industries and business sizes"
- Trust statement: "500+ successful projects | Average ROI improvement: 280%"

FILTER SYSTEM:
- Categories: All Projects | SEO | Social Media | PPC | Content | Design | Development | Multi-Channel
- Allow multiple selections
- Show "Showing X of Y projects" indicator

PROJECT CARDS (Minimum 12 projects, no duplicates):
Each card displays:
- Project thumbnail/image
- Client name (or anonymized)
- Industry sector
- Project title
- 1-line description (key result)
- 3 primary metrics/results

RESULTS VISUALIZATION:
After selecting/viewing projects, show:
- Traffic increase: "Avg +300% organic traffic"
- Revenue impact: "Avg +$2.5M annual revenue growth"
- Engagement metrics: "Avg +450% engagement increase"
- Cost reduction: "Avg 65% CPA reduction"

PROJECT DETAIL MODAL/EXPANDED VIEW:
When user clicks a project:
- Full client story (300-400 words)
- Problem they faced
- Strategy implemented (key tactics)
- Timeline and phases
- Detailed before/after metrics (5-7 KPIs)
- Tools and technologies used
- Client testimonial with photo
- Key learnings/insights
- Related services link

TESTIMONIALS SECTION:
- 4-6 video testimonials (or high-quality quotes with client photo)
- Client name, title, company, industry
- 2-3 sentence quote about results and experience
- Star rating (4.9-5.0 stars)

RESULTS SUMMARY CARDS:
- Card 1: "Total Traffic Driven": X billion+ visits
- Card 2: "Revenue Generated": $X million+ in client revenue
- Card 3: "Success Rate": X% client retention
- Card 4: "Average ROI": X% improvement
- Card 5: "Industries Served": X+ industries
- Card 6: "Years of Success": X years, growing

INDUSTRY BREAKDOWN:
- Show breakdown of projects by industry (bar chart or pie chart)
- Highest success areas highlighted
- Stat: "Best results in [Industry]: avg +X% growth"

CTA SECTION:
- "Ready for similar results?" → Schedule consultation
- "Get a free competitive analysis"
- Include industry-specific suggestion: "See more [YOUR_INDUSTRY] results"
```

---

### ℹ️ ABOUT PAGE PROMPT
**Purpose**: Build brand trust, humanize the company, explain mission  
**Key Sections**: Origin Story | Mission/Vision/Values | Team | Culture | Achievements | CTA

```
You are creating an "About Us" page that builds emotional connection and credibility.

HEADER/HERO:
- Headline: "The Story Behind iClaps"
- Subheading: "Redefining how businesses approach digital marketing"
- Supporting stat: "Trusted by 500+ businesses since [YEAR]"

ORIGIN STORY (300-400 words):
- When was iClaps founded and by whom
- What problem inspired the founding
- Key milestone moments (pivotal decision, major growth event)
- Transition into: "This is who we are today"

MISSION/VISION/VALUES SECTION:

Mission Statement:
- Clear, concise (1 sentence, 15-20 words)
- Focus on impact: "We [ACTION] so that [OUTCOME]"

Vision Statement:
- Where we want to take our clients/industry
- 2-3 sentences, inspiring and aspirational

Core Values (4 values):
1. Results-Driven - Every action tied to measurable outcomes
2. Client-Centric - Your success is our north star
3. Innovation - Stay ahead, challenge status quo
4. Transparency - Open communication, no hidden fees

Each value should have:
- Icon representation
- 1-2 sentence explanation
- How it manifests in our work

TEAM SECTION:
Leadership Team (4-6 key leaders):
- Profile photo (professional headshot)
- Name, title, years in industry
- 2-3 sentence bio: background + expertise + fun fact
- Social media links (LinkedIn, Twitter if applicable)

Department Heads (brief):
- Strategy Team lead
- Execution Team lead
- Design/Creative lead
- Data/Analytics lead
- Client Success lead

"Meet Our Team" interactive gallery (if page supports):
- Show total team size: "X talented professionals"
- Brief team culture description
- Stat: "Avg experience: X years | Certifications: X"

COMPANY ACHIEVEMENTS:
- Awards and recognitions (logos + year)
- Industry certifications
- Media mentions
- Rankings/Reviews (G2, Clutch, etc.)

Timeline of Growth:
- Year founded: "X employees, first Y clients"
- Year +2: "Expanded to [locations]"
- Year +5: "Reached $X revenue"
- Year present: "Serving 500+ active clients"

CULTURE & WORKPLACE:
- Describe company culture (5-6 sentences)
- Include: work environment, values lived daily, benefits, growth opportunities
- Add 2-3 lifestyle photos of team (collaboration, celebrations, office space)
- Stat: "X% employee satisfaction rate"

WHY CHOOSE iClaps (Competitive Differentiation):
6 unique advantages:
1. Integrated Services - All channels under one roof
2. Proven Track Record - [X]% client retention
3. Transparent Reporting - Real-time dashboards
4. Expert Team - [X] certifications, [X] years avg experience
5. Flexible Approach - No long-term contracts
6. Results Guarantee - Performance-backed promise

OUR PARTNERS:
- Google Premier Partner badge (if applicable)
- Hubspot Gold Partner
- Facebook Marketing Partner
- Other platform partnerships
- Technology stack logos: Salesforce, Google Analytics, etc.

CLIENT TESTIMONIALS:
- 2-3 short but powerful testimonials from different industries
- Quote + Client name/title/company
- Emphasis on relationships and long-term partnership

FINAL CTA:
- "Let's Write Your Success Story" → Schedule call
- Add trust stat: "Average client partnership duration: 3+ years"
```

---

### 📧 CONTACT PAGE PROMPT
**Purpose**: Facilitate easy communication, capture leads, build relationship  
**Key Sections**: Contact Form | Contact Info | Response Time Promise | Meeting Scheduler | FAQ

```
You are designing a contact page that converts casual visitors into leads.

PAGE HEADER:
- Headline: "Let's Discuss Your Growth Strategy"
- Subheading: "We respond to all inquiries within 2 business hours"
- Stat: "Average first call within 24 hours"

LEFT COLUMN - CONTACT FORM:
Form fields:
1. Full Name (required)
2. Email (required, validated)
3. Phone Number (required, validated, optional country code)
4. Company Name (optional)
5. Industry/Business Type (dropdown: E-commerce, SaaS, Service, Other)
6. Current Revenue Range (dropdown: <$100K, $100K-$1M, $1M-$10M, $10M+)
7. Website URL (optional)
8. Service Interest (checkboxes, multiple select):
   - SEO
   - Social Media
   - PPC
   - Content Marketing
   - Strategy & Consulting
   - Other / Multi-Service

9. Message/Brief (textarea, min 20 chars):
   Placeholder: "Tell us about your biggest marketing challenge..."
   
10. Preferred Contact Method (radio): Email | Phone | Either

Validation:
- Real-time error messages (red text below field)
- Success confirmation after submission
- Auto-reply email with next steps

Submit button:
- Text: "Send My Inquiry" or "Schedule Free Consultation"
- Color: Saffron background with hover animation
- On-hover: Slight lift, shadow increase

Post-submission:
- Thank you message: "Thanks! We'll be in touch within 2 hours"
- Auto-reply email sent with:
  * What to expect next
  * Link to schedule meeting (Calendly embedded)
  * FAQ section
  * FAQ section about response time

RIGHT COLUMN - CONTACT INFORMATION:

Direct Contacts:
- General Inquiries: contact@iclaps.com
- Phone: [PHONE_NUMBER]
- WhatsApp: Quick message link

Office Location(s):
- Address with map embedded (Google Maps)
- Hours of operation (Mon-Fri 9 AM - 6 PM PT, etc.)
- "Serving clients globally" note

Response Time Guarantee:
- "We respond to all inquiries within 2 business hours"
- "First consultation call booked within 24 hours"
- Weekend inquiries processed Monday morning

Quick Meeting Scheduler:
- "Schedule a free 30-min strategy call"
- Calendly/Cal.com embed showing available slots
- Different calendar types: Discovery Call | Strategy Audit | Custom Proposal Discussion

ALTERNATIVE CONTACT OPTIONS:

Social Media:
- LinkedIn: [LINK] "Connect with our team"
- Twitter: [LINK] "Follow for marketing insights"
- Instagram: [LINK] "See client success stories"

FAQ SECTION (8-10 questions):
1. "How long before we hear back?"
2. "What should I prepare for my first call?"
3. "Do you offer free consultations?"
4. "What if we're in a different timezone?"
5. "Can we get a proposal before committing?"
6. "Do you work with small businesses?"
7. "What's the typical engagement length?"
8. "Can we schedule a call outside business hours?"
9. "What should we discuss on our first call?"
10. "How do you handle confidentiality?"

MIDDLE COLUMN - WHY CONTACT NOW:

4 Reasons to Reach Out:
1. Free Strategy Audit - Assess current marketing (no obligation)
2. Personalized Roadmap - Custom plan for YOUR business
3. Quick Wins - We identify 3-5 immediate improvements
4. Flexible Terms - No lock-in contracts

"Still deciding?"
- Provide downloadable resources: Digital Marketing Audit Checklist, ROI Calculator, Industry Benchmarking Report
- Option to subscribe to newsletter for valuable tips

ROI CALCULATOR CTA:
- "Quick ROI estimator" → Opens modal
- Input: Current revenue, traffic, conversion rate
- Output: Estimated opportunity gap + projected growth with iClaps help
```

---

### 📱 BLOG PAGE (HUB) PROMPT
**Purpose**: Drive organic traffic, establish thought leadership, support SEO  
**Key Sections**: Featured Post | Category Grid | Recent Articles | Newsletter Signup | Search

```
You are creating a blog hub/index page for a digital marketing agency.

PAGE HEADER:
- Headline: "Digital Marketing Insights & Strategies"
- Subheading: "Stay ahead of industry trends with expert insights"
- Tagline: "Updated weekly with actionable strategies"

FEATURED ARTICLE SECTION:
- Large featured image (1200x600px)
- Headline (compelling, SEO-optimized)
- Author name + photo + date + read time
- Excerpt (120-150 words)
- Category tag
- "Read Full Article" CTA button (saffron)

BLOG CATEGORIES (5 main categories with sub-posts):

1. GUIDES
   - Comprehensive, how-to posts (2000+ words)
   - "The Complete Guide to [Topic]"
   - Structure: intro + 5-7 sections + conclusion + resources
   - Posts typically include: checklists, templates, tools recommendations
   - Examples: "SEO Starter Guide", "Social Media Strategy Blueprint"

2. STRATEGIES
   - Tactical, actionable strategy posts (1500-2500 words)
   - Real-world case studies of strategies
   - "5 Proven Strategies for [Objective]"
   - Structure: intro + strategy breakdown + examples + implementation tips
   - Each strategy includes: why it works + step-by-step + tools needed

3. RATINGS & REVIEWS
   - Tool comparisons, platform reviews (1000-1500 words)
   - "[Tool Name] Review: [Year] Edition"
   - Unbiased analysis of marketing tools and platforms
   - Structure: overview + features comparison + pros/cons + who it's best for + pricing
   - Include original testing/screenshots

4. OUR AUTHORS
   - Guest expert contributions and team articles
   - "Meet the Team Behind Our Insights"
   - Author bios linking to their articles
   - Rotation of team experts sharing specialized knowledge
   - Expert articles on their niche (e.g., "Sarah's SEO Insights")

5. EDITORIAL STANDARDS
   - Transparency page about content creation
   - "How We Create Our Content"
   - Editorial guidelines and fact-checking process
   - Sources and data validation
   - Guest contribution policy
   - Conflict of interest disclosures

BLOG GRID (Recent Articles):
- 9-12 articles per page (blog listing view)
- Each article card includes:
  * Thumbnail image (800x500px)
  * Category tag (color-coded)
  * Headline (SEO-optimized, 60 chars max for display)
  * Author name + date + read time
  * Excerpt (150-160 words)
  * "Read More" link
  * Hover effect: lift, shadow, slight color shift

FILTERING & SORTING:
- Filter by category: Guides | Strategies | Ratings | Our Authors
- Sort options: Newest | Most Popular | Most Read
- Search bar: Full-text search across articles
- Tag system: Additional filtering (e.g., "SEO", "Social Media", "Automation")

PAGINATION:
- 9-12 articles per page
- "Load More" button or numbered pagination
- Track total articles count: "Showing 1-9 of 47 articles"

NEWSLETTER SIGNUP (Sticky/Prominent):
- Headline: "Get Weekly Marketing Insights"
- Subheading: "Join 5,000+ marketers receiving actionable strategies"
- Email input field + "Subscribe" button (saffron)
- Privacy note: "No spam, unsubscribe anytime"
- Benefit callout: "Exclusive tips you won't find on the blog"

TRENDING ARTICLES SIDEBAR:
- Top 5 most-read articles this month
- Simple list with view counts
- Links to full articles

EXPERT CONTRIBUTOR SECTION:
- Highlight guest experts contributing to blog
- 3-4 expert profiles with photos
- Bio + specialty + link to their articles
- "Become a Guest Expert?" CTA

SEO OPTIMIZATION:
- Meta description: Article snippet + call to action
- Schema markup: BlogPosting schema for each article
- Internal linking: Related articles at end of each post
- Breadcrumb navigation: Blog > Category > Article

CALL-TO-ACTION SECTIONS:
- After article listings: "Ready to implement these strategies? Schedule a free audit"
- Blog footer CTA: "Subscribe for weekly insights + exclusive guide"

CONTENT CALENDAR PREVIEW:
- Show: "Upcoming this week in the blog"
- Preview upcoming article headlines
- Creates anticipation for regular readers
```

---

### 📊 SERVICE SUB-PAGES FRAMEWORK (Apply to each service)

#### **Individual Service Pages (13 total - No Duplicates)**
1. **Social Media Marketing** - Community building, engagement, campaigns
2. **Search Engine Optimization (SEO)** - Organic visibility, rankings, traffic
3. **Content Marketing** - Strategy, creation, distribution, thought leadership
4. **Conversion Rate Optimization (CRO)** - Testing, optimization, funnel improvement
5. **Email Marketing Automation** - Nurturing, segmentation, lifecycle marketing
6. **Data & Analytics** - Insights, dashboards, decision intelligence
7. **Community Management** - Audience relations, support, engagement
8. **Paid Advertising (PPC)** - Google Ads, Facebook, LinkedIn, ROI optimization
9. **Influencer Marketing** - Partnerships, reach, authentic promotion
10. **Digital Design** - Brand identity, UI/UX, visual assets
11. **Development** - Web development, technical implementation, optimization
12. **Strategic Public Relations** - Media relations, reputation, press releases
13. **Strategy & Consulting** - Foundation, planning, roadmap, competitive analysis

**Prompt for EACH service page (Use template above + this framework):**

```
[Service Name] PAGE STRUCTURE:

1. HERO (400-500 words content)
   - Compelling headline addressing specific outcome
   - Subheading with timeline/guarantee
   - Hero image: industry visualization or abstract
   
2. THE CHALLENGE (200-250 words)
   - Industry-specific pain point
   - Cost of doing nothing
   - Why DIY doesn't work
   
3. OUR APPROACH (400-600 words)
   - 5-7 step process with visual timeline
   - Unique methodology explanation
   - How we differ from competitors
   
4. WHAT YOU GET (500-700 words)
   - 10-15 specific deliverables
   - Frequency and format
   - Tool access/dashboards
   
5. PROVEN RESULTS (300-400 words)
   - 2-3 case studies (industry-specific if possible)
   - Before/after metrics
   - Client testimonial
   
6. INVESTMENT & PRICING (200-300 words)
   - Transparent pricing tiers (Starter/Standard/Premium)
   - What's included at each level
   - Payment options
   - Money-back guarantee
   
7. FAQ (6-8 questions specific to service)
   
8. BOTTOM CTA
   - Calendar link for free strategy session
   - "Get your [Service] audit started today"
```

---

### 🏆 PORTFOLIO/INDUSTRIES PAGE PROMPT
**Purpose**: Show versatility across sectors, build niche credibility  
**Key Sections**: Industry Filters | Success Stories by Sector | Industry-Specific Stats | CTA

```
You are designing an industries/verticals page showcasing sector expertise.

PAGE HEADER:
- Headline: "Proven Success Across [X] Industries"
- Subheading: "Specialized strategies for your sector's unique challenges"
- Stat: "500+ successful projects across [X] major industries"

INDUSTRY SELECTOR:
Interactive dropdown or pill buttons showing:
- E-commerce & Retail
- SaaS & Technology
- B2B Services
- Healthcare & Wellness
- Financial Services
- Education & Training
- Real Estate
- Hospitality & Travel
- Food & Beverage
- Manufacturing & Industrial
- Non-Profit & Associations
- Other Industries

INDUSTRY-SPECIFIC SECTIONS:
For each major industry (top 6):

Header:
- Industry name + emoji/icon
- Industry-specific challenge statement
- "Here's how we help [Industry] businesses grow"

Success Metrics:
- Average results for this sector (e.g., "E-commerce clients avg 280% ROI")
- Common goals in this industry (e.g., "Increase average order value")
- Timeline to results in this sector

Case Study Carousel (2-3 stories per industry):
- Client name (or anonymized)
- Challenge specific to industry
- Strategy implemented
- Results (with industry context)
- Duration of engagement

Industry-Specific Services:
- Top 5 services most relevant to this sector
- Why each service matters for this industry
- Expected impact

Client Testimonial (per industry):
- Quote from client in that industry
- Client name, title, company
- Video clip if available

COMPARATIVE INSIGHTS:
Section: "How Different Industries Benefit"
- Table comparing: Goal | Challenge | Solution | Timeline | Typical ROI
- Rows for 5-6 major industries
- Shows how same services apply differently

SECTOR EXPERTISE STATS:
Grid of 6-9 cards:
1. "E-commerce Projects: 120+"
2. "SaaS/Tech Clients: 85+"
3. "B2B Service Conversions: 200%+ avg"
4. "Healthcare Growth: +350% avg"
5. "Non-Profit Impact: 5M+ reach"
6. And more...

"PERFECT FOR YOUR INDUSTRY" SECTION:
Based on industry selected, show:
- Top challenges we solve in that sector
- Success metrics most important to them
- Timeline to see first results
- Industries we DON'T focus on (transparency builds trust)
- Specific questions to ask when vetting agencies

TEAM BY SECTOR:
- Show specialists/leads for major industries
- "Sarah leads our E-commerce strategy"
- Links to their articles/insights
- Contact them directly for sector-specific consultation

CTA:
- "Schedule an industry-specific consultation"
- "See more [Selected Industry] success stories"
- Calendar showing team members from that sector
```

---

### 🎯 BLOG SUB-PAGES PROMPT

#### **1. GUIDES PAGE**
```
Structure: Comprehensive, tutorial-style, actionable
Word Count: 2500-4000 words per guide
Format: Step-by-step with visuals, checklists, templates

Typical Guide Structure:
- Intro: Problem statement + what reader will learn + benefits
- Table of Contents (internal linking)
- 5-8 Main Sections:
  * Each ~400-600 words
  * Include: explanation + visual (screenshot/diagram) + actionable steps
  * Sidebar: Related tool recommendations
- Checklist (downloadable)
- Templates/Resources (downloadable)
- Common Mistakes (2-3 pitfalls to avoid)
- Tools Recommended (3-5 with brief descriptions)
- Implementation Timeline
- Expected Results/ROI
- Next Steps: "Ready to implement? Schedule a consultation"
- FAQ Section

Examples:
- "The Complete SEO Guide for E-commerce (2024)"
- "Social Media Strategy Blueprint: Step-by-Step"
- "Content Marketing Framework That Converts"
```

#### **2. STRATEGIES PAGE**
```
Structure: Tactical, proven strategies with real-world context
Word Count: 1500-2500 words per strategy
Format: Strategy breakdown with examples + implementation guide

Typical Strategy Structure:
- Headline: "[N] Proven Strategies for [Outcome]"
- Why these strategies work (psychology/data)
- Strategy 1-N breakdown:
  * What it is (100 words)
  * Why it works (research/data)
  * How to implement (step-by-step)
  * Real example (company case study)
  * Expected results
  * Common pitfalls
  * Tools needed
- Quick comparison table (strategies vs each other)
- Which strategy for different business types
- Timeline to results
- CTA: "Let's implement your strategy"
- Related strategies links
```

#### **3. RATINGS & REVIEWS PAGE**
```
Structure: Honest tool reviews and comparisons
Word Count: 1500-2500 words per review
Format: Feature comparison + pros/cons + recommendation

Typical Review Structure:
- Tool name + 2024 edition
- Quick rating: ★★★★☆ (4/5 stars)
- 1-line summary
- "Best for: [Specific use case]"
- Overview (what the tool does, 200 words)
- Features Breakdown:
  * Feature 1: Description + how it works + screenshot
  * Feature 2-6: Same format
- Pricing Comparison Table:
  * Plans compared side-by-side
  * Features per tier
  * Price per month/year
  * Best value highlighted
- Pros (5-7 genuine strengths)
- Cons (5-7 genuine limitations)
- Comparison with competitors (2-3 alternatives)
- Who should use this tool
- Who should look elsewhere
- Our verdict
- Demo video embed (if available)
- CTA: "Get setup guide for [Tool]"
```

#### **4. OUR AUTHORS PAGE**
```
Structure: Team expertise showcase + contribution platform
Content:
- Header: "Meet the Experts Behind Our Content"
- Team member cards (4-8 specialists):
  * Professional photo
  * Name, title, role
  * Bio (150-200 words): Background + specialization + years experience
  * 3-5 Key expertise areas
  * Latest articles (3-5 most recent)
  * Social profiles (LinkedIn, Twitter)
  * "Contact [Name]" button
- Guest expert opportunities section
- How to become a contributing author (application process)
- Email list management: "Get weekly tips from [Author Name]"
- Byline appears on every relevant article linking to author profile
```

#### **5. EDITORIAL STANDARDS PAGE**
```
Structure: Transparency + process documentation
Content:
- Header: "Our Editorial Standards & Process"

Content Creation Process:
- Research phase: Sources used, fact-checking methods
- Writing guidelines: Audience level, tone, structure
- Review process: Internal editorial review steps
- Fact-checking: How we verify data and claims
- Update frequency: How often older content is reviewed
- Correction policy: How we handle errors

Writer Guidelines:
- Target audience definition
- Tone & voice guidelines
- Format standards
- SEO guidelines we follow
- Word count recommendations per content type

Sources & Attribution:
- How we use research
- Citation methods
- Original research vs curation approach
- How we credit sources

Guest Contribution Policy:
- Requirements to submit guest posts
- Editorial review process
- Compensation (if applicable)
- Rights after publication
- Application process
- Contact form for submissions

Conflict of Interest:
- How we disclose affiliate relationships
- Product review standards
- Sponsored content disclosure
- How readers can request corrections
- Ethics committee/approval process

Data & Statistics:
- How we validate statistics
- Sources for industry benchmarks
- When data becomes outdated
- Transparency about sample sizes

Contact/Feedback:
- Submit corrections form
- Guest contribution inquiries
- Content suggestions
- Partnership requests
```

---

### 🏢 COMPANY/ABOUT SUB-PAGES PROMPT

#### **1. ABOUT US (Expanded) PAGE**
```
Deep-dive company overview (already covered above + additions)
Additional sections:
- Company history timeline (visual)
- Founding story (300-400 words narrative)
- Major milestones and pivots
- Awards and recognitions received
- Company statistics (employees, revenue, growth rate)
- International presence (if applicable)
- Company culture descriptions
- Office locations and team spread
- Partnerships and integrations
- Technology stack we use
```

#### **2. AFFILIATE PROGRAM PAGE**
```
Structure: Recruitment + commission information + partner showcase
Content:
- Header: "Join Our Affiliate Program"
- Why become an affiliate (benefits list)

Commission Structure:
- Commission rate (e.g., 20% recurring revenue)
- Cookie duration (e.g., 90 days)
- Minimum payout threshold
- Payment frequency
- Bonus tiers for top performers

How It Works:
- 5-step process (registration, promotion, tracking, conversion, earning)
- Visual flowchart
- Payment methodology

Partner Resources:
- Marketing materials (banners, email templates, social assets)
- Downloadable sales deck
- Success story template
- Tracking links and documentation
- Marketing guidelines
- Monthly newsletter with promotions

Commission Tiers:
- Tier 1: 0-10 referrals/month = 20% commission
- Tier 2: 10-25 = 25% commission
- Tier 3: 25+ = 30% commission
- Bonus: $500 for every 10 closed clients

Top Partners:
- Showcase (anonymized) top earning partners
- Their results/commissions
- Testimonials about program experience

FAQ:
- How often are referrals tracked?
- When do I get paid?
- Can I promote to competitors' audiences?
- Do you have templates/assets?

CTA: "Apply Now" → Form with vetting process
```

#### **3. REWARDS & RECOGNITION PAGE**
```
Structure: Employee/partner appreciation + loyalty program
Content:
- Header: "Celebrating Our Success Together"

Employee Recognition:
- "Employee of the Month" profiles (rotating)
- "Team Member Spotlight" features
- Awards and internal recognition programs
- Work anniversary celebrations
- Performance bonuses/benefits
- Career advancement opportunities
- Professional development budget
- Testimonials from team members about culture

Client Loyalty Program:
- "Partner Status" levels (Bronze/Silver/Gold/Platinum)
- Benefits per tier (discounts, priority support, exclusive features)
- Loyalty points system (if applicable)
- Rewards for referrals
- Anniversary bonuses
- Case study spotlights (featuring long-term clients)

Partner Recognition:
- Featured partner of the month
- Success metrics highlighted
- Testimonials and quotes
- Social media features
- Co-marketing opportunities
- Access to exclusive events

Community Impact:
- Charities we support
- Employee volunteer programs
- Social responsibility initiatives
- Community event sponsorships

Awards & Certifications:
- Industry awards won
- Team member certifications
- Recognition in publications
- Rankings and ratings (G2, Clutch, etc.)

Event Sponsorships:
- Conferences we sponsor
- Webinars hosted
- Community events
- Networking opportunities

Internal Culture Highlights:
- Team photos from events
- Office culture moments
- Team celebrations
- Virtual/remote team activities
- Work anniversary milestones
```

#### **4. PARTNERS PAGE**
```
Structure: Technology ecosystem + strategic partnerships
Content:
- Header: "Our Technology Partners"

Strategic Partnerships:
- Google Premier Partner (badge + "Why we partner with Google")
- Facebook Marketing Partner
- HubSpot Partner
- Salesforce partner ecosystem
- Other platform partnerships

Why Each Partnership:
- What it means for clients
- Exclusive access/benefits
- Training and certifications
- Support advantages
- Integration capabilities

Tools & Integrations We Use:
- Category-based (Analytics | CRM | Automation | Design | etc.)
- For each tool:
  * Logo
  * What it does
  * How we use it
  * How it benefits clients
  * Integration capabilities

Partner Success Stories:
- Case study: How Google partnership enabled client success
- Case study: How HubSpot integration improved workflows
- Metrics from using integrated solutions

Become a Partner:
- "Interested in partnering with iClaps?"
- Partnership benefits
- Types of partnerships (reseller, integration, referral)
- Application process
- Contact form

Technology Stack Diagram:
- Visual showing how our recommended tools interconnect
- Data flow between systems
- Integration points
```

#### **5. CAREERS PAGE**
```
Structure: Recruitment + company culture + benefits
Content:
- Header: "Join Our Growing Team"
- "We're Hiring [X] Positions"

Open Positions:
- List of current openings with:
  * Job title
  * Department
  * Experience level
  * Location (remote/hybrid/office)
  * Brief description (1-2 lines)
  * Salary range (transparent)
  * Quick apply button

Why Work at iClaps:
- 6-8 key benefits/reasons
- Unique culture aspects
- Growth opportunities
- Flexibility/work environment
- Professional development
- Team dynamics

Benefits Package:
- Health insurance (medical, dental, vision)
- Retirement plan (401k, matching)
- PTO policy
- Remote work flexibility
- Professional development budget
- Conference/certification sponsorship
- Team events and offsite budget
- Wellness programs
- Parental leave
- Other perks

Career Paths:
- Show progression levels
- Example paths: "Individual Contributor → Senior → Lead → Manager"
- Skill development opportunities
- Mentorship programs
- Internal mobility

Meet the Team:
- 6-8 team member profiles
- Photos, names, roles, tenure
- How they joined iClaps
- What they love about working here
- Testimonials about company culture
- LinkedIn profiles

Application Process:
- 5-step process with timeline
- What to expect at each stage
- Time to decision

Company Culture:
- Photo gallery from team events
- Office/remote setup insights
- Values in action (stories)
- Employee testimonials
- Work-life balance emphasis
- Diversity and inclusion statement

Diversity & Inclusion:
- Our D&I commitment
- Current makeup of team (transparency)
- Resources for underrepresented groups
- EEO policy

FAQ:
- Remote work options?
- What's the application timeline?
- Do you sponsor visas?
- What's the interview process?
- Can I submit portfolio/examples?

Apply Now CTA:
- Application form with:
  * Resume upload
  * LinkedIn profile
  * Cover letter / brief intro
  * Position of interest
  * Questions about role
```

#### **6. EVENTS PAGE**
```
Structure: Company events + conference participation + webinars
Content:
- Header: "Connect With iClaps"

Upcoming Events:
- Webinars hosted (dates, topics, register links)
- Conferences we're attending
- Trade show participation
- Networking events
- Team-hosted workshops
- Client appreciation events

Virtual Events Calendar:
- Upcoming webinars with:
  * Topic
  * Date and time
  * Duration
  * Speaker(s)
  * Description (100 words)
  * Register button
  * Replay available (if past event)

Past Events/Resources:
- Webinar recordings (with transcripts)
- Downloadable presentations
- Key takeaways summaries
- Photo galleries from events
- Event recaps and highlights

Conferences We Attend:
- List of annual conferences
- Booth location/booth number
- Schedule of presentations
- Team members attending
- How to meet us there
- Post-conference resources/recaps

Hosted Webinar Topics:
- "Digital Marketing Trends 2024"
- "ROI Maximization Strategies"
- "Tools that Save Time and Money"
- "Case Study: How [Company] Grew 300%"
- Industry-specific webinars

Speaking Engagements:
- Team member speaking appearances
- Upcoming presentations
- Past speaking engagements
- Topics expertise

Sponsorships:
- Events we sponsor
- Industry association memberships
- Community initiatives supported
- Why we choose to sponsor certain events

Newsletter for Event Updates:
- Email signup for event announcements
- Early access for registered subscribers
- Monthly event roundup
- Industry news digest

Virtual Event Etiquette:
- What to expect in our webinars
- Q&A guidelines
- Recording policy
- Certificate of attendance info (if applicable)

Contact for Speaking Opportunities:
- "Want us to speak at your event?"
- Inquiry form
- Topics we present on
```

#### **7. CONTACTS PAGE (Expanded Contact Info)**
```
Multiple Contact Channels:

Main Office:
- Address with embedded map
- Hours
- Parking info (if applicable)
- Public transit directions

Team Directory:
- By department or role
- Team member names, titles, emails
- Specializations
- Direct phone extensions
- Response time expectations

Service-Specific Contacts:
- SEO inquiries → [Contact Name]
- Social Media → [Contact Name]
- Etc.

Department Contact:
- Sales/New business
- Client success/Support
- Technical questions
- Partnership inquiries
- Job inquiries
- PR/Media inquiries

International Offices:
- Multiple office locations (if applicable)
- Time zone information
- Regional contact info
- Local language support

Communication Preferences:
- Preferred contact method options
- Response time SLAs
- Holiday schedule/closures
- Emergency contacts

Social Media Directory:
- LinkedIn company page
- Twitter/X account
- Instagram
- Facebook
- YouTube

Office Features/Amenities:
- Video tour of office
- Parking information
- Public transit access
- Coffee/break room
- Meeting room booking (if available)
```

---

## ⚡ ADDITIONAL PAGES PROMPTS

### 🌟 SUCCESS STORIES PAGE
```
Structure: Long-form case studies + video testimonials
Content:
- Featured success story (2000+ words, video + photos)
- 3-4 mid-length case studies (800-1200 words each)
- Quick-view case study tiles (100-150 words, metrics highlighted)
- Video testimonial from satisfied client
- "Ready for similar results?" CTA

Each Case Study Includes:
- Client overview (industry, size, challenges)
- Initial situation (before we worked together)
- Strategy implemented
- Timeline
- Specific tactics used
- Results achieved (quantified)
- Client testimonial
- Lessons learned
- Client contact (if willing to be reference)
- Related services offered
```

### 👥 PEOPLE/TEAM PAGE
```
Structure: Team showcase + expertise directory
Content:
- Team size stat
- Org chart (optional)
- Team member cards (full team):
  * Photo
  * Name, title, role
  * Years of experience
  * Specialization(s)
  * Certifications
  * Recent wins/projects
  * Fun fact/bio
  * Social profiles
  * "Learn more" link to detailed profile

Department Sections:
- Strategy & Consulting Team
- SEO Specialists
- Social Media Experts
- Content Creators
- Design Team
- Development Team
- Client Success Team
- Data & Analytics Specialists

Team Culture Section:
- How we work together
- Collaboration tools/processes
- Team values in action
- Photo gallery from team moments
- Virtual team activities (if remote)
- Office culture (if office-based)
```

### 💰 PRICING PAGE
```
Structure: Transparent pricing + service bundles + calculator
Content:
- Headline: "Simple, Transparent Pricing"
- Note: "No hidden fees, cancel anytime"

Pricing Tiers:
For each service/bundle:
- Starter: $XXX/month (what's included)
- Professional: $XXX/month (what's included)
- Enterprise: Custom (contact us)

Each tier includes:
- 5-10 key features
- Service level (response time, meetings, etc.)
- Tools access
- Reporting frequency
- Support level
- "Get Started" button

Service Bundles:
- Bundle 1: "Essentials" (3 services) - $XXX/month
- Bundle 2: "Growth" (5 services) - $XXX/month
- Bundle 3: "Complete" (All services) - $XXX/month
- Custom bundles available

ROI Calculator:
- Input current traffic/leads/revenue
- Select services interested in
- Output: Projected growth + potential revenue
- "See projected results" → leads to pricing/service page

Comparison Table:
- vs. Freelancer
- vs. Generic Agency
- vs. DIY Tools
- vs. iClaps (highlighted advantage)

Frequently Asked Pricing Questions:
- Payment terms and methods
- Contract minimums
- Cancellation policy
- Refund policy
- Add-on costs
- Volume discounts

Money-Back Guarantee:
- Explanation of performance guarantee
- How it works
- Conditions
- Process for guarantee claim

Case Study: ROI Examples:
- Business 1: Invested $X, gained $XX revenue
- Business 2: Invested $X, gained $XX revenue
- Business 3: Invested $X, gained $XX revenue

Special Offers:
- Limited-time promotions (if any)
- Quarterly billing discount
- Annual commitment discount
- Referral bonuses
- First-month specials

Schedule Consultation:
- "Not sure which plan?" → Book free consultation
- Calendar showing availability
- Personalized recommendation form
```

### 🏭 INDUSTRIES PAGE (Alternative Structure)
```
Comprehensive industry overview page
(Combines portfolio + industry expertise)

Sections:
1. Hero: "Specialized Digital Marketing for Every Industry"
2. Industry selector (12+ industries)
3. For each selected industry:
   - Industry challenges (3-4)
   - Our approach for this industry
   - Services most relevant
   - Success stories (2-3)
   - Client testimonials
   - Industry statistics/benchmarks
4. Industry expert profiles
5. "Schedule industry-specific consultation"
```

---

## 🔧 TECHNICAL IMPLEMENTATION NOTES

### Animation Standards (Apply to All Pages)
```
Fade Up Entry (Hero & Main Sections):
- Initial: opacity: 0, y: 50px
- Duration: 0.7s
- Easing: easeOut

Stagger Effect (Card Grids):
- Delay between children: 0.15s
- Total stagger time: 0.15s × number of items

Hover Interactions:
- Scale: 1.02-1.05
- Shadow expansion
- Color transition: 0.3s
- Cursor: pointer

Scroll Trigger (Optional):
- Elements fade in on scroll into viewport
- Parallax effects on hero images (subtle, 20-30% offset)

Mobile Animations:
- Reduce complexity on mobile (remove parallax)
- Faster stagger on smaller screens
- Touch-friendly interaction targets (min 44px)
```

### SEO Guidelines (All Pages)
```
- Meta title: 50-60 characters
- Meta description: 150-160 characters
- H1: One per page, keyword-rich
- H2-H3: Logical hierarchy
- Internal linking: 3-5 relevant links per page
- External links: Authoritative sources only
- Image alt text: Descriptive, keyword-aware
- Schema markup: Article, LocalBusiness, Organization
- Page speed: Optimize images, lazy load
- Mobile responsive: Mobile-first approach
```

### Accessibility Standards (All Pages)
```
- Color contrast: WCAG AA minimum (4.5:1 for text)
- ARIA labels: Form inputs, buttons, dynamic content
- Keyboard navigation: All interactive elements
- Focus indicators: Visible on all interactive elements
- Semantic HTML: Proper heading structure
- Captions: Videos with captions/transcripts
- Alt text: All images described
```

---

## 📋 CONTENT GUIDELINES

### Tone of Voice
- **Professional but approachable** - Not stuffy, but authoritative
- **Benefit-focused** - Always connect to client value
- **Data-driven** - Back claims with numbers and examples
- **Action-oriented** - Use strong verbs, clear CTAs
- **Transparent** - No marketing fluff, honest limitations

### Writing Standards
- Sentences: Max 20 words average
- Paragraphs: Max 3-4 sentences
- Use bullet points for lists (max 5-7 items)
- Numbers: Always use numerals (5 not five)
- CTAs: Action-verb first ("Schedule", "Get", "Discover")
- Avoid: Jargon, hype words without substance, corporate clichés

### Brand Language Examples
- ❌ "Maximize synergies" → ✅ "Get aligned strategy"
- ❌ "Cutting-edge solutions" → ✅ "Proven strategies"
- ❌ "Paradigm shift" → ✅ "Measurable growth"
- ❌ "Optimal" → ✅ "Practical" or "Effective"

---

## 🎯 CONVERSION OPTIMIZATION

### CTA Button Best Practices
- Primary CTA (Saffron background, white/dark text)
- Secondary CTA (White background, saffron text)
- Clear value prop in button text ("Get Free Audit" vs "Submit")
- Contrast minimum: 4.5:1
- Size: 16-18px font, 12px+ padding

### Form Optimization
- Progressive disclosure: Only ask essential fields initially
- Clear labels above fields (not inside)
- Error messages: Inline, below field, specific ("Email format invalid")
- Success confirmation: Show immediately, next step clear
- Mobile: Full-width fields, larger touch targets

### Page Load Performance
- Lazy load images below fold
- Compress images (80-85% quality)
- Minify CSS/JS
- Optimize font loading
- Cache static assets

---

## 📞 NEXT STEPS

This prompt document serves as the **master blueprint** for all content creation across the iClaps website. Use for:

1. **Content creation**: Brief writers/designers with these prompts
2. **AI-assisted writing**: Feed to ChatGPT/Claude with specific page prompt
3. **QA checklist**: Verify page covers all sections in relevant prompt
4. **Consistency**: Ensure all pages follow brand guidelines and tone
5. **Training**: Onboard new team members on site structure and standards

**Remember**: 
- ✅ One prompt per page type (no duplicates)
- ✅ Deep, comprehensive prompts (not generic)
- ✅ Focused on theme & conversion
- ✅ Actionable for content creators/developers
- ✅ Aligned with business goals
