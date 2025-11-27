export default function CodeEditor({ code, setCode }) {
    return (
        <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{
                width: "100%",
                height: 200,
                fontFamily: "monospace",
                fontSize: 14
            }}
        />
    );
}