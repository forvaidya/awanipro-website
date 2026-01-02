import { BUILD_INFO } from '../build-info';

export const getVersionInfo = () => BUILD_INFO;

export const logVersionInfo = () => {
  console.log('%c⚙️ Build Info', 'font-weight: bold; font-size: 14px; color: #6366f1;');
  console.log(`SHA: ${BUILD_INFO.sha}`);
  console.log(`Branch: ${BUILD_INFO.branch}`);
  console.log(`Built: ${new Date(BUILD_INFO.timestamp).toLocaleString()}`);
  console.log(`Repository: ${BUILD_INFO.url}`);
};
