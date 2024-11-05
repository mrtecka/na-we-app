import "./FundingSection.scss";
import { getFunding } from "../../utils/apiCalls";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import ContributionForm from "../ContributionForm/ContributionForm";

export default function FundingSection({ projects, projectId }) {
  const [funding, setFunding] = useState(null);

  const validProject = projects.find(
    (project) => project.id === Number(projectId)
  );

  useEffect(() => {
    fetchFunding();
  }, []);

  if (!validProject) {
    return (
      <span className="funding__error-text">
        Please provide a valid Project ID
      </span>
    );
  }

  const fetchFunding = async () => {
    const fundingData = await getFunding(projectId);
    setFunding(fundingData);
  };

  if (validProject && !funding) {
    return (
      <ContributionForm
        validProject={validProject}
        funding={funding}
        projects={projects}
        projectId={projectId}
        fetchFunding={fetchFunding}
        label="Be the first to fund this project"
      />
    );
  }

  if (!funding) {
    return <Loading />;
  }

  return (
    <section className="funding">
      <div className="funding-status">
        <span className="funding-status__amount">${funding[0].amount}</span>
        <progress value={0.5} className="funding-status"></progress>
        <span className="funding-status__amount">${validProject.budget}</span>
      </div>
      <ContributionForm
        validProject={validProject}
        funding={funding}
        projects={projects}
        projectId={projectId}
        label="Enter your contribution"
      />
    </section>
  );
}
