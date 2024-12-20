import { SiReact, SiNextdotjs, SiTailwindcss, SiGithub } from "react-icons/si";
import { DockPreview } from "@/components/core/DockPreview";

export default function DockPreviewComponent() {
  const dockItems = [
    { url: "https://reactjs.org/", icon: SiReact },
    { url: "https://nextjs.org/", icon: SiNextdotjs },
    { url: "https://tailwindcss.com/", icon: SiTailwindcss },
    { url: "https://github.com/", icon: SiGithub },
  ];

  return (
    <div className="relative flex h-[500px] w-full gap-4 items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      {dockItems.map(({ url, icon: Icon }) => (
        <DockPreview url={url} key={url}>
          <Icon className="w-5 h-5" />
        </DockPreview>
      ))}
    </div>
  );
}
