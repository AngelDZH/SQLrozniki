import { useState } from "react";
import api from "../api/backend";

export default function StartPage({ onStart }) {
    const [loading, setLoading] = useState(false);

    async function startInterview() {
        setLoading(true);

        try{
            const data = await api.startInterview();

            onStart(data.interview_id, data.task) ;
        } catch (err) {
            console.error('Ошибка при старте интервью')
            alert('Ошибка старта интервью');
        }

        setLoading(false);
    }

    return (
        <div style={{ padding: 40 }}>
            <h1>AI Interview</h1>
            <button onClick={startInterview} disabled={loading}>
                {loading ? "Loading..." : "Start Interview"}
            </button>
        </div>
    );
}