import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Work() {
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col"
      style={{
        background: '#FEFEFE',
      }}
      id="mywork"
    >
      <h1 className="text-5xl font-dosis font-bold">{content.work.title}</h1>
      <p className="text-gray-600 text-2xl font-dosis mb-10">desenvolvidos</p>
      {/* _________________________________________________________________________________________________project */}
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.img[0]}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5"
        />
        <div
          className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
          style={{
            border: '1px solid #e5ecf9',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
        >
          <ProjectDetail 
            projectNum="0"
            webLink="https://dsborini.github.io/recipes-app/"
            gitLink="https://github.com/DSborini/recipes-app"
          />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <ProjectDetail />
        </div>
      </div>
      {/* _________________________________________________________________________________________________project */}
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.img[1]}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5"
        />
        <div
          className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
          style={{
            border: '1px solid #e5ecf9',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
        >
          <ProjectDetail 
            projectNum="1"
            webLink="https://dsborini.github.io/project-trivia/"
            gitLink="https://github.com/DSborini/project-trivia/"
          />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <ProjectDetail />
        </div>
      </div>
      {/* _________________________________________________________________________________________________project */}
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.img[2]}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5"
        />
        <div
          className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
          style={{
            border: '1px solid #e5ecf9',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
        >
          <ProjectDetail
          projectNum="2"
          webLink="https://github.com/DSborini/cookmaster-api"
          gitLink="https://github.com/DSborini/cookmaster-api"
          />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <ProjectDetail />
        </div>
      </div>
    </div>
  );
}

const ProjectDetail = (props) => {
  const animated = useWindowPosition('header', 0.6);

  const redirectToProject = (link) => {
    window.location.assign(link);
  }

  return (
    <div>
      <h1
        className={` ${
          animated ? '' : 'translate-y-10 opacity-0'
        }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
      >
        {content.work.projectName[props.projectNum]}
      </h1>
      <p
        className={`${
          animated ? '' : 'translate-y-10 opacity-0'
        }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
      >
        {content.work.desc[props.projectNum]}
      </p>
      <div className="flex justify-start">
        <button
          onClick={ () => { redirectToProject(props.webLink) } }
          className={`${
            animated ? '' : 'translate-y-10 opacity-0'
          } transform transition duration-2000  px-10 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/rocket.svg"}
            alt="rocket"
            className="mr-5"
          />
          <p className="text-lg">Website</p>
        </button>
        <button
          onClick={ () => { redirectToProject(props.gitLink) } }
          className={`${
            animated ? '' : 'translate-y-10 opacity-0'
          } transform transition duration-2000  px-10 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/github-light.png"}
            alt="github"
            className="mr-5"
          />
          <p className="text-lg">Código</p>
        </button>
      </div>
    </div>
  );
};
