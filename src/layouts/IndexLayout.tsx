import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Image from "next/image";
import { FiFile, FiLink } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type LayoutProps = {
  children: ReactNode;
};

const IndexLayout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isIndexPage = router.pathname === "/";

  useEffect(() => {
    console.log("Current Path:", router.pathname);
  }, [router.pathname]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <FaChevronRight />,
    prevArrow: <FaChevronLeft />,
    centerMode: false, // Default to false
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true, // Enable center mode on tablets and smaller screens
          arrows: false, // Hide arrows on mobile
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Enable center mode on mobile screens
          arrows: false, // Hide arrows on mobile
          centerPadding: '25px', // Adjust padding for mobile screens
        }
      }
    ]
  };

  return (
    <Container>
      {isIndexPage && (
        <Header>
          <ImageContainer>
            <Image
              src="/images/handwave.png"
              alt="Tejjas Kaul"
              width={200}
              height={200}
            />
            <AboutMe>
              <p>Hi, I'm <strong>Tejjas Kaul</strong>! I'm a high schooler who is keen on exploring neurotech, public health, and design. Check out the <LinkStyle href="/blog">blog</LinkStyle> and the links below to stay updated:</p>
            </AboutMe>
            <SocialLinks>
              <a href="https://docs.google.com/document/d/1SVg5OicX0dVmVkmRItPTlU5I_I7bLPGrKWgzEr2HdlA/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><FiFile /></a>
              <a href="https://www.linkedin.com/in/tejjas-kaul-36091a22b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/tkpepper15" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.instagram.com/tejjaskphoto/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </SocialLinks>
          </ImageContainer>
        </Header>
      )}
      <Main>
        <Container>
          <Heading>Relevant Projects</Heading>
          <Carousel {...settings}>
            <MyProjects>
              <RoundedImage
                src="/images/dukeappliedethics.png"
                alt="Duke Applied Ethics+ Project"
                width={500}
                height={300}
              />
              <p>Case Study Analysis, User Research, Video Editing, WebDev</p>
              <StyledLink href="https://applied-ethics.vercel.app/" target="_blank" rel="noopener noreferrer"><FiLink />Duke Applied Ethics+ & NCSSM SRIP</StyledLink>
            </MyProjects>
            <MyProjects>
              <StyledLink href="https://drive.google.com/file/d/10IFe0ovxQgVi8ZPEvog8hrw5WO1sEgcC/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FiLink />Neuroethics Scientific Essay</StyledLink>
            </MyProjects>
            <MyProjects>
              <StyledLink href="https://tkpepper15.github.io/neuro-midterm/" target="_blank" rel="noopener noreferrer"><FiLink />Neuro-Ophthalmology Guide</StyledLink>
            </MyProjects>
            <MyProjects>
              <StyledLink href="https://yci-website-enterprise.vercel.app/" target="_blank" rel="noopener noreferrer"><FiLink />Youth Climate Initiative Website</StyledLink>
            </MyProjects>
          </Carousel>
        </Container>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0; // Remove padding to ensure edge-to-edge design
  margin: 0; // Remove margin
`;

const Header = styled.header`
  max-width: 100%; // Ensure full width
  margin: 0 auto;
  padding: .5rem; // Adjust padding for better mobile view
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RoundedImage = styled(Image)`
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
  height: auto;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray1};
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  position: static; // Update position for better mobile positioning
  margin-top: 10px;
`;

const MyProjects = styled.div`
  display: flex;
  padding: 1rem;
  width: 90%;
  max-width: 350px; // Ensure the width is not too large on smaller screens
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  background: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray1};
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: black;
    color: white;
  }
`;

const StyledLink = styled.a`
  font-weight: bold;
  text-decoration: underline;
  font-size: 1.5rem; // Reduce font size on smaller screens
  color: inherit;
`;

const LinkStyle = styled.a`
  color: gray;
`;

const Heading = styled.h2`
  font-size: 1.5rem; // Reduce font size on smaller screens
  line-height: 2.25rem; // Adjust line height
  font-weight: 700;
  margin: 1rem 0; // Add margin for spacing
  text-align: center;
`;

const AboutMe = styled.div`
  display: flex;
  padding: .5rem; // Increase padding for better touch targets
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray1};
`;

const Main = styled.main`
  flex: 1;
`;

const Carousel = styled(Slider)`
  width: 100%; // Ensure full width on smaller screens

  .slick-slide {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .slick-prev, .slick-next {
    color: ${({ theme }) => theme.scheme === "light" ? "black" : "white"};
    margin: .5rem;
  }

  .slick-prev:before, .slick-next:before {
    font-family: 'FontAwesome';
  }

  .slick-dots li button:before {
    color: ${({ theme }) => theme.scheme === "light" ? "black" : "white"};
  }

  // Hide arrows on mobile
  @media (max-width: 600px) {
    .slick-prev, .slick-next {
      display: none;
    }
  }
`;

export default IndexLayout;
