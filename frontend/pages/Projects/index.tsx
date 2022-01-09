import { IconName } from "../../components/Icon"
import PageLayout from "../../components/Page/PageLayout"
import ProjectSummary from "../../components/ProjectSummary"
import { GITHUB_URL } from "../../config"
import SubHeader from '../../components/SubHeader'

const projects = [
    {
        href: GITHUB_URL + "/ptr-app-demo",
        label: "Home Inspection App",
        description: "Sandbox of a Full Stack App built using React, Next.js, Node.js, PostgreSQL, Nginx, Docker",
        icon: "github" as IconName,
        iconLabel: "source",
        local: false,
        rel: "noopener noreferrer",
        target: "_blank"
    },
    {
        href: GITHUB_URL + "/gospace",
        label: "Go Space",
        description: "Video, audio, and data sharing app built using React, WebRTC, Socket.io, Node.js",
        icon: "github" as IconName,
        iconLabel: "source",
        local: false,
        rel: "noopener noreferrer",
        target: "_blank"
    },
    {
        href: "/Projects/KIX",
        label: "Museum Exhibit",
        description: "Planned, designed, and constructed a small museum exhibit over the span of 8 months alongside five members, for thousands of visitors as part of the Knowledge Integration 3rd year interdisciplinary project",
        icon: "museum" as IconName,
        iconLabel: "view",
        local: true,
    },
    {
        href: GITHUB_URL + "/portfolio",
        label: "Portfolio",
        description: "This current website is open sourced, built with Next.js and Vercel",
        icon: "github" as IconName,
        iconLabel: "source",
        local: false,
        rel: "noopener noreferrer",
        target: "_blank"
    },
    {
        href: GITHUB_URL + "/CC3K",
        label: "Chamber Crawler 3000",
        description: "Dungeons adventure type game in C++",
        icon: "github" as IconName,
        iconLabel: "source",
        local: false,
        rel: "noopener noreferrer",
        target: "_blank"
    },
    {
        href: GITHUB_URL + "/Chess",
        label: "Chess",
        description: "Chess game made in C++",
        icon: "github" as IconName,
        iconLabel: "source",
        local: false,
        rel: "noopener noreferrer",
        target: "_blank"
    },
]

const completedCourses = [
    {
        href: GITHUB_URL + "/algo-part1",
        label: "Coursera Princeton's Algorithms 1",
        description: "Elementary data structures, sorting, and searching algorithms",
        icon: "github" as IconName,
        iconLabel: "assignments",
        local: false,
        rel: "noopener noreferrer",
        target: "_blank"
    },
    {
        href: GITHUB_URL + "/algo-part2",
        label: "Coursera Princeton's Algorithms 2",
        description: "Graph and string-processing algorithms",
        icon: "github" as IconName,
        iconLabel: "assignments",
        local: false,
        rel: "noopener noreferrer",
        target: "_blank"
    },
    {
        href: "https://www.coursera.org/learn/machine-learning",
        label: "Coursera Stanford's Machine Learning",
        description: "Introduction to machine learning, datamining, and statistical pattern recognition",
        icon: "link" as IconName,
        iconLabel: "info",
        local: false,
        rel: "noopener noreferrer",
        target: "_blank"
    },
]

const ongoingCourses = [
    {
        href: "https://www.coursera.org/specializations/deep-learning",
        label: "Deeplearning.ai's Deep Learning Specialization",
        description: "Fundamentals of deep learning",
        icon: "link" as IconName,
        iconLabel: "info",
        local: false,
        rel: "noopener noreferrer",
        target: "_blank"
    },
    {
        href: "https://www.deeplearning.ai/program/natural-language-processing-specialization/",
        label: "Deeplearning.ai's Natural Language Specialization",
        description: "Deep learning techniques needed to build cutting-edge NLP systems",
        icon: "link" as IconName,
        iconLabel: "info",
        local: false,
        rel: "noopener noreferrer",
        target: "_blank"
    },
    {
        href: "https://www.kadenze.com/courses/the-nature-of-code/info",
        label: "The Nature of Code",
        description: "Programming strategies and techniques behind computer simulations of natural systems",
        icon: "link" as IconName,
        iconLabel: "info",
        local: false,
        rel: "noopener noreferrer",
        target: "_blank"
    },
]


export default function Projects() {
    return <PageLayout pageTitle={"projects"}>
        <SubHeader label="Projects" />
        <div className="project_list">
            {projects.map(({ href, label, iconLabel, description, icon, local, rel, target }, i) => (
                <ProjectSummary
                    key={`${label}-${i}`}
                    icon={icon}
                    href={href}
                    label={label}
                    iconLabel={iconLabel}
                    description={description}
                    fullWidth={false}
                    local={local}
                    rel={rel}
                    target={target} />
            ))}
        </div>
        <SubHeader label="Pending Courses" />
        <div className="project_list">
            {ongoingCourses.map(({ href, label, iconLabel, description, icon, local, rel, target }, i) => (
                <ProjectSummary
                    key={`${label}-${i}`}
                    icon={icon}
                    href={href}
                    label={label}
                    iconLabel={iconLabel}
                    description={description}
                    fullWidth={false}
                    local={local}
                    rel={rel}
                    target={target} />
            ))}
        </div>
        <SubHeader label="Completed Courses" />
        <div className="project_list">
            {completedCourses.map(({ href, label, iconLabel, description, icon, local, rel, target }, i) => (
                <ProjectSummary
                    key={`${label}-${i}`}
                    icon={icon}
                    href={href}
                    label={label}
                    iconLabel={iconLabel}
                    description={description}
                    fullWidth={false}
                    local={local}
                    rel={rel}
                    target={target} />
            ))}
        </div>
    </PageLayout>
}
