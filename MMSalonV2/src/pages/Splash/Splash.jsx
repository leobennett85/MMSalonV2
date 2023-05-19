import styled from "styled-components";
import Logo from "../../assets/images/logo.svg";

const Splash = () => {

{/* Styled Components */}
const IntroContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SVGLogoContainer = styled.img`
    border: bla
`;
{/* End of Styled Components */}
    return (
        <>
            <IntroContainer>
                <SVGLogoContainer src={Logo} />
            </IntroContainer>
        </>
    )
}

export default Splash;