import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';
import { fileURLToPath } from 'url';

const coverageconf = {
    include: ["src/*"]
}

export default {
    files: ['test/**/*.test.ts', 'test/**/*.spec.ts'],
    plugins: [esbuildPlugin({
        ts: true,
        tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url))
    })],
    coverageConfig: coverageconf,
    browsers: [
        playwrightLauncher({ product: 'chromium' }),
        playwrightLauncher({ product: 'firefox' }),
        playwrightLauncher({ product: 'webkit' }),
    ],
    port: 6010
};
