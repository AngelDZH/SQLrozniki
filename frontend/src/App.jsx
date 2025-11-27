import { useState } from "react";
import StartPage from "./pages/StartPage";
import InterviewPage from "./pages/InterviewPage";
import FinishPage from "./pages/FinishPage";

export default function App() {
  const [page, setPage] = useState("start");
  const [interviewId, setInterviewId] = useState(null);
  const [tasks, setTasks] = useState([]);

  if (page === "start")
    return (
      <StartPage
        onStart={(id, task) => {
          setInterviewId(id);
          setTasks([{ task }]);
          setPage("interview");
        }}
      />
    );

  if (page === "interview")
    return (
      <InterviewPage
        interviewId={interviewId}
        tasks={tasks}
        setTasks={setTasks}
        onFinish={() => setPage("finish")}
      />
    );

  if (page === "finish")
    return <FinishPage interviewId={interviewId} tasks={tasks} />;

  return null;
}