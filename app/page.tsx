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
    designation: "Software Engineer 3",
    link: "https://www.juniper.net/",
    company: "HPE Juniper Networks",
    duration: "Jun 2025 - Present",
    project: "Paragon Automation",
    contentList: [
      "Designed and implemented a geo-distributed, high-availability telemetry pipeline on VictoriaMetrics with dual-write ingestion and global read failover, ensuring seamless regional resilience and scalability",
      "Built an LLM-driven LangGraph pipeline that auto-generates OpenConfig telemetry rules and Junos iAgent schemas from user intent and device XML, enabling scalable observability automation"
    ],
  },
  {
    designation: "Software Engineering Intern",
    link: "https://www.juniper.net/",
    company: "Juniper Networks",
    duration: "May 2024 - Aug 2024",
    project: "Paragon Automation",
    contentList: [
      "Implemented IPv6 support across 10+ microservices, enhancing compatibility and connectivity for Paragon Automation",
      "Developed 2 SDKs in Python and GoLang for Paragon Automation, enhancing API integration",
      "Created a SQLite connector in GoLang, extending compatibility with Postgres and ArangoDB, supporting 3 databases",
    ],
  },
  {
    designation: "Software Engineer 2",
    link: "https://www.juniper.net/",
    company: "Juniper Networks",
    duration: "Aug 2021 - Aug 2023",
    project: "Paragon Automation",
    contentList: [
      "Created a Causal-inference-based Root Cause Analysis framework to identify and improve network failure prediction by 87%",
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
    duration: "Jan 2021 - Aug 2021",
    project:  "Lockheed Martin",
    contentList: [
      "Led data-driven efforts as an ML engineer, reducing manual tracking by 50%, and providing real-time equipment test updates",
      "Directed Python backend, architecting 8 serverless RESTful APIs with AWS services: API Gateway, Lambda, Glue, Step Functions",
      "Gathered critical client requirements and domain insights, ensuring communication, project alignment, and success",
    ],
  },
  {
    designation: "Software Development Engineer",
    company: "HashedIn by Deloitte",
    duration: "Feb 2019 - Jan 2021",
    link: "https://www.hashedin.com/",
    project: "AI-based Stock Market Alpha Forecasting",
    contentList: [
      "Engineered a model achieving 30% Excess Returns in FY 2020 and 97.38% over four years from 2017 for the Russell 1000 index",
      "Directed end-to-end ML workflows, including feature engineering, LSTM model development, hyperparameter optimization, and rigorous model training. Implemented an automated data pipeline cron jobs, attaining 100% elimination of manual intervention",
      "Delivered 7 backend APIs, including Prediction Visualization, Stocks Ranking, and Portfolio Building to boost functionality & UX",
      "Executed, managed, and mentored 3 interns in transfer learning techniques with additional data to update existing models"
    ],
  },
];

const projects: ProjectCardProps[] = [
  {
    title: "KeyMatrix - AI in Security",
    description: "A keystroke dynamics-based password authenticator with TensorFlow 2.0 and one-shot learning, utilizing CMU's Keystroke Dynamics - Benchmark Dataset to reliably capture a user's unique typing pattern bolstering login security",
    technologies: ["One Shot Learning", "Deep Learning", "Tensorflow", "Python", "Jupyter"]
  },
  {
    title: "Mouse Dynamics-Based User Authentication",
    description: "A mouse dynamics-based user authenticator using TensorFlow 2.0 and Siamese networks, leveraging The DFL Mouse Dynamics Data Set to capture unique movement patterns for enhanced login security",
    technologies: ["One Shot Learning", "Deep Learning", "Tensorflow", "Python", "Jupyter"]
  },
  {
    title: "Image Manipulation Tool",
    description: "A Java based Image Manipulation Tool with format support, filters, and histogram analysis. Utilizing object-oriented principles, it offers extensible image editing through a command-line or graphical interface.",
    technologies: ["Java"],
  },
  {
    title: "Spotify Ad-Free App",
    description: "Spotify Ad Free app to optimize user experience by customizing the interface within Spotify's terms of service, ensuring a seamless and ad-free listening environment.",
    technologies: ["Python", "Linux - Dbus"]
  }
];

const education = [
  {
    school: "Northeastern University, Khoury College of Computer Sciences",
    degree: "Master of Science in Computer Science",
    duration: "2023-2025",
    // gpa: "GPA: 4.0",
  },
  {
    school: "SRM Institute of Science and Technology",
    degree: "Bachelors in Information Technology",
    duration: "2015-2019",
    // gpa: "Score: 86.4%",
  }
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
    label: "Docker",
    iconUrl: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  },
  {
    label: "Kubernetes",
    iconUrl: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
  },
  {
    label: "Apache Kafka",
    iconUrl:
      "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
  },
  {
    label: "Langchain",
    iconUrl: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAg1AAZAA0",
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
    iconUrl: "https://www.vectorlogo.zone/logos/isocpp/isocpp-icon.svg",
  },

  {
    label: "SQL",
    iconUrl: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  },
  {
    label: "Django",
    iconUrl: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
  },
  {
    label: "Java",
    iconUrl: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  },
  {
    label: "Amazon Web Services",
    iconUrl: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
  {
    label: "Linux",
    iconUrl: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
  }
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
          System Design, AI, ML, and Cloud Technologies. I excel in crafting innovative
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
          <Link href={"https://linkedin.com/in/vinav-singh-sancheti/"} className=" p-2 border rounded-lg">
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
      <section id="education" className="flex flex-col gap-4">
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
