registerPaint(
  "circle",
  class {
    static get inputProperties() {
      return ["--circle-color"];
    }

    paint(ctx, geom, properties) {
      ctx.fillStyle = properties.get("--circle-color");

      // determine the center point and radius
      const x = geom.width / 2;
      const y = geom.height / 2;
      const radius = Math.min(x, y);

      // draw the circle
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  }
);
