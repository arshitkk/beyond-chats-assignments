import InboxSection from "./pages/InboxSection";
import CopilotSection from "./pages/CopilotSection";
import MessageSection from "./pages/MessageSection";
function App() {
  return (
    <div className="flex justify-between h-screen  pr-2">
      <div className="">
        <InboxSection />
      </div>
      <div className="">
        <MessageSection />
      </div>
      <div className="">
        <CopilotSection />
      </div>
    </div>
  );
}

export default App;
