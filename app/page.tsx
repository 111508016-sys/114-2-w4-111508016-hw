
import { HomePhotoTrail } from "../components/HomePhotoTrail";

export default function Home() {
  return (
    <div>
      <HomePhotoTrail />
      <div className="mt-6 text-3xl font-black">lifestyle photos</div>
      <div className="mt-2 text-black/70">移動鼠標可查看</div>
    </div>
  );
}