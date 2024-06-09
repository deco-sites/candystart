export default function Workflow(_p: unknown) {
  return (
    <div>
      <div
        hx-ext="sse"
        sse-connect="/live/invoke/site/loaders/longRunning.ts"
        sse-swap="message"
      >
      </div>
      Contents of this box will be updated in real time with every SSE message
      received from the chatroom.
    </div>
  );
}
