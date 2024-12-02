import { LumaSplatsSemantics, LumaSplatsThree } from "@lumaai/luma-web";
let splats = new LumaSplatsThree({
	source: 'https://lumalabs.ai/capture/4da7cf32-865a-4515-8cb9-9dfc574c90c2',

	// disable loading animation so model is fully rendered after onLoad
	loadingAnimationEnabled: false,
});

splats.onLoad = () => {
	splats.captureCubemap(renderer).then((capturedTexture) => {
		scene.environment = capturedTexture;
		scene.background = capturedTexture;
		scene.backgroundBlurriness = 0.5;
	});
}