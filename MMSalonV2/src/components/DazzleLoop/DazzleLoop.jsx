import Dazzle from "../../components/Dazzle/Dazzle"
const element = document.getElementById("SpeckDiv");
const DazzleLoop = () => {
    const speck = <Dazzle />
    

    function LoopSpeck() {
        let i = 0;
        do {
            i++;
            console.log("Speck: " + speck);
            console.log("Element: " + element);
            document.getElementById(element).appendChild(speck);   
        } while (i < 15);        
    }
    
    
    return (
        <>
        <div id="SpeckDiv">
            <LoopSpeck />
        </div>
        </>
    )
}

export default DazzleLoop