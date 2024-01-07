import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  technologies?: string[];
}

export function ProjectCards(props: ProjectCardProps) {
  const { title, description, link, technologies } = props;
  return (
    <div className=" p-6 rounded-lg border flex flex-col gap-1">
      <div className="text-xl font-bold">{title}</div>
      <div>{description}</div>
      <div className="flex flex-wrap gap-2 items-center">
        {technologies?.map((technology) => (
          <div
            key={technology}
            className="text-sm font-semibold bg-gray-200 rounded-md px-2"
          >
            {technology}
          </div>
        ))}
      </div>
    </div>
  );
}
