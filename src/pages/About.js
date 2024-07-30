import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const FactsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const FactItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #007bff;
  }
`;

const HobbySection = styled.div`
  margin-top: 2rem;
`;

const HobbyImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: 1rem;
  border-radius: 8px;
`;

const About = () => {
  return (
    <AboutWrapper>
      <ProfileImage src="/path-to-profile-image.jpg" alt="Dan Schmitz" />
      <Heading>Hi, I'm Dan Schmitz</Heading>
      <Bio>
        I'm a UX designer and futurist with a passion for creating innovative experiences 
        that push the boundaries of technology. With 8 years of experience in product design 
        and prototyping, I specialize in developing intuitive interfaces for cutting-edge 
        technologies like AR, VR, and AI. My goal is to enhance the human condition through 
        thoughtful and forward-thinking design.
      </Bio>
      <h2>The Facts</h2>
      <FactsList>
        <FactItem>8 years of professional product design and prototyping experience</FactItem>
        <FactItem>Graduate of Master of Science in Technology Commercialization from the McCombs Business School at the University of Texas</FactItem>
        <FactItem>Neurotech/energy startup founder</FactItem>
        <FactItem>Amateur paleontologist and geologist</FactItem>
        <FactItem>Amateur paleoartist and 3D model creator (I love the thrill of discovery and contributing to science)</FactItem>
        <FactItem>Grandmaster of RISK: Global Domination</FactItem>
      </FactsList>
      <HobbySection>
        <h2>What I do when I'm not making things</h2>
        <p>When I'm not designing the future, you can find me:</p>
        <FactsList>
          <FactItem>Exploring trails and discovering hidden natural wonders</FactItem>
          <FactItem>Skipping stones in the ocean and contemplating the vastness of the universe</FactItem>
          <FactItem>Strategizing world domination in RISK (all in good fun, of course)</FactItem>
          <FactItem>Checking out local dive bars and engaging in spirited discussions about technology and design</FactItem>
        </FactsList>
        <HobbyImage src="/path-to-hobby-image.jpg" alt="Dan exploring nature" />
      </HobbySection>
    </AboutWrapper>
  );
};

export default About;