import JobListItem, { JobItem } from "./JobListItem";

type JobListProps = {
  jobItems: JobItem[];
};

export function JobList({ jobItems }: JobListProps) {
  return (
    <ul className="job-list">
      {jobItems.map(jobItem => (
        <JobListItem jobItem={jobItem} key={jobItem.id} />
      ))}
    </ul>
  );
}

export default JobList;
