import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
    projectRoot: './src',
    projectName: 'demo',
    distFolder: './dist/[PROJECT_NAME]', // output directory of your Angular build artifacts
    outDir: './dist/static', // directory for scully build artifacts
    defaultPostRenderers: [],
    routes: {},
};