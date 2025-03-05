interface EducationCardProps {
  school: string;
  degree: string;
  duration: string;
}

export function EducationCard(props: EducationCardProps) {
  const { school, degree, duration } = props;
  return (
    <div className="p-6 rounded-lg border flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">{school}</div>
        <div className="font-semibold">{duration}</div>
      </div>
      <div>{degree}</div>
    </div>
  );
}
