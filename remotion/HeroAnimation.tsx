import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring } from "remotion";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "1:25", label: "Teacher Ratio" },
  { value: "ECD–A", label: "Level Education" },
  { value: "100%", label: "Christian Values" },
];

export const HeroAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 30], [40, 0], { extrapolateRight: "clamp" });

  const subtitleOpacity = interpolate(frame, [20, 50], [0, 1], { extrapolateRight: "clamp" });
  const subtitleY = interpolate(frame, [20, 50], [30, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0A1C44 0%, #1a3a7a 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          border: "2px solid rgba(201, 168, 76, 0.2)",
          opacity: interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" }),
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -50,
          right: -50,
          width: 250,
          height: 250,
          borderRadius: "50%",
          border: "2px solid rgba(201, 168, 76, 0.3)",
          opacity: interpolate(frame, [10, 70], [0, 1], { extrapolateRight: "clamp" }),
        }}
      />

      {/* Gold line */}
      <div
        style={{
          width: interpolate(frame, [15, 45], [0, 80], { extrapolateRight: "clamp" }),
          height: 3,
          background: "#C9A84C",
          marginBottom: 24,
          borderRadius: 2,
        }}
      />

      {/* Subtitle tag */}
      <div
        style={{
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
          background: "rgba(201, 168, 76, 0.15)",
          border: "1px solid rgba(201, 168, 76, 0.4)",
          borderRadius: 100,
          padding: "6px 20px",
          marginBottom: 20,
        }}
      >
        <span style={{ color: "#C9A84C", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>
          Zimbabwe&apos;s Premier Independent School
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white", fontSize: 56, fontWeight: 800, lineHeight: 1.1, margin: 0 }}>
          Beverly Hills
        </h1>
        <h1 style={{ color: "#C9A84C", fontSize: 56, fontWeight: 800, lineHeight: 1.1, margin: 0 }}>
          Group of Schools
        </h1>
      </div>

      {/* Tagline */}
      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: 18,
          marginTop: 20,
          opacity: interpolate(frame, [40, 70], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(frame, [40, 70], [20, 0], { extrapolateRight: "clamp" })}px)`,
          textAlign: "center",
          maxWidth: 500,
        }}
      >
        Built on imagination, perseverance and sustainability
      </p>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: 40,
          marginTop: 50,
          opacity: interpolate(frame, [60, 90], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(frame, [60, 90], [30, 0], { extrapolateRight: "clamp" })}px)`,
        }}
      >
        {stats.map((stat, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ color: "#C9A84C", fontSize: 28, fontWeight: 800 }}>{stat.value}</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 4 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
