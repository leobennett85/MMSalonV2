import styled from "styled-components";
import { motion } from "framer-motion";

{/* TODO
    - Create function to randomize initiated dimesions and colors of dazzle obejcts - DONE
    - Create function to create and finish new Dazzle objects

    - Create function to randomize paths of Dazzle Objects
*/}


const Dazzle = () => {
    {/* Style Variables and Functions */}

    {/* Define Dimension sets */}
    const dimension1 = "10px";
    const dimension2 = "8px";
    const dimension3 = "6px";
    const dimension4 = "4px";
    const dimension5 = "2px";
    {/* create an array of possiblie Dimensions */}
    const possibleDimensions = [dimension1, dimension2, dimension3, dimension4, dimension5];
    {/* dimensionPicker function to choose random index of array */}
    function DimensionPicker() {
        const randomIndex = Math.floor(Math.random() * possibleDimensions.length);
        return randomIndex;
    }
    {/* dimensionPicker test loop */}
    function TestPicker() {
        let i = 0;
        let dimension = '';
        do {
            dimension = DimensionPicker();
            console.log(i + ": " + dimension);
            i = i + 1;
          } while (i < 15);
    }
    console.log(TestPicker());

    {/* End of Style Variables and Functions */}

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
        width: ${possibleDimensions[0]};
        height: ${possibleDimensions[1]};
        background-image: linear-gradient(to right, red , yellow);
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