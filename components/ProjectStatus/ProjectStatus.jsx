import "./ProjectStatus.scss";

export const ProjectStatus = ({ projectStatus }) => {
  return (
    <p
      className={`project-status ${
        projectStatus === "In Progress"
          ? "project-status--in-progress"
          : projectStatus === "Completed"
          ? "project-status--completed"
          : projectStatus === "Cancelled"
          ? "project-status--cancelled"
          : ""
      }`}
    >
      {projectStatus}
    </p>
  );
};
