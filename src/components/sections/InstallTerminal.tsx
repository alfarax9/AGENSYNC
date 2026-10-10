"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import home from "@/content/home.json";
import { CopyButton } from "./CopyButton";
import { InstallTabs } from "./InstallTabs";

const { methods } = home.install;

export function InstallTerminal() {
  const [methodId, setMethodId] = useState(methods[0].id);
  const method = methods.find((candidate) => candidate.id === methodId) ?? methods[0];
  const panelId = "install-commands";

  return (
    <Card tone="alt" className="overflow-hidden">
      <div className="flex items-center justify-between gap-4 border-b border-border px-4">
        <InstallTabs
          methods={methods}
          selectedId={methodId}
          panelId={panelId}
          onSelect={setMethodId}
        />
        <CopyButton text={method.commands.join("\n")} methodId={method.id} />
      </div>
      <pre
        id={panelId}
        role="tabpanel"
        aria-labelledby={`tab-${methodId}`}
        tabIndex={0}
        className="overflow-x-auto p-5 font-mono text-sm leading-7 text-text"
      >
        {method.commands.map((command) => (
          <code key={command} className="block before:text-text-tertiary before:content-['$_']">
            {command}
          </code>
        ))}
      </pre>
    </Card>
  );
}
