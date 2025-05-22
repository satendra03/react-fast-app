import React from "react";
import { useState } from "react";
import { Check, Clipboard } from "lucide-react";

function App() {
  // function CopyCommandButton() {
    const [copied, setCopied] = useState(false);
    const command = "npm create react-fast-app@latest";

    const handleCopy = async () => {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
  // }
  return (
    <div className="min-h-screen relative bg-black text-white flex flex-col items-center justify-center px-4 text-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]">
      <nav className="flex absolute top-0 w-full items-center justify-between px-64 py-4 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <img src={""} alt="logo" className="h-6" />
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">
            Docs
          </a>
          <a href="#" className="hover:text-white transition">
            Examples
          </a>
          <button className="bg-white text-black px-3 py-1 rounded-full font-medium text-xs">
            Contribution
          </button>
        </div>
      </nav>
      <div className="mb-8">
        {/* <img src={logo} alt="Motion Logo" className="h-10" /> */}
      </div>
      <h1 className="text-5xl font-extrabold mb-4 leading-tight">
        Do it <i className="mx-4">Fast</i> with <br />
        <code>fast-apps</code>.
      </h1>
      <p className="text-gray-400 max-w-xl mb-8">
        All set up and ready to go with a single command. <br />
        Start building instantly, save time, and code faster.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <button className="bg-zinc-800 text-white border border-zinc-700 px-6 py-2 rounded-md text-base flex items-center gap-2 transition-colors hover:bg-zinc-700">
          <code className="">npm create react-fast-app@latest</code>
        </button>
        <button
          onClick={handleCopy}
          className="bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? <Check size={16} /> : <Clipboard size={16} />}
        </button>
        
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl text-gray-400 text-sm">
        <div className="relative flex flex-col items-center cursor-help group">
          🎁 Free and open-source
          <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            You can use it freely and modify it!
          </span>
        </div>

        <div className="relative flex flex-col items-center cursor-help group">
          😀 Easy to use
          <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            Beginner-friendly and simple UI.
          </span>
        </div>

        <div className="relative flex flex-col items-center cursor-help group">
          ✅ Production-ready
          <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            Suitable for real-world applications.
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;

//   );
// }

// export default App;
{
  /* <div className="w-screen h-screen flex items-center flex-col justify-center text-center pb-2 text-3xl font-semibold tracking-tight bg-black">
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
    </div> */
}

// Chnaged
// index.html
// index.css
// package.json
