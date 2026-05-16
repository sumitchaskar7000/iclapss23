const DigitalMarketingIllustration = () => {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Modern Gradients */}
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1d4ed8', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ea580c', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0d9488', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* TRANSPARENT BACKGROUND - Ready for PNG export */}

        {/* Central Device - Tablet/Screen */}
        <g transform="translate(150, 80)" filter="url(#shadow)">
          {/* Device Frame */}
          <rect x="0" y="0" width="300" height="200" rx="20" fill="#1e293b" />
          <rect x="10" y="10" width="280" height="180" rx="15" fill="#0f172a" />
          
          {/* Dashboard Content */}
          <rect x="25" y="25" width="250" height="150" rx="10" fill="#1e293b" />
          
          {/* Header Bar */}
          <rect x="25" y="25" width="250" height="30" rx="10" fill="#2563eb" opacity="0.2" />
          <text x="150" y="45" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif">Analytics Dashboard</text>
          
          {/* Chart Area */}
          <g transform="translate(40, 70)">
            {/* Bar Chart */}
            <rect x="0" y="50" width="25" height="30" rx="4" fill="url(#blueGrad)" />
            <rect x="35" y="40" width="25" height="40" rx="4" fill="url(#blueGrad)" />
            <rect x="70" y="30" width="25" height="50" rx="4" fill="url(#orangeGrad)" />
            <rect x="105" y="20" width="25" height="60" rx="4" fill="url(#orangeGrad)" />
            <rect x="140" y="15" width="25" height="65" rx="4" fill="url(#tealGrad)" />
            <rect x="175" y="10" width="25" height="70" rx="4" fill="url(#tealGrad)" />
            
            {/* Line Graph */}
            <path
              d="M 12.5 80 L 47.5 70 L 82.5 60 L 117.5 50 L 152.5 45 L 187.5 40"
              stroke="#14b8a6"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Data Points */}
            <circle cx="12.5" cy="80" r="3" fill="#14b8a6" />
            <circle cx="47.5" cy="70" r="3" fill="#14b8a6" />
            <circle cx="82.5" cy="60" r="3" fill="#14b8a6" />
            <circle cx="117.5" cy="50" r="3" fill="#14b8a6" />
            <circle cx="152.5" cy="45" r="3" fill="#14b8a6" />
            <circle cx="187.5" cy="40" r="3" fill="#14b8a6" />
            
            {/* Growth Badge */}
            <rect x="165" y="5" width="50" height="20" rx="10" fill="#10b981" />
            <text x="190" y="18" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">+250%</text>
          </g>
        </g>

        {/* SEO Icon - Top Left */}
        <g transform="translate(50, 50)" filter="url(#shadow)">
          <circle cx="40" cy="40" r="35" fill="url(#blueGrad)" />
          {/* Search Icon */}
          <circle cx="40" cy="40" r="18" fill="none" stroke="white" strokeWidth="3" />
          <line x1="52" y1="52" x2="62" y2="62" stroke="white" strokeWidth="3" strokeLinecap="round" />
          {/* Target Rings */}
          <circle cx="40" cy="40" r="12" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
          <circle cx="40" cy="40" r="6" fill="white" opacity="0.8" />
        </g>

        {/* Social Media Icon - Top Right */}
        <g transform="translate(480, 50)" filter="url(#shadow)">
          <rect x="0" y="0" width="70" height="70" rx="18" fill="url(#orangeGrad)" />
          {/* Share Icon */}
          <circle cx="20" cy="20" r="6" fill="white" />
          <circle cx="35" cy="20" r="6" fill="white" />
          <circle cx="50" cy="20" r="6" fill="white" />
          <circle cx="20" cy="35" r="6" fill="white" />
          <circle cx="35" cy="35" r="6" fill="white" />
          <circle cx="50" cy="35" r="6" fill="white" />
          <circle cx="20" cy="50" r="6" fill="white" />
          <circle cx="35" cy="50" r="6" fill="white" />
          <circle cx="50" cy="50" r="6" fill="white" />
          {/* Connection Lines */}
          <line x1="20" y1="20" x2="35" y2="20" stroke="white" strokeWidth="2" opacity="0.7" />
          <line x1="35" y1="20" x2="50" y2="20" stroke="white" strokeWidth="2" opacity="0.7" />
          <line x1="20" y1="35" x2="35" y2="35" stroke="white" strokeWidth="2" opacity="0.7" />
          <line x1="35" y1="35" x2="50" y2="35" stroke="white" strokeWidth="2" opacity="0.7" />
          <line x1="20" y1="20" x2="20" y2="35" stroke="white" strokeWidth="2" opacity="0.7" />
          <line x1="35" y1="20" x2="35" y2="35" stroke="white" strokeWidth="2" opacity="0.7" />
        </g>

        {/* Email Marketing Icon - Bottom Left */}
        <g transform="translate(50, 280)" filter="url(#shadow)">
          <rect x="0" y="0" width="70" height="70" rx="18" fill="url(#tealGrad)" />
          {/* Envelope */}
          <rect x="15" y="20" width="40" height="30" rx="4" fill="white" />
          <path
            d="M 15 20 L 35 35 L 55 20"
            stroke="url(#tealGrad)"
            strokeWidth="2.5"
            fill="url(#tealGrad)"
            opacity="0.3"
          />
          <path
            d="M 15 20 L 35 35 L 55 20"
            fill="none"
            stroke="url(#tealGrad)"
            strokeWidth="2"
          />
          {/* Mail Dot */}
          <circle cx="35" cy="35" r="4" fill="url(#tealGrad)" />
        </g>

        {/* Analytics Icon - Bottom Right */}
        <g transform="translate(480, 280)" filter="url(#shadow)">
          <rect x="0" y="0" width="70" height="70" rx="18" fill="url(#orangeGrad)" />
          {/* Chart Bars */}
          <rect x="18" y="45" width="10" height="18" rx="2" fill="white" />
          <rect x="32" y="35" width="10" height="28" rx="2" fill="white" />
          <rect x="46" y="25" width="10" height="38" rx="2" fill="white" />
          {/* Trend Line */}
          <path
            d="M 23 54 L 37 44 L 51 34"
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* Arrow Up */}
          <path
            d="M 46 25 L 51 20 L 46 25 L 51 30"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Content Marketing Icon - Left Center */}
        <g transform="translate(50, 165)" filter="url(#shadow)">
          <rect x="0" y="0" width="70" height="70" rx="18" fill="url(#tealGrad)" />
          {/* Document/Text Icon */}
          <rect x="20" y="15" width="30" height="40" rx="3" fill="white" />
          <line x1="25" y1="25" x2="45" y2="25" stroke="url(#tealGrad)" strokeWidth="2" strokeLinecap="round" />
          <line x1="25" y1="32" x2="45" y2="32" stroke="url(#tealGrad)" strokeWidth="2" strokeLinecap="round" />
          <line x1="25" y1="39" x2="40" y2="39" stroke="url(#tealGrad)" strokeWidth="2" strokeLinecap="round" />
          <line x1="25" y1="46" x2="42" y2="46" stroke="url(#tealGrad)" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* PPC/Ads Icon - Right Center */}
        <g transform="translate(480, 165)" filter="url(#shadow)">
          <rect x="0" y="0" width="70" height="70" rx="18" fill="url(#blueGrad)" />
          {/* Target/Ads Icon */}
          <circle cx="35" cy="35" r="20" fill="none" stroke="white" strokeWidth="2.5" />
          <circle cx="35" cy="35" r="12" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="35" cy="35" r="6" fill="white" />
          {/* Arrow */}
          <path
            d="M 35 15 L 35 25 M 35 15 L 30 20 M 35 15 L 40 20"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* Connecting Lines - Decorative */}
        <g opacity="0.3" stroke="#2563eb" strokeWidth="2" strokeDasharray="5,5">
          <line x1="120" y1="85" x2="150" y2="85" />
          <line x1="450" y1="85" x2="480" y2="85" />
          <line x1="120" y1="315" x2="150" y2="315" />
          <line x1="450" y1="315" x2="480" y2="315" />
        </g>

        {/* Floating Elements - Decorative */}
        <g opacity="0.6">
          <circle cx="100" cy="200" r="4" fill="url(#blueGrad)" filter="url(#glow)" />
          <circle cx="500" cy="200" r="4" fill="url(#orangeGrad)" filter="url(#glow)" />
          <circle cx="150" cy="100" r="3" fill="url(#tealGrad)" filter="url(#glow)" />
          <circle cx="450" cy="100" r="3" fill="url(#tealGrad)" filter="url(#glow)" />
          <circle cx="100" cy="300" r="3" fill="url(#orangeGrad)" filter="url(#glow)" />
          <circle cx="500" cy="300" r="3" fill="url(#blueGrad)" filter="url(#glow)" />
        </g>
      </svg>
    </div>
  )
}

export default DigitalMarketingIllustration
