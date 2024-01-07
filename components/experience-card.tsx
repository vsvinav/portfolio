import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export interface ExperienceCardProps {
  designation: string;
  company: string;
  link: string;
  project?: string;
  duration: string;
  contentList: string[];
}

export function ExperienceCard(props: ExperienceCardProps) {
  const { designation, company, duration, link, project, contentList } = props;
  return (
    <div className=" p-8 rounded-lg border">
      <div className="flex flex-col gap-2">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="text-xl font-semibold">{designation}</div>
            <div>|</div>
            <Link
              href={link}
              className="text-xl font-semibold text-gray-500 flex gap-2 items-center hover:underline"
            >
              {company} <ExternalLinkIcon />
            </Link>
          </div>
          <div className="font-semibold">{duration}</div>
        </div>
        <div>
          <div>Project: {project}</div>
          <ul className="list-disc px-6">
            {contentList.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
