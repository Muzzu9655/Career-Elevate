import clsx from "clsx";

interface Props {
  tag: string;
  title: string;
  desc?: string;
  center?: boolean;
}

export default function SectionHeader({ tag, title, desc, center }: Props) {
  return (
    <div className={clsx(center ? "text-center mb-10" : "mb-10")}>
      <span className="inline-block bg-orange-50 text-primary text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-2">
        {tag}
      </span>
      <h2 className="font-extrabold text-3xl md:text-4xl text-navy leading-tight mb-3" dangerouslySetInnerHTML={{ __html: title }} />
      {desc && <p className={clsx("text-slate text-base font-light", center ? "max-w-xl mx-auto" : "max-w-lg")}>{desc}</p>}
    </div>
  );
}