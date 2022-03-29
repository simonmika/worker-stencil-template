import { Config } from "@stencil/core"

// https://stenciljs.com/docs/config

export const config: Config = {
	globalStyle: "ui/src/global/app.css",
	globalScript: "ui/src/global/app.ts",
	taskQueue: "async",
	srcDir: "ui/src",
	tsconfig: "tsconfig.ui.json",
	sourceMap: true,
	outputTargets: [
		{
			type: "www",
			// comment the following line to disable service workers in production
			serviceWorker: null,
			baseUrl: "https://myapp.local/",
			dir: "dist/ui/",
		},
	],
}
