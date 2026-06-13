export default function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 xl:flex">
      <div className="flex flex-col items-center gap-8 text-sm text-white">
        <a
          href="#"
          className="rotate-[-90deg] whitespace-nowrap transition hover:text-[#FF2E0F]"
        >
          Whatsapp
        </a>

        <div className="h-6 w-[2px] bg-[#FF2E0F]" />

        <a
          href="#"
          className="rotate-[-90deg] whitespace-nowrap transition hover:text-[#FF2E0F]"
        >
          Instagram
        </a>

        <div className="h-6 w-[2px] bg-[#FF2E0F]" />

        <a
          href="#"
          className="rotate-[-90deg] whitespace-nowrap transition hover:text-[#FF2E0F]"
        >
          Facebook
        </a>

        <div className="h-6 w-[2px] bg-[#FF2E0F]" />

        <a
          href="#"
          className="rotate-[-90deg] whitespace-nowrap transition hover:text-[#FF2E0F]"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}