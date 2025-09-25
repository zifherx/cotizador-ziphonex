import { RightPanel } from "./Right-Panel";
import { LeftPanel } from "./Left-Panel";

export function AuthView() {
  return (
    <div className="min-h-screen flex p-0 sm:p-4">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}
