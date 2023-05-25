import styled from "styled-components";
import { motion } from "framer-motion";

{/* TODO
    - Create function to create and finish new Dazzle objects
    - Create function to randomize initiated dimesions and colors of dazzle obejcts
    - Create function to randomize paths of Dazzle Objects
*/}


const Dazzle = () => {
{/* Style Variables and Functions */}

const dimension1 = ["10px", "10px"];
const dimension2 = ["8px", "8px"];
const dimension3 = ["6px", "6px"];
const dimension4 = ["4px", "4px"];
const dimension5 = ["2px", "2px"];

const possibleDimensions = [dimension1, dimension2, dimension3, dimension4, dimension5];
const random = Math.floor(Math.random() * possibleDimensions.length);

let randomDimension = () => {
    let dim = possibleDimensions[random];
    console.log(dim);
    return dim;
}



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
    width: ${randomDimension[0]};
    height: ${randomDimension[1]};
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