import { SpriteAnimator } from "react-sprite-animator";
import { useState } from "react";
import { HoverableSpriteProp } from "../lib/definitions";

export default function HoverableSprite({ image }: HoverableSpriteProp) {
  const [frameNo, setFrameNo] = useState(0);

  return (
    <div onMouseEnter={() => setFrameNo(1)} onMouseLeave={() => setFrameNo(0)}>
      <SpriteAnimator
        sprite={image}
        width={128}
        height={148}
        direction="vertical"
        loop={false}
        frame={frameNo}
        shouldAnimate={false}
        scale={2}
        // stopLastFrame={true}
        resetOnEnd={true}
      />
    </div>
  );
}
