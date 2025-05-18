
/**
 * Utility for loading content from JSON files
 */

import aboutData from '../content/about.json';
import servicesData from '../content/services.json';
import portfolioData from '../content/portfolio.json';
import testimonialsData from '../content/testimonials.json';

export const getAboutContent = () => {
  return aboutData;
};

export const getServicesContent = () => {
  return servicesData;
};

export const getPortfolioContent = () => {
  return portfolioData;
};

export const getTestimonialsContent = () => {
  return testimonialsData;
};
