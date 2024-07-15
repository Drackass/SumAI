import BtnGithub from "./_components/btnGithub";
import BtnGetStarted from "./_components/btnGetStarted";

export default function Home() {
  return (
    <section className="relative mx-auto flex flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 max-w-3xl">
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      <h1 className="relative text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-balance">
        Welcome to SumAI 👋
      </h1>
      <span className="relative max-w-[750px] text-center text-lg font-light text-foreground">
        Summarize everythings !
      </span>
      <div className="relative flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
        <BtnGetStarted />
        <BtnGithub />
      </div>
    </section>
  );
}
