import styled from "styled-components";
import { animate, motion } from "framer-motion";

{/* TODO
    - Create function to randomize initiated dimesions of dazzle obejcts - DONE
    - Create function to randomize initiated colors of dazzle obejcts - DONE
    - Create function to create and finish new Dazzle objects

    - Create function to randomize paths of Dazzle Objects
*/}


const Dazzle = () => {

    //#region Dimensions
    const dimension1 = "10px";
    const dimension2 = "8px";
    const dimension3 = "6px";
    const dimension4 = "4px";
    const dimension5 = "2px";
    // create an array of possiblie Dimensions */}
    const possibleDimensions = [dimension1, dimension2, dimension3, dimension4, dimension5];
    // dimensionPicker function to choose random index of array
    function DimensionPicker() {
        const randomIndex = Math.floor(Math.random() * possibleDimensions.length);
        return randomIndex;
    }
    // dimensionPicker test loop
    {/*
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
    */}
    //#endregion Dimensions

    //#region colors
    const speckColor1 = "#ffdddd";
    const speckColor2 = "#ddffff";
    const speckColor3 = "#c5d9ff";
    const speckColor4 = "#fcffdf";
    const speckColor5 = "#ddffe0";
    // create an array of possible colors
    const possibleColors = [speckColor1, speckColor2, speckColor3, speckColor4, speckColor5];
    // dimensionPicker function to choose random index of array
    function ColorPicker() {
        const randomIndex = Math.floor(Math.random() * possibleColors.length);
        return randomIndex;
    }
    {/*
    // colorPicker test loop
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
    */}
    //#endregion Colors

    //#Region Style Variables and Functions
    //Styled Components
    const FullSiteContainer = styled.div`
        width: 100vw;
        height: 100vh;
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
    `;
    // Testing points for Speck
    const point1x = "100vw";
    const point1y = "100vh";

    const Speck = styled(motion.div)`
        width: ${possibleDimensions[DimensionPicker()]};
        height: ${possibleDimensions[DimensionPicker()]};
        background-image: linear-gradient(to right, ${possibleColors[ColorPicker()]}, ${possibleColors[ColorPicker()]}, ${possibleColors[ColorPicker()]} );
        // border: 1px solid black;
    `;  

    //#endregion Style Variables and Functions
    
    return (
        <>
        <FullSiteContainer>
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
                        duration: 10,

                        }}>
                    </Speck>
            </FullSiteContainer>
        </>
    )
};

export default Dazzle;