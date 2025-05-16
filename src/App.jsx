import React from "react";

function App() {
  return (
    <div className="w-screen h-screen flex items-center flex-col justify-center text-center pb-2 text-3xl font-semibold tracking-tight bg-black">
      <h1 className="text-3xl font-bold text-white/50 mb-2 font-mono">ReactFast Application is Ready!</h1>
      <code className="relative rounded bg-muted-foreground px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        <a
          href="https://github.com/satendra03"
          target="_blank"
          rel="noopener noreferrer"
        >
          by @satendra03
        </a>
      </code>
    </div>
  );
}

export default App;
