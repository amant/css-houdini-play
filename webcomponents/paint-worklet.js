registerPaint(
  "angled-corners",
  class {
    static get inputProperties() {
      return [
        "--lion-button-radius",
        "--lion-button-stroke-color",
        "--lion-button-stroke-weight",
        "--lion-button-fill-color",
      ];
    }
    paint(ctx, geom, properties) {
      let radii = properties
        .get("--lion-button-radius")
        .toString()
        .trim()
        .split(" ");

      const inset =
        parseInt(properties.get("--lion-button-stroke-weight")[0]) / 2 || 0;
      const radius1 = radii[0];
      const radius2 = radii[1];
      const radius3 = radii[2];
      const radius4 = radii[3];

      const points = [
        { x: inset, y: radius1 }, //x0,y0
        { x: radius1, y: inset }, //x1,y1
        { x: geom.width - radius2, y: inset }, //x2,y2
        { x: geom.width - inset, y: radius2 }, //x3,y3
        { x: geom.width - inset, y: geom.height - radius3 }, //x4,y4
        { x: geom.width - radius3, y: geom.height - inset }, //x5,y5
        { x: radius4, y: geom.height - inset }, //x6,y6
        { x: inset, y: geom.height - radius4 }, //x7,y7
      ];

      ctx.fillStyle = properties.get("--lion-button-fill-color");

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y); //x0,y0
      ctx.lineTo(points[1].x, points[1].y);
      ctx.lineTo(points[2].x, points[2].y);
      ctx.lineTo(points[3].x, points[3].y);
      ctx.lineTo(points[4].x, points[4].y);
      ctx.lineTo(points[5].x, points[5].y);
      ctx.lineTo(points[6].x, points[6].y);
      ctx.lineTo(points[7].x, points[7].y);

      ctx.closePath();

      ctx.lineTo(points[0].x, points[0].y);

      ctx.strokeStyle = properties.get("--lion-button-stroke-color");
      ctx.lineWidth = properties.get("--lion-button-stroke-weight");
      ctx.stroke();

      ctx.fill();
    }
  }
);
