import home from "@/content/home.json";

const { loop } = home.howItWorks.screen;
const attempts = Array.from({ length: loop.attempts }, (_, index) => index + 1);

// The attempt budget as three marks: the first fails, the second (lighting up
// after the failure) passes, the third is never needed.
export function AttemptTrack() {
  return (
    <ol className="flex items-center gap-1.5 font-mono text-[0.625rem]">
      <li className="mr-1 text-text-tertiary">{loop.attemptLabel}</li>
      {attempts.map((attempt) => (
        <li
          key={attempt}
          style={{ animationDelay: attempt === 2 ? "2.3s" : "0s" }}
          className={`grid size-5 place-items-center rounded-full border ${attempt === 1 ? "border-danger text-danger" : attempt === 2 ? "border-highlight-from text-highlight-from motion-safe:animate-rise" : "border-border-strong text-text-tertiary"}`}
        >
          {attempt}
        </li>
      ))}
    </ol>
  );
}
