import TopBar from "../../components/TopBar/TopBar";
import BookNow from "../../components/BookNow/BookNow";
{/* import CommentBlock from "../../components/CommentBlock"; */}
import BottomBar from "../../components/BottomBar/BottomBar";
import IntroVid from "../../components/IntroVid/IntroVid";

const Home = () => {
    return (
        <>
            <TopBar />
            <BookNow />
            <IntroVid />
            <BottomBar />
        </>
    )
}

export default Home;