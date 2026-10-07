"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import home from "@/content/home.json";
import { CopyButton } from "./CopyButton";
import { PlatformTabs } from "./PlatformTabs";

const { platforms } = home.install;

export function InstallTerminal() {
  const [platformId, setPlatformId] = useState(platforms[0].id);
  const platform = platforms.find((candidate) => candidate.id === platformId) ?? platforms[0];
  const panelId = "install-commands";

  return (
    <Card tone="alt" className="overflow-hidden">
      <div className="flex items-center justify-between gap-4 border-b border-border px-4">
        <PlatformTabs
          platforms={platforms}
          selectedId={platformId}
          panelId={panelId}
          onSelect={setPlatformId}
        />
        <CopyButton text={platform.commands.join("\n")} />
      </div>
      <pre
        id={panelId}
        role="tabpanel"
        aria-labelledby={`tab-${platformId}`}
        tabIndex={0}
        className="overflow-x-auto p-5 font-mono text-sm leading-7 text-text"
      >
        {platform.commands.map((command) => (
          <code key={command} className="block before:text-text-tertiary before:content-['$_']">
            {command}
          </code>
        ))}
      </pre>
    </Card>
  );
}
