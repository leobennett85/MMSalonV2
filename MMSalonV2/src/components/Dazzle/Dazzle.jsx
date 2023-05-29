import styled from "styled-components";
import { motion } from "framer-motion";

{/* TODO
    - Create function to randomize initiated dimesions of dazzle obejcts - DONE
    - Create function to randomize initiated colors of dazzle obejcts - DONE
    - Create function to create and finish new Dazzle objects

    - Create function to randomize paths of Dazzle Objects
*/}


const Dazzle = () => {
    {/* Style Variables and Functions */}

    //#region Dimensions
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
    //#endregion Dimensions

    //#region colors
    const fleckColor1 = "#ffdddd";
    const fleckColor2 = "#ddffff";
    const fleckColor3 = "#c5d9ff";
    const fleckColor4 = "#fcffdf";
    const fleckColor5 = "#ddffe0";
    {/* create an array of possible colors */}
    const possibleColors = [fleckColor1, fleckColor2, fleckColor3, fleckColor4, fleckColor5];
    {/* dimensionPicker function to choose random index of array */}
    function ColorPicker() {
        const randomIndex = Math.floor(Math.random() * possibleColors.length);
        return randomIndex;
    }
    {/* colorPicker test loop */}
    function TestColorPicker() {
        let i = 0;
        let colorPicked = '';
        do {
            colorPicked = ColorPicker();
            console.log(i + ": " + colorPicked);
            console.log("Color: " + possibleColors[colorPicked]);
            i = i + 1;
            } while (i < 15);
    }
    console.log(TestColorPicker());
    //#endregion Colors

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
        width: ${possibleDimensions[DimensionPicker()]};
        height: ${possibleDimensions[DimensionPicker()]};
        background-image: linear-gradient(to right, ${possibleColors[ColorPicker()]}, ${possibleColors[ColorPicker()]}, ${possibleColors[ColorPicker()]} );
        border: 1px solid black;
    `;
    {/* End of Styled Components */}

    {/*Testing points */}
    const point1x = "calc(100vw - 10vw)";
    const point1y = "calc(100vh - 80vh)";

    {/*Testing recreation*/}
    const addSpeck = `document.createElement(Speck)`;
    function Recreate() {
        let i = 0;
        do {
            addSpeck;
            i = i + 1;
          } while (i < 15);
    }
    
    return (
        <>
        <FullSiteContainer>
            <Recreate>         
            <Speck
                animate = {{
                    rotateX: 180,
                    rotateY: 180,
                    x: `${point1x}`,
                    y: `${point1y}`,
                }}
                transition={{
                    repeat: Infinity,
                    ease: [0.25, 0.50, 0.75, 1],
                    duration: 10
                }}>
            </Speck>
            </Recreate>
            </FullSiteContainer>
        </>
    )
};

export default Dazzle;