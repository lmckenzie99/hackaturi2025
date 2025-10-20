// src/pages/Sponsors.jsx
import React, { useState, useEffect } from 'react';
import starsSvg from '../assets/stars-bg.svg';
import sponsorScrollSvg from '../assets/sponsor-scroll.svg';
import './Sponsors.css';

const Sponsors = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sponsors = [
    {
      name: 'RiseUp',
      logo: '/images/sponsors/riseup.png',
    },
    {
      name: 'URI Research Foundation',
      logo: '/images/sponsors/urirf-transparent.png',
    },
    {
      name: 'yconic',
      logo: '/images/sponsors/yconic-transparent.png',
    },
    {
      name: 'MergeFund',
      logo: '/images/sponsors/mergefund-transparent.png',
    }
  ];

  const donors = [
    'Joel Totoro',
    'Anne Totoro',
    'Stacey Azevedo',
  ];

  return (
    <div className="pirate-sponsors">
      {/* Animated stars */}
      <img src={starsSvg} alt="" className="sponsor-star star-1" />
      <img src={starsSvg} alt="" className="sponsor-star star-2" />
      <img src={starsSvg} alt="" className="sponsor-star star-3" />
      <img src={starsSvg} alt="" className="sponsor-star star-4" />
      <img src={starsSvg} alt="" className="sponsor-star star-5" />

      <div className="sponsors-content">
        <h1 className="sponsors-title">Our Sponsors</h1>
        <p>We're grateful to our amazing sponsors who make Hack@URI 2026 possible!</p>
        
        {!isMobile ? (
          <div className="scroll-container">
            <img src={sponsorScrollSvg} alt="Sponsor Scroll" className="sponsor-scroll" />
            
            <div className="sponsors-inside-scroll">
              <div className="sponsors-grid">
                {sponsors.map((sponsor, index) => (
                  <div key={index} className="sponsor-logo-container">
                    <img 
                      src={sponsor.logo} 
                      alt={`${sponsor.name} logo`}
                      className="sponsor-logo"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="sponsor-fallback" style={{ display: 'none' }}>
                      {sponsor.name}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="donors-section-inside">
                <h3 className="donors-title-inside">Our Generous Donors</h3>
                <div className="donors-list-inside">
                  {donors.map((donor, index) => (
                    <div key={index} className="donor-name-inside">
                      {donor}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mobile-sponsors-container">
            <div className="mobile-sponsors-grid">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="mobile-sponsor-logo-container">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    className="mobile-sponsor-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="mobile-sponsor-fallback" style={{ display: 'none' }}>
                    {sponsor.name}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mobile-donors-section">
              <h3 className="mobile-donors-title">Our Generous Donors</h3>
              <div className="mobile-donors-list">
                {donors.map((donor, index) => (
                  <div key={index} className="mobile-donor-name">
                    {donor}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Sponsors;