"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          MS in Computer Science - University of North Carolina at Charlotte -
          Graduated in May 2021 with 4.00 GPA{" "}
        </li>
        <li>
          BE in Electronics and Communication - Anna University - Graduated in
          April 2016 with 7.19/10 GPA
        </li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "workexp",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>
          <h2 className="font-extrabold">
            Software Engineer in Test, Oracle America Inc., US : June
            2021-Present
          </h2>
          <ul className="list-disc pl-2">
            <li>
              Responsible for testing Netsuite Applications for Oracle Netsuite.
            </li>
            <li>
              Worked on developing the UI automation framework with webdriver.io
              using JavaScript.
            </li>
            <li>
              Worked on writing UI Automation tests with WebdrIver.io using
              JavaScript.
            </li>
            <li>Following agile framework for the work process.</li>
            <li>
              Customer issues debugging and working with the developers to get
              the issues resolved.
            </li>
            <li>
              Performing code reviews for frontend, backend and e2e automation
              code.
            </li>
            <li>
              Reporting bugs in Jira and ensuring the defects are resolved
              before SLT.
            </li>
            <h2 className="font-extrabold">
              QA Analyst Intern, Sony Interactive Entertainment, US : May
              2020-April 2021
            </h2>
            <li>
              Responsible for testing the internal applications used by
              PlayStation.
            </li>
            <li>
              Worked on UI and API automation testing with Puppeteer Mocha/Chai
              and Playwright Mocha/Chai Node.js libraries using JavaScript.
            </li>
            <li>
              Developed and implemented new test scenarios and test cases to
              maximize efficiency and minimize the processing time.
            </li>
            <li>
              Ensured customer satisfaction by finding and reporting all the
              bugs in JIRA.
            </li>
            <li>
              Followed the Scaled Agile Framework and Agile Methodologies for
              the work process.
            </li>
            <li>
              Worked on executing load tests with Gatling and analyzing the
              results for measuring the application’s performance.
            </li>
            <li>
              Developed an automation suite for comparing the performance
              metrics of an application’s old version and newer version and
              depicted the output in a graphical format.
            </li>
            <h2 className="font-extrabold">
              Graduate Teaching Assistant, University of North Carolina at
              Charlotte: Jan 2020-May 2020
            </h2>
            <li>
              Responsible for maintaining the curriculum, designing questions
              for assignments, and writing conceptual/coding questions for the
              Operating Systems and Networks course
            </li>
            <li>
              Evaluated student submissions, assisted students, and resolved
              questions/concerns they had regarding the course and assignments.
            </li>
            <h2 className="font-extrabold">
              Software Engineer, Wipro Limited, India: Jun 2016-Jul 2019
            </h2>
            <li>
              Responsible for testing the Point of Commerce ApplicaHons for
              Kohl's and internal applications used by MasterCard.
            </li>
            <li>
              Created and executed test cases for manual testing of functional,
              UI, API, batch, end to end, smoke, ad-hoc, integraHon and
              regression testing.
            </li>
            <li>
              Worked on UI Test Automation using Selenium with Java and used
              Jenkins for CI pipelines.
            </li>
            <li>
              Worked on FuncHonal Testing of internal mobile applications in
              Android and iOS.
            </li>
            <li>
              Analyzed test execution failures, raised Defect in JIRA/Rally and
              worked with the development team to find the root cause of the
              failures.
            </li>
            <li>
              Worked on creaHng traceability matrix to ensure comprehensive test
              coverage of requirements.
            </li>
          </ul>
        </li> */}
        <li>
          Software Engineer in Test, Oracle America Inc., US: June 2021-Present
        </li>
        <li>
          QA Analyst Intern, Sony Interactive Entertainment, US: May 2020-April
          2021
        </li>
        <li>
          Graduate Teaching Assistant, University of North Carolina at
          Charlotte: Jan 2020-May 2020
        </li>
        <li>Software Engineer, Wipro Limited, India: Jun 2016-Jul 2019</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Programming/Scripting Lanugages: Java, JavaScript, TypeScript, HTML,
          CSS, SQL.
        </li>
        <li>
          Frameworks/Technologies: Node.js, React.js, MySQL, Selenium Web
          Driver, Git, JSON, RESTful Web Services, Puppeteer, Playwright, Mocha,
          Chai, Spring Boot.
        </li>
        <li>
          Tools: Jenkins, TeamCity, Eclipse, Visual Studio, Android Studio,
          GitHub, GitLab, Bitbucket, Atlassian JIRA, Confluence, HP ALM, QTest,
          Gatling, Taiga Project Management, Trello, Rally Test Management,
          Postman, Microsoft Office.
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>SAFe Scrum Master: Jan 2022</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-me-image.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">About me description</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("workexp")}
              active={tab === "workexp"}
            >
              Work Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
