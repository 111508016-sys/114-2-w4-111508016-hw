"use client";

import ASCIIText from "./ASCIIText.jsx";

type Props = {
  text: string;
  className?: string;
};

export default function AsciiTextClient({ text, className }: Props) {
  return (
    <div className={["relative", className].filter(Boolean).join(" ")}>
      <ASCIIText
        text={text}
        asciiFontSize={8}
        textFontSize={140}
        planeBaseHeight={8}
        enableWaves={true}
      />
    </div>
  );
}