import { useState } from "react";
import api from "../api/backend";
import CodeEditor from "../components/CodeEditor";

export default function TaskPage({ interview, onNext, onFinish }) {
    const [code, setCode] = useState("");
    const [result, setResult] = useState(null);

    async function submit() {
        const res = await api.submitSolution({
            interview_id: interview.interview_id,
            code,
            tests: interview.task.visible_tests,
            task: interview.task
        });
        setResult(res.result);
    }

    async function nextTask() {
        const res = await api.nextTask({
            interview_id: interview.interview_id,
            last_result: {
                task: interview.task,
                result: result,
                next_difficulty: result.next_difficulty
            }
        });
        onNext(res);
    }

    return (
        <div style={{ padding: 40 }}>
            <h1>{interview.task.title}</h1>
            <p>{interview.task.description}</p>

            <CodeEditor code={code} setCode={setCode} />

            <button onClick={submit}>Submit</button>

            {result && (
                <div style={{ marginTop: 20 }}>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                    <button onClick={nextTask}>Next Task</button>
                    <button onClick={onFinish}>Finish Interview</button>
                </div>
            )}
        </div>
    );
}