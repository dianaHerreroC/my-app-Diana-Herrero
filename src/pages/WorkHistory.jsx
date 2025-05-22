import EmploymentItem from "../components/EmploymentItem"

export default function WorkHistory(){
    return(
        <div className="work-history-section">
            <EmploymentItem
                company="Intelcia (formerly E-voluciona Estrategias de Transformación)"
                position="Developer"
                dates="February 2020 - May 2023"
                experiences={[
                    "Developed with Creatio platform, involving CRM and BPM tools, for both in-house and external client projects.",
                    "Added new C# components to enhance web and application methods, and customized user interface behavior through business logic configuration.",
                    "Managed databases using SQL and SQL Server.",
                    "Developed Python scripts for various projects, including data and Excel file management, web service requests, and web automation tasks using the Selenium library.",
                    "Utilized the Pentaho tool to automate file management processes, server access, email delivery, and other tasks."
                ]}
            />
            <EmploymentItem
                company="Bertrandt Technology Spain S.L. (formerly  Philotech Ibérica)"
                position="Software Developer"
                dates="June 2023 - March 2024"
                experiences={[
                    "Participated in a web application project using C++ as the programming language and SQL for database management.",
                    "Developed software for the Android Auto service in BMW using C.",
                    "Applied continuous integration practices to test the software in the aforementioned project.",
                    "Collaborated with the team using Git for version control and project management."
                ]}
            />
            <EmploymentItem
                company="Spiterstulen Drift A.S. - Norway"
                position="Mantainance"
                dates="March 2024 - October 2024"
                experiences={[
                    "Performed a wide range of tasks, including cleaning, serving, cooking, snow shoveling, and more — always adapting to the needs of the moment.",
                    "Led the cleaning team during peak season, ensuring all tasks were completed on time, setting priorities, and creating a comfortable and efficient work environment according to each team member’s capabilities.",
                    "Although these tasks are not directly related to my current career path, this experience taught me valuable personal and professional skills, such as managing short periods of high stress, ensuring a proper and satisfactory team work in challenging circumstances, and maintaining flexibility and adaptability in changing situations."
                ]}
            />
        </div>
    )
}