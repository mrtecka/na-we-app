import "./ContributionForm.scss";
import { useState, useEffect } from "react";
import { addFunding, updateFunding } from "../../utils/apiCalls";

export default function ContributionForm({
  label,
  validProject,
  funding,
  projects,
  projectId,
  fetchFunding,
}) {
  const [contributionValidation, setContributionValidation] = useState(true);
  const [contribution, setContribution] = useState(null);

  const handleContributionChange = (event) => {
    const input = event.target.value;
    setContribution(input);
  };

  const handleContribution = async (event) => {
    event.preventDefault();

    if (!contribution) {
      setContributionValidation(false);
      return;
    }

    if (validProject && !funding) {
      const fundingObject = {
        goal: validProject.budget,
        amount: contribution,
        project_id: projectId,
      };

      const postFunding = async () => {
        await addFunding(projectId, fundingObject);
        setContribution(null);
        fetchFunding();
      };

      postFunding();
    }

    const fundId = funding.id;

    setContribution(Number(funding.amount) + Number(contribution));

    console.log(projects);

    const fundingObject = {
      goal: projects.budget,
      amount: contribution,
      project_id: projectId,
      fundId: fundId,
    };

    console.log(funding);

    const editFunding = async () => {
      await updateFunding(projectId, fundId, fundingObject);
      setContribution(null);
      fetchFunding();
    };

    editFunding();
  };

  return (
    <form className="contribution-form" onSubmit={handleContribution}>
      <label className="contribution-form__label">
        {label}
        <span className="contribution-form__contribution">
          ${" "}
          <input
            type="number"
            min="1"
            className="contribution-form__input"
            onChange={handleContributionChange}
          />
          .00
        </span>
        <button className="contribution-form__cta" type="Submit">
          Contribute
        </button>
      </label>
    </form>
  );
}
