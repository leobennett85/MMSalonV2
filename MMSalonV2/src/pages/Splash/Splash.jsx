import styled from "styled-components";
import Logo from "../../assets/images/logo.svg";
import LogoBW from "../../assets/images/logobw.svg";
import { motion } from "framer-motion";
import DazzleLoop from "../../components/DazzleLoop/DazzleLoop"

const Splash = () => {

{/* Styled Components */}
const DazzleFullScreen = styled.div`
    width: 100vw;
    height: 100vh;
`;
const IntroContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SVGLogo = styled(motion.img)`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 75vw;
    height: 75vh;
`;
{/* End of Styled Components */}

    return (
        <>
            <IntroContainer>
                <DazzleFullScreen>
                    <DazzleLoop />
                </DazzleFullScreen>
                <SVGLogo
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 6,
                    delay: 0.5,
                    ease: [0.25, 0.50, 0.75, 1]
                    }}
                src={Logo} />                
                <SVGLogo
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 6,
                  delay: 0.5,
                  ease: [0.25, 0.50, 0.75, 1]
                }}
                src={LogoBW} />
            </IntroContainer>
        </>
    )
}

export default Splash;