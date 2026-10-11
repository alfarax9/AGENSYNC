type FlowPacketProps = {
  path: string;
  duration: number;
  delay: number;
  isBounce?: boolean;
};

// A dot riding a connector. SMIL moves it along the exact curve in every
// browser; a bounce rides out and back (the Dev and QA loop). Under reduced
// motion it is hidden instead of left frozen mid-line.
export function FlowPacket({ path, duration, delay, isBounce }: FlowPacketProps) {
  return (
    <circle r={2.4} className="fill-text motion-reduce:hidden">
      <animateMotion
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        path={path}
        {...(isBounce ? { keyPoints: "0;1;0", keyTimes: "0;0.5;1", calcMode: "linear" } : {})}
      />
    </circle>
  );
}
