import styled from "styled-components";
import Logo from "../../assets/images/logo.svg";
import LogoBW from "../../assets/images/logobw.svg";
import { motion } from "framer-motion";

const Splash = () => {

{/* Styled Components */}
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
    width: 75%;
    height: 75%;
`;

{/* End of Styled Components */}
    return (
        <>
            <IntroContainer>
                <SVGLogo
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 6,
                    delay: 0.5,
                    ease: [0.25, 0.50, 0.75, 1]
                    }}
                src={Logo} />                
                <SVGLogo
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 1 }}
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