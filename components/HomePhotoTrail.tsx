"use client";

import { usePathname } from "next/navigation";
import ImageTrail from "./ImageTrail";

const TRAIL_IMAGES = [
  "/IMG_1924.JPG",
  "/IMG_4254.JPG",
  "/IMG_7028.JPG",
  "/IMG_8292.JPG",
  "/IMG_6237.JPG",
  "/IMG_6478.JPG",
  "/2.jpg",
];

export function HomePhotoTrail() {
  const pathname = usePathname();

  // ✅ 只在首頁啟用
  if (pathname !== "/") return null;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <ImageTrail items={TRAIL_IMAGES} />
    </div>
  );
}