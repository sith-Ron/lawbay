import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between bottom-0 left-0 right-0 p-4 bg-orange-200 shadow-md ">
        <p className="text-center text-gray-800">
            &copy; 2025 Law Bay Advocates. All rights reserved.
        </p>
      <div className="flex items-center justify-center space-x-4">
        <a href="https://twitter.com/law_bay" target="_blank" rel="noopener noreferrer">
          <XIcon sx={{ color: '#1DA1F2' }} />
        </a>
        <a href="https://www.linkedin.com/company/law-bay-advocates/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon sx={{ color: '#0e76a8' }} />
        </a>
        <a href="https://www.facebook.com/Law-Bay-Advocates-101454428481551" target="_blank" rel="noopener noreferrer">
          <FacebookIcon sx={{ color: '#4267B2' }} />
        </a>
        <a href="https://www.instagram.com/law_bay_advocates/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon sx={{ color: '#e1306c' }} />
        </a>
      </div>
    </footer>
  );
}
