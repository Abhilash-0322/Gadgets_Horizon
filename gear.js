let gear1=document.getElementById("gear1");

gear1.addEventListener("click", function(){
    var gear = new LumaSplatsThree({
        source: 'https://lumalabs.ai/capture/4da7cf32-865a-4515-8cb9-9dfc574c90c2',
        loadingAnimationEnabled: false,
    });
    
    gear.onLoad = () => {
        gear.captureCubemap(renderer).then((capturedTexture) => {
            scene.environment = capturedTexture;
            scene.background = capturedTexture;
            scene.backgroundBlurriness = 0.5;
        });
    }
});