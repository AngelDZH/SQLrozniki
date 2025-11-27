export default function FinishPage({ report }) {
    return (
        <div style={{ padding: 40 }}>
            <h1>Interview Summary</h1>
            <pre>{JSON.stringify(report, null, 2)}</pre>
        </div>
    );
}