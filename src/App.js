import LessonOne from "./pages/useState/LessonOne";
import LessonTwo from "./pages/useState/LessonTwo";
import LessonThree from "./pages/useState/LessonThree";
import LessonFour from "./pages/useState/LessonFour";
import Explain from "./pages/useState/Explain";
import ExplainUseEffect from "./pages/useEffect/ExplainUseEffect";
import LessonOneUseEffect from "./pages/useEffect/LessonOneUseEffect";
import LessonTwoUseEffect from "./pages/useEffect/LessonTwoUseEffect";

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      {/* ParT useState */}
      {/* <LessonOne /> */}
      {/* <LessonTwo /> */}
      {/* <LessonThree /> */}
      {/* <LessonFour /> */}
      {/* <Explain /> */}
      {/* ParT useEffect */}
      {/* <ExplainUseEffect></ExplainUseEffect> */}
      {/* <LessonOneUseEffect></LessonOneUseEffect> */}
      <LessonTwoUseEffect></LessonTwoUseEffect>
    </div>
  );
}

export default App;
