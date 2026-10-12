import { Card } from "@/components/ui/Card";
import { DashboardApproval } from "./DashboardApproval";
import { DashboardPipeline } from "./DashboardPipeline";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardSummary } from "./DashboardSummary";
import { DashboardTopBar } from "./DashboardTopBar";
import { DashboardWorkers } from "./DashboardWorkers";

// Decorative on purpose: the feature list below it carries the same points as
// text, and a fake screen read aloud row by row would only get in the way.
export function DashboardMockup() {
  return (
    <Card isDecorative className="overflow-hidden text-sm shadow-[0_30px_80px_-30px_rgb(0_0_0)]">
      <DashboardTopBar />
      <div className="flex">
        <DashboardSidebar />
        <div className="flex min-w-0 flex-1 flex-col gap-4 p-4 md:p-6">
          <DashboardSummary />
          <DashboardApproval />
          <DashboardPipeline />
          <DashboardWorkers />
        </div>
      </div>
    </Card>
  );
}
