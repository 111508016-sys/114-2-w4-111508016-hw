
import { HomePhotoTrail } from "../components/HomePhotoTrail";

export default function Home() {
  return (
    <div>
      <HomePhotoTrail />
      <div className="mt-6 text-3xl font-black">首頁</div>
      <div className="mt-2 text-black/70">lifestyle photos (hover to view)</div>
    </div>
  );
}