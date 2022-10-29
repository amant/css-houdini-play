registerPaint(
  "my-checkbox",
  class {
    static inputProperties = ["--checkbox-tick-color"];

    paint(ctx, size, properties) {
      this.size = Math.min(size.width, size.height);
      this.tick(ctx, properties.get("--checkbox-tick-color"));
    }

    tick(ctx, colorTick) {
      ctx.lineWidth = this.calcTickLineThickness();

      ctx.beginPath();
      ctx.moveTo(this.perc(18.5), this.perc(49.5));
      ctx.lineTo(this.perc(38.5), this.perc(69));
      ctx.lineTo(this.perc(81), this.perc(26.5));
      ctx.strokeStyle = colorTick.length > 0 ? colorTick : 'transparent';
      ctx.stroke();
    }

    perc(percentage) {
      let proportion = this.size / 100;
      return proportion * percentage;
    }

    calcTickLineThickness() {
      let maxThick = 10;
      let maxSize = 75;

      if (this.size >= maxSize) {
        let fixThickness = maxThick;
        return fixThickness;
      } else {
        let proportinateThickness = (maxThick * this.size) / maxSize;
        return proportinateThickness < 1 ? 1 : proportinateThickness;
      }
    }
  }
);
