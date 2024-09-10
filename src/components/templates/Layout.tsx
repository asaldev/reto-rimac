import React, { ReactNode } from 'react';
import Header from '../organisms/HeaderSite';
import Footer from '../organisms/FooterSite';
import styled from 'styled-components';
import bkgVioletDesktop from '../../assets/images/bkg-violet-desktop.png'; // Ajusta la ruta si es necesario
import bkgMagentaDesktop from '../../assets/images/bkg-magenta-desktop.png'; // Ajusta la ruta si es necesario
import bkgVioletMobile from '../../assets/images/bkg-violet-mobile.png'; // Ajusta la ruta si es necesario
import bkgMagentaMobile from '../../assets/images/bkg-magenta-mobile.png'; // Ajusta la ruta si es necesario



interface LayoutProps {
  children: ReactNode;
  footer?: boolean;
  activeGradient?: boolean;
}
interface LayoutSectionContentProps {
  children: ReactNode;
  background?: string;
  height?: string;
}

const LayoutSectionContent = styled.div<LayoutSectionContentProps>`
    width: 100%;
    height:  ${(props) => props.height ? props.height + 'px'  : 'auto'};
    display: flex;
    justify-content: center;
    z-index: 10;
    background: ${(props) => props.background ? props.background : 'none'};
    & > * {
      max-width: 1120px;
      width: 100%;
    }

    @media (max-width: 768px) {
        & > * {
        padding: 0px 24px;
        max-width: 100%;
        }
     }
`;
const LayoutContent = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 64px;
background-color: #FAFBFF;
background-image: ${(props) => 
    props.activeGradient
    ? `url(${bkgVioletDesktop}), url(${bkgMagentaDesktop});`
    : `inherit;`
  };
  background-position: left bottom, top right;
  background-repeat: no-repeat, no-repeat;
  background-size: auto, auto;
       @media (max-width: 768px) {
        background-image: ${(props) => 
            props.activeGradient
            ? ` url(${bkgVioletMobile}), url(${bkgMagentaMobile});`
            : `inherit;`
          };
     }
`;


const Layout: React.FC<LayoutProps> = ({ children, footer = true, activeGradient = false }) => {
  return (
    <LayoutContent activeGradient={activeGradient}>
      <LayoutSectionContent>
        <Header />
      </LayoutSectionContent>
      <LayoutSectionContent>
        {children}
      </LayoutSectionContent>
     { footer  &&
      <LayoutSectionContent background='#03050F'>
        <Footer />
      </LayoutSectionContent>
      }
    </LayoutContent>
  );
};

export default Layout;
