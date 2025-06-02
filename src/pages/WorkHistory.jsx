import EmploymentItem from "../components/EmploymentItem"
import workHistoryData from "../data/workHistory.json"

export default function WorkHistory(){
    return(
        <div className="work-history-section">
            {workHistoryData.map((job, index) => (
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