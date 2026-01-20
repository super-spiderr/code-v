"use client";

import { useEffect, useRef } from "react";

class Line {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  vertical: boolean;

  constructor(width: number, height: number) {
    this.vertical = Math.random() > 0.5;
    if (this.vertical) {
      this.x = Math.random() * width;
      this.y = -200;
      this.length = Math.random() * 200 + 100;
      this.speed = Math.random() * 10 + 5;
    } else {
      this.x = -200;
      this.y = Math.random() * height;
      this.length = Math.random() * 200 + 100;
      this.speed = Math.random() * 10 + 5;
    }
    this.opacity = Math.random() * 0.5 + 0.1;
  }

  update(width: number, height: number) {
    if (this.vertical) {
      this.y += this.speed;
      if (this.y > height + 200) {
        this.y = -200;
        this.x = Math.random() * width;
      }
    } else {
      this.x += this.speed;
      if (this.x > width + 200) {
        this.x = -200;
        this.y = Math.random() * height;
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const gradient = this.vertical
      ? ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length)
      : ctx.createLinearGradient(this.x, this.y, this.x + this.length, this.y);

    gradient.addColorStop(0, "rgba(16, 185, 129, 0)");
    gradient.addColorStop(1, `rgba(16, 185, 129, ${this.opacity})`);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (this.vertical) {
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, this.y + this.length);
    } else {
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x + this.length, this.y);
    }
    ctx.stroke();
  }
}

class Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkle: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5;
    this.twinkle = Math.random() * 0.01;
  }

  update() {
    this.opacity += this.twinkle;
    if (this.opacity > 0.6 || this.opacity < 0.1) {
      this.twinkle = -this.twinkle;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lines: Line[] = [];
    let particles: Particle[] = [];
    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = globalThis.innerWidth;
      canvas.height = globalThis.innerHeight;
      initElements();
    };

    const initElements = () => {
      lines = Array.from(
        { length: 8 },
        () => new Line(canvas.width, canvas.height),
      );
      particles = Array.from(
        { length: 150 },
        () => new Particle(canvas.width, canvas.height),
      );
    };

    const drawGrid = () => {
      const gridSize = 60;
      const offset = 0;

      ctx.strokeStyle = "rgba(16, 185, 129, 0.08)";
      ctx.lineWidth = 0.5;

      ctx.beginPath();
      // Vertical lines
      for (let x = offset; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      // Horizontal lines
      for (let y = offset; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Draw intersections (small crosses)
      ctx.strokeStyle = "rgba(16, 185, 129, 0.15)";
      ctx.lineWidth = 1;
      const crossSize = 4;
      for (let x = offset; x <= canvas.width; x += gridSize) {
        for (let y = offset; y <= canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x - crossSize, y);
          ctx.lineTo(x + crossSize, y);
          ctx.moveTo(x, y - crossSize);
          ctx.lineTo(x, y + crossSize);
          ctx.stroke();
        }
      }
    };

    const drawAtmosphere = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.9,
      );

      gradient.addColorStop(0, "#084229"); // Core Emerald
      gradient.addColorStop(0.5, "#042115"); // Deep Transition
      gradient.addColorStop(1, "#000000"); // Pure Black edges

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle Scanlines
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      for (let i = 0; i < canvas.height; i += 4) {
        ctx.fillRect(0, i, canvas.width, 2);
      }
    };

    const animate = () => {
      drawAtmosphere();
      drawGrid();

      lines.forEach((line) => {
        line.update(canvas.width, canvas.height);
        line.draw(ctx);
      });

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    globalThis.addEventListener("resize", handleResize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      globalThis.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-5] pointer-events-none"
    />
  );
};
