import { useTranslation } from "react-i18next";
import EmploymentItem from "../components/EmploymentItem"

export default function WorkHistory(){
    const { t } = useTranslation("workHistory");
    return(
        <div className="work-history-section">
            {t("jobs", { returnObjects: true }).map((job, index) => (
                <EmploymentItem
                    key={index}
                    company={job.company}
                    position={job.position}
                    dates={job.dates}
                    experiences={job.experiences}
                />
            ))}
        </div>
    )
}