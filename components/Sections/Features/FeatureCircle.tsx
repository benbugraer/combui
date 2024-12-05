import OrbitingCircles from "@/components/ui/orbiting-circles";
import { SimpleIconsShadcnui } from "@/public/Icons/ShadcnIcon";
import Nextjs from "@/public/Icons/NextIcon";
import TypeScript from "@/public/Icons/TypeScriptIcon";
import TailwindCSS from "@/public/Icons/TailwindIcon";

export function FeatureCircle() {
  return (
    <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        CombUI
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none "
        duration={20}
        delay={20}
      >
        <Nextjs className="w-20 h-20" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none "
        duration={20}
        delay={10}
      >
        <TypeScript className="w-20 h-20" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none "
        radius={190}
        duration={20}
        reverse
      >
        <TailwindCSS className="w-20 h-20" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none "
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <SimpleIconsShadcnui className="w-10 h-10" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none "
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <SimpleIconsShadcnui className="w-10 h-10" />
      </OrbitingCircles>
    </div>
  );
}
