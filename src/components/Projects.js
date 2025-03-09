// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     }
//     // {
//     //   title: "Business Startup",
//     //   description: "Design & Development",
//     //   imgUrl: projImg1,
//     // },
//     // {
//     //   title: "Business Startup",
//     //   description: "Design & Development",
//     //   imgUrl: projImg2,
//     // },
//     // {
//     //   title: "Business Startup",
//     //   description: "Design & Development",
//     //   imgUrl: projImg3,
//     // },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div >
//                 <h2>Projects</h2>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav> */}
//                   <Tab.Content id="slideInUp" >
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }
// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/laptop.png";
// import projImg2 from "../assets/img/laptop.png";
// import projImg3 from "../assets/img/laptop.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const machineLearningProjects = [
//     { title: "Laptop Price Predictor", description: "Deep Learning Model", imgUrl: projImg1 },
//     { title: "ML Project 2", description: "NLP Analysis", imgUrl: projImg2 },
//     { title: "ML Project 3", description: "Computer Vision", imgUrl: projImg3 }
//   ];

//   const dataEngineeringProjects = [
//     { title: "Data Eng Project 1", description: "ETL Pipeline", imgUrl: projImg1 },
//     { title: "Data Eng Project 2", description: "Data Warehousing", imgUrl: projImg2 },
//     { title: "Data Eng Project 3", description: "Big Data Processing", imgUrl: projImg3 }
//   ];

//   const dataAnalyticsProjects = [
//     { title: "Data Analytics Project 1", description: "Dashboard Creation", imgUrl: projImg1 },
//     { title: "Data Analytics Project 2", description: "Predictive Analytics", imgUrl: projImg2 },
//     { title: "Data Analytics Project 3", description: "Business Intelligence", imgUrl: projImg3 }
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div>
//                 <h2>Projects</h2>
//                 <p>Explore projects across Machine Learning, Data Engineering, and Data Analytics.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="ml">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="ml">Machine Learning</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="de">Data Engineering</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="da">Data Analytics</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp">
//                     <Tab.Pane eventKey="ml">
//                       <Row>
//                         {machineLearningProjects.map((project, index) => (
//                           <ProjectCard key={index} {...project} />
//                         ))}
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="de">
//                       <Row>
//                         {dataEngineeringProjects.map((project, index) => (
//                           <ProjectCard key={index} {...project} />
//                         ))}
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="da">
//                       <Row>
//                         {dataAnalyticsProjects.map((project, index) => (
//                           <ProjectCard key={index} {...project} />
//                         ))}
//                       </Row>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} alt="background" />
//     </section>
//   );
// }


// import { Container, Row, Col } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/laptop.png";
// import projImg2 from "../assets/img/laptop.png";
// import projImg3 from "../assets/img/laptop.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const machineLearningProjects = [
//     { title: "ML Project 1", description: "Deep Learning Model", imgUrl: projImg1 },
//     { title: "ML Project 2", description: "NLP Analysis", imgUrl: projImg2 },
//     { title: "ML Project 3", description: "Computer Vision", imgUrl: projImg3 }
//   ];

//   const dataEngineeringProjects = [
//     { title: "Data Eng Project 1", description: "ETL Pipeline", imgUrl: projImg1 },
//     { title: "Data Eng Project 2", description: "Data Warehousing", imgUrl: projImg2 },
//     { title: "Data Eng Project 3", description: "Big Data Processing", imgUrl: projImg3 }
//   ];

//   const dataAnalyticsProjects = [
//     { title: "Data Analytics Project 1", description: "Dashboard Creation", imgUrl: projImg1 },
//     { title: "Data Analytics Project 2", description: "Predictive Analytics", imgUrl: projImg2 },
//     { title: "Data Analytics Project 3", description: "Business Intelligence", imgUrl: projImg3 }
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div>
//                 <h2>Projects</h2>
//                 <p>Explore projects across Machine Learning, Data Engineering, and Data Analytics.</p>
//                 <h3>Machine Learning</h3>
//                 <Row>
//                   {machineLearningProjects.map((project, index) => (
//                     <ProjectCard key={index} {...project} />
//                   ))}
//                 </Row>
//                 <h3>Data Engineering</h3>
//                 <Row>
//                   {dataEngineeringProjects.map((project, index) => (
//                     <ProjectCard key={index} {...project} />
//                   ))}
//                 </Row>
//                 <h3>Data Analytics</h3>
//                 <Row>
//                   {dataAnalyticsProjects.map((project, index) => (
//                     <ProjectCard key={index} {...project} />
//                   ))}
//                 </Row>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} alt="background" />
//     </section>
//   );
// }


import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"; // Import the updated ProjectCard
import projImg1 from "../assets/img/laptop.png";
import projImg2 from "../assets/img/snowflake.png";
import projImg22 from "../assets/img/visualization.png";

import projImg3 from "../assets/img/laptop.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const machineLearningProjects = [
    { title: "Laptop Price Predictor", description: "Laptop price predictor is a Machine learning based application build on flask server", imgUrl: projImg1 },
    // { title: "ML Project 2", description: "NLP Analysis", imgUrl: projImg2 },
    // { title: "ML Project 3", description: "Computer Vision", imgUrl: projImg3 }
  ];

  const dataEngineeringProjects = [
    { title: "Real Estate Data Analytics - ETL Data Engineering Project", description: "This project demonstrates an end-to-end ETL (Extract, Transform, Load) data engineering pipeline for Redfin real estate data. The pipeline utilizes Apache Airflow, AWS (S3, EC2), Snowflake, Snowpipe, and Power BI to extract, transform, and visualize real estate insights.", imgUrl: projImg2 },
    { title: "ETL and Visualization of Reddit Data Using Power BI", description: "This project provides an end-to-end data pipeline for extracting, transforming, and loading (ETL) Reddit data into an Amazon Redshift data warehouse and visulize data using PowerBI. By leveraging Apache Airflow, Celery, PostgreSQL, Docker, Amazon S3, AWS Glue, Amazon Athena, and Amazon Redshift, this pipeline ensures efficient data processing and analytics.", imgUrl: projImg22 },

  ];

  const dataAnalyticsProjects = [
    { title: "Data Analytics Project 1", description: "Dashboard Creation", imgUrl: projImg1 },
    { title: "Data Analytics Project 2", description: "Predictive Analytics", imgUrl: projImg2 },
    { title: "Data Analytics Project 3", description: "Business Intelligence", imgUrl: projImg3 }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <h2>Projects</h2>
                  <p>Explore projects across Machine Learning, Data Engineering, and Data Analytics.</p>

                  {/* Machine Learning Projects */}
                  <h3>Machine Learning</h3>
                  <Row className="justify-content-center">
                    {machineLearningProjects.map((project, index) => (
                      <Col md={4} key={index}>
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>

                  {/* Data Engineering Projects */}
                  <h3>Data Engineering</h3>
                  <Row className="justify-content-center">
                    {dataEngineeringProjects.map((project, index) => (
                      <Col md={4} key={index}>
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>

                  {/* Data Analytics Projects */}
                  <h3>Data Analytics</h3>
                  <Row className="justify-content-center">
                    {dataAnalyticsProjects.map((project, index) => (
                      <Col md={4} key={index}>
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};