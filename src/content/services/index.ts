import customSoftwarePage from './custom-software';
import webDevelopmentPage from './web-development';
import landingPageDevelopmentPage from './landing-page-development';
import systemRecoveryPage from './system-recovery';

const rawServices = [
  customSoftwarePage,
  webDevelopmentPage,
  landingPageDevelopmentPage,
  systemRecoveryPage,
] as const;

export default rawServices;