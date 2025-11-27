import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default api;

/* ========== Interview API ========== */

api.startInterview = async () => {
  const res = await api.get("/interview/start");
  return res.data;
};

api.runTests = async (code, tests) => {
  const res = await api.post("/interview/run_test", { code, tests });
  return res.data;
};

api.submitSolution = async (payload) => {
  const res = await api.post("/interview/submit", payload);
  return res.data;
};

api.nextTask = async (payload) => {
  const res = await api.post("/interview/next", payload);
  return res.data;
};

api.finishInterview = async (interview_id, tasks) => {
  const res = await api.post("/interview/finish", {
    interview_id,
    tasks,
  });
  return res.data;
};

/* ========== Anti-Cheat (если понадобится) ========== */

api.antiStart = async (interview_id) => {
  return (await api.post("/anti_cheat/start", { interview_id })).data;
};

api.antiPause = async (interview_id, duration) => {
  return (await api.post("/anti_cheat/pause", { interview_id, duration })).data;
};

api.antiSubmitTime = async (interview_id) => {
  return (
    await api.post("/anti_cheat/submit_time", { interview_id })
  ).data;
};
