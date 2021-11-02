/*
TN
*/
const cubism4Model =
  "mosigang/mosigang.model3.json"; // 모델 설정

const live2d = PIXI.live2d; 

(async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    resizeTo: window,
    backgroundColor: 0xEAE3D1
  });

  const models = await Promise.all([
    live2d.Live2DModel.from(cubism4Model)
  ]);

    models.forEach((model) => {
    app.stage.addChild(model);

    model.scale.set(0.5)
    model.x = innerWidth * 0.4 - model.width/2;
    model.y = innerHeight * 0.6 - model.height/2;
  });
  const model4 = models[0];

  // handle tapping
  model4.on("hit", (hitAreas) => {
    if (hitAreas.includes("Car")) {
      model4.motion("TapCar");
    }
  });
})();
