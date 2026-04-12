"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./ImageTrail.css";

type ImageTrailProps = {
  items?: string[];
};

export default function ImageTrail({ items = [] }: ImageTrailProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const idxRef = useRef<number>(0);
  const lastRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const itemsRef = useRef<string[]>(items);

  // 讓 items 更新時不重綁事件
  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const threshold = 80;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const dx = x - lastRef.current.x;
      const dy = y - lastRef.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist < threshold) return;
      lastRef.current = { x, y };

      const imgs = el.querySelectorAll<HTMLElement>(".content__img");
      if (!imgs.length) return;

      idxRef.current = (idxRef.current + 1) % imgs.length;
      const node = imgs[idxRef.current];

      gsap.set(node, {
        opacity: 1,
        x: x - 160,
        y: y - 220,
        scale: 1,
        zIndex: Date.now(),
      });

      gsap.to(node, {
        opacity: 0,
        scale: 0.2,
        delay: 0.5,
        duration: 1.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="content" ref={containerRef}>
      {items.map((url, i) => (
        <div className="content__img" key={i}>
          <div
            className="content__img-inner"
            style={{ backgroundImage: `url(${url})` }}
          />
        </div>
      ))}
    </div>
  );
}