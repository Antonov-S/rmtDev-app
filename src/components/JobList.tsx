import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

import { JobItem } from "../lib/types";

type JobListProps = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export function JobList({ jobItems, isLoading }: JobListProps) {
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}

      {!isLoading &&
        jobItems.map(jobItem => (
          <JobListItem jobItem={jobItem} key={jobItem.id} />
        ))}
    </ul>
  );
}

export default JobList;
