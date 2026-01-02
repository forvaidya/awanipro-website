import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

try {
  const sha = execSync('git rev-parse --short HEAD', { encoding: 'utf-8' }).trim();
  const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();
  const timestamp = new Date().toISOString();

  const versionContent = `export const BUILD_INFO = {
  sha: '${sha}',
  branch: '${branch}',
  timestamp: '${timestamp}',
  url: 'https://github.com/forvaidya/awanipro-website/commit/${sha}',
} as const;
`;

  writeFileSync(`${__dirname}/../src/build-info.ts`, versionContent);
  console.log(`✓ Generated build info: SHA ${sha} on ${branch}`);
} catch (error) {
  console.error('Failed to generate build info:', error.message);
  // Fallback for environments without git
  const fallbackContent = `export const BUILD_INFO = {
  sha: 'unknown',
  branch: 'unknown',
  timestamp: '${new Date().toISOString()}',
  url: '#',
} as const;
`;
  writeFileSync(`${__dirname}/../src/build-info.ts`, fallbackContent);
  console.log('✓ Generated fallback build info');
}
