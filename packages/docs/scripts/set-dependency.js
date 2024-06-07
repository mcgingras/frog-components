// packages/docs/scripts/set-dependency.js
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve(__dirname, '../package.json');
const packageJson = require(packageJsonPath);

const usePublished = process.env.USE_PUBLISHED === 'true';

packageJson.dependencies['frog-components'] = usePublished
  ? '0.0.1' // Use the latest published version
  : '*'; // Use the linked local version

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log(`Set @design-component-library/components to ${usePublished ? 'published version' : 'linked local version'}`);
