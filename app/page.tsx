import { EducationCard } from "@/components/education-card";
import {
  ExperienceCard,
  type ExperienceCardProps,
} from "@/components/experience-card";
import { type ProjectCardProps, ProjectCards } from "@/components/project-card";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const experiences: ExperienceCardProps[] = [
  {
    designation: "Software Engineer 2",
    link: "https://www.juniper.net/",
    company: "Juniper Networks",
    duration: "2021-2023",
    contentList: [
      "Developed one Python and 2 GoLang microservices on Kubernetes for Paragon Automation, a cloud-native network solution",
      "Served as an SME and oversaw a critical microservice managing trigger and alert executions, from development to deployment",
      "Collaborated on migrating the product from on-prem architecture to the cloud with Kafka, boosting scalability and performance",
      "Developed a GoLang Resource Recommendation Engine with supervised learning, eliminating 100% of manual rule selections",
    ],
  },
  {
    designation: "Software Development Engineer II",
    company: "HashedIn by Deloitte",
    link: "https://www.hashedin.com/",
    duration: "2021-2021",
    contentList: [
      "Developed a Python microservice for Paragon Automation, a cloud-native network solution",
      "Collaborated on migrating the product from on-prem architecture to the cloud with Kafka, boosting scalability and performance",
      "Developed a GoLang Resource Recommendation Engine with supervised learning, eliminating 100% of manual rule selections",
    ],
  },
  {
    designation: "Software Engineer Intern",
    company: "Juniper Networks",
    duration: "2018-2019",
    link: "https://www.juniper.net/",
    contentList: [
      "Developed a Python microservice for Paragon Automation, a cloud-native network solution",
      "Collaborated on migrating the product from on-prem architecture to the cloud with Kafka, boosting scalability and performance",
      "Developed a GoLang Resource Recommendation Engine with supervised learning, eliminating 100% of manual rule selections",
    ],
  },
];

const projects: ProjectCardProps[] = [
  {
    title: "Paragon Automation",
    description: "A cloud-native network solution",
    link: "https://www.juniper.net/",
    technologies: ["Python", "GoLang", "Kubernetes", "Kafka"],
  },
  {
    title: "Paragon Automation",
    description: "A cloud-native network solution",
    link: "https://www.juniper.net/",
  },
  {
    title: "Paragon Automation",
    description: "A cloud-native network solution",
    link: "https://www.juniper.net/",
  },
  {
    title: "Paragon Automation",
    description: "A cloud-native network solution",
    link: "https://www.juniper.net/",
  },
  {
    title: "Paragon Automation",
    description: "A cloud-native network solution",
    link: "https://www.juniper.net/",
  },
  {
    title: "Paragon Automation",
    description: "A cloud-native network solution",
    link: "https://www.juniper.net/",
  },
];

const education = [
  {
    school: "University of California, Irvine",
    degree: "Master of Science in Computer Science",
    duration: "2019-2021",
    gpa: "3.9",
  },
  {
    school: "University of California, Irvine",
    degree: "Master of Science in Computer Science",
    duration: "2019-2021",
    gpa: "3.9",
  },
  {
    school: "University of California, Irvine",
    degree: "Master of Science in Computer Science",
    duration: "2019-2021",
    gpa: "3.9",
  },
  {
    school: "University of California, Irvine",
    degree: "Master of Science in Computer Science",
    duration: "2019-2021",
    gpa: "3.9",
  },
];

const skills = [
  {
    label: "Python",
    iconUrl: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },
  {
    label: "GoLang",
    iconUrl: "https://www.vectorlogo.zone/logos/golang/golang-icon.svg",
  },
  {
    label: "Kubernetes",
    iconUrl: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
  },
  {
    label: "Kafka",
    iconUrl:
      "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
  },
  {
    label: "Tensorflow",
    iconUrl: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
  },
  {
    label: "Deep Learning",
    iconUrl: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
  },
  {
    label: "C++",
    iconUrl: "https://www.vectorlogo.zone/logos/w3_cpp/w3_cpp-icon.svg",
  },

  {
    label: "SQL",
    iconUrl: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  },
  {
    label: "Java",
    iconUrl: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  },
  {
    label: "Amazon Web Services",
    iconUrl: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col space-y-32 container mx-auto px-4 pt-32">
      <section id="about" className="flex flex-col gap-4">
        <div>
          <div className="text-5xl font-bold">Vinav Singh Sancheti</div>
          <div>vsvinavsancheti@gmail.com</div>
        </div>
        <div className="text-lg">
          My name is Vinav, and I&apos;m a Software Developer specializing in
          AI, ML, and Cloud Technologies. I excel in crafting innovative
          solutions to complex challenges, driving impactful outcomes.
        </div>
        <div className="flex gap-2">
          <Link
            href={"https://github.com/vsvinav"}
            target="_blank"
            className=" p-2 border rounded-lg"
          >
            <GitHubLogoIcon className="h-10 w-10" />
          </Link>
          <Link href={"github.com/vsvinav"} className=" p-2 border rounded-lg">
            <LinkedInLogoIcon className="h-10 w-10" />
          </Link>
        </div>
      </section>
      <section id="experience" className="flex flex-col gap-4">
        <div className="text-5xl font-bold">Experience</div>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </section>
      <section id="projects" className="flex flex-col gap-4">
        <div className="text-5xl font-bold">Projects</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <ProjectCards key={index} {...project} />
          ))}
        </div>
      </section>
      <section id="eduction" className="flex flex-col gap-4">
        <div className="text-5xl font-bold">Education</div>
        <div className="grid grid-cols-1 gap-4">
          {education.map((education, index) => (
            <EducationCard key={index} {...education} />
          ))}
        </div>
      </section>
      <section id="skills" className="flex flex-col gap-4">
        <div className="text-5xl font-bold">Skills</div>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex border rounded-md font-semibold text-gray-500 px-4 py-1 text-xl items-center gap-2"
            >
              <img
                src={skill.iconUrl}
                alt={skill.label}
                height={20}
                width={20}
              />
              <div>{skill.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
