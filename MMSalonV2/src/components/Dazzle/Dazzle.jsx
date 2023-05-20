import styled from "styled-components";
import { motion } from "framer-motion";

{/* TODO
    - Create function to create and finish new Dazzle objects
    - Create function to randomize initiated dimesions and colors of dazzle obejcts
    - Create function to randomize paths of Dazzle Objects
*/}

const Dazzle = () => {

{/* Styled Components */}

const FullSiteContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;

`;

const Speck = styled(motion.div)`
    width: 10px;
    height: 10px;
    background-color: red;
`;
{/* End of Styled Components */}

    return (
        <>
        <FullSiteContainer>
            <Speck 
                animate = {{
                    rotateX: 180,
                    rotateY: 180,
                    x: "100vw",
                    y: "100vh"
                 }}
                transition={{
                    repeat: Infinity,
                    ease: [0.25, 0.50, 0.75, 1],
                    duration: 10
                    }}
            
            />
            </FullSiteContainer>
        </>
    )
};

export default Dazzle;