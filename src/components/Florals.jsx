import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";

export function CornerMandala({ className = "" }) {
  const reduce = useReducedMotion();

  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="20" cy="20" r="14" className="fill-gold/30" />
      <motion.path
        d="M20 20 C60 20 90 40 110 70 C130 100 150 140 180 180"
        className="stroke-gold"
        strokeWidth="1.5"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M20 48 C55 48 88 72 108 102"
        className="stroke-ornament"
        strokeWidth="1.2"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, delay: 0.15, ease: "easeInOut" }}
      />
      <motion.path
        d="M48 20 C48 55 72 88 102 108"
        className="stroke-ornament"
        strokeWidth="1.2"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, delay: 0.2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="110"
        cy="70"
        r="18"
        className="stroke-gold"
        strokeWidth="1.1"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, delay: 0.4 }}
      />
      <motion.path
        d="M110 52 C118 62 118 78 110 88 C102 78 102 62 110 52 Z"
        className="stroke-accent"
        strokeWidth="1.1"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, delay: 0.55 }}
      />
      <motion.path
        d="M92 70 C102 62 118 62 128 70 C118 78 102 78 92 70 Z"
        className="stroke-accent-deep"
        strokeWidth="1.1"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, delay: 0.65 }}
      />
      <circle cx="110" cy="70" r="4" className="fill-gold" />
    </svg>
  );
}

export function MarigoldGarland({ className = "" }) {
  const blooms = [40, 100, 160, 220, 280, 340, 400, 460, 520, 580];

  return (
    <svg
      className={className}
      viewBox="0 0 640 72"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8 28 C90 52 180 8 320 32 C460 56 540 16 632 36"
        className="stroke-gold/70"
        strokeWidth="1.4"
      />
      {blooms.map((x, i) => {
        const y = 28 + Math.sin(i * 0.9) * 10;
        return (
          <g key={x} transform={`translate(${x} ${y})`}>
            <circle r="11" className="fill-accent" />
            <circle r="5" className="fill-gold" />
            <circle cx="-7" cy="-6" r="6" className="fill-accent-deep/80" />
            <circle cx="8" cy="-4" r="6" className="fill-accent/90" />
          </g>
        );
      })}
    </svg>
  );
}


const quad = (t, p0, p1, p2) => {
  const u = 1 - t;
  return [
    u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
    u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1],
  ];
};
const tangent = (t, p0, p1, p2) => {
  const a = [2 * (1 - t) * (p1[0] - p0[0]) + 2 * t * (p2[0] - p1[0]), 2 * (1 - t) * (p1[1] - p0[1]) + 2 * t * (p2[1] - p1[1])];
  const l = Math.hypot(a[0], a[1]) || 1;
  return [a[0] / l, a[1] / l];
};

/** Palm blade: gold outline, midrib and fine hatching, like the card. */
function Frond({ p0, p1, p2, width = 22, lines = 10 }) {
  const id = useId();
  const n = tangent(0.5, p0, p1, p2);
  const normal = [-n[1], n[0]];
  const e1 = [p1[0] + normal[0] * width, p1[1] + normal[1] * width];
  const e2 = [p1[0] - normal[0] * width, p1[1] - normal[1] * width];
  const blade = `M${p0[0]} ${p0[1]} Q${e1[0]} ${e1[1]} ${p2[0]} ${p2[1]} Q${e2[0]} ${e2[1]} ${p0[0]} ${p0[1]} Z`;
  const hatch = [];
  for (let i = 1; i <= lines; i++) {
    const t = i / (lines + 1);
    const P = quad(t, p0, p1, p2);
    const T = tangent(t, p0, p1, p2);
    const N = [-T[1], T[0]];
    for (const side of [1, -1]) {
      const Q = [P[0] + N[0] * side * width * 1.1 + T[0] * 6, P[1] + N[1] * side * width * 1.1 + T[1] * 6];
      hatch.push(`M${P[0].toFixed(1)} ${P[1].toFixed(1)} L${Q[0].toFixed(1)} ${Q[1].toFixed(1)}`);
    }
  }
  return (
    <g>
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={blade} />
        </clipPath>
      </defs>
      <path d={blade} className="stroke-gold" strokeWidth="1.1" />
      <path d={`M${p0[0]} ${p0[1]} Q${p1[0]} ${p1[1]} ${p2[0]} ${p2[1]}`} className="stroke-gold" strokeWidth="0.8" />
      <path d={hatch.join(" ")} className="stroke-gold" strokeWidth="0.45" opacity="0.8" clipPath={`url(#${id}-clip)`} />
    </g>
  );
}

/** Layered lotus: cupped outer, middle, and inner petals with a gold stamen. */
function Lotus({ x, y, s = 1 }) {
  const id = useId();
  const cup = "M0 0 C -15 -12 -17 -42 0 -62 C 17 -42 15 -12 0 0 Z";
  const layers = [
    { angles: [-62, -31, 0, 31, 62], k: 1, fill: `url(#${id}-outer)` },
    { angles: [-40, -14, 14, 40], k: 0.72, fill: `url(#${id}-mid)` },
    { angles: [-20, 0, 20], k: 0.46, fill: "#fdf3e6" },
  ];
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <defs>
        <linearGradient id={`${id}-outer`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#fbeee4" />
          <stop offset="0.55" stopColor="#f2a6bd" />
          <stop offset="1" stopColor="#d4487a" />
        </linearGradient>
        <linearGradient id={`${id}-mid`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#fdf6ee" />
          <stop offset="1" stopColor="#e9739a" />
        </linearGradient>
      </defs>
      {layers.map((layer, li) =>
        layer.angles.map((a) => (
          <g key={`${li}-${a}`} transform={`rotate(${a}) scale(${layer.k})`}>
            <path d={cup} fill={layer.fill} className="stroke-gold" strokeWidth={1 / layer.k * 0.6} />
          </g>
        ))
      )}
      {[-4, 0, 4].map((dx) => (
        <circle key={dx} cx={dx} cy="-6" r="1.2" className="fill-gold" />
      ))}
    </g>
  );
}

/** Deep green pad with gold rim and dots, like the card's lotus pads. */
function Pad({ cx, cy, rx, ry, rot = 0 }) {
  const id = useId();
  const dots = [];
  for (let i = -3; i <= 3; i++) for (let j = -1; j <= 1; j++) dots.push([cx + i * rx * 0.22, cy + j * ry * 0.45 + (i % 2 ? 2 : 0)]);
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      <defs>
        <linearGradient id={`${id}-pad`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c7a58" />
          <stop offset="1" stopColor="#14412f" />
        </linearGradient>
      </defs>
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#${id}-pad)`} className="stroke-gold" strokeWidth="1" />
      <ellipse cx={cx} cy={cy} rx={rx * 0.86} ry={ry * 0.8} fill="none" className="stroke-gold" strokeWidth="0.5" opacity="0.7" />
      {dots.map(([x, y], k) => (
        <circle key={k} cx={x} cy={y} r="0.9" className="fill-gold" />
      ))}
    </g>
  );
}

export function LotusCorner({ className = "" }) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: { opacity: reduce ? 1 : 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.2, delay },
  });

  return (
    <svg className={className} viewBox="0 0 220 240" fill="none" aria-hidden="true" focusable="false">
      <motion.g {...fade(0)}>
        <Frond p0={[12, 232]} p1={[38, 118]} p2={[92, 20]} width={20} lines={11} />
        <Frond p0={[12, 232]} p1={[84, 140]} p2={[168, 104]} width={16} lines={9} />
        <Frond p0={[12, 232]} p1={[60, 214]} p2={[156, 196]} width={11} lines={6} />
      </motion.g>
      <motion.g {...fade(0.3)}>
        <Pad cx={112} cy={202} rx={54} ry={17} rot={-6} />
        <path d="M108 190 Q106 176 104 170" className="stroke-ornament" strokeWidth="1" />
        <Lotus x={104} y={170} s={1.05} />
      </motion.g>
    </svg>
  );
}

const PETALS = [
  { left: "6%", delay: "0s", dur: "15s", drift: "18px" },
  { left: "18%", delay: "3s", dur: "18s", drift: "-22px" },
  { left: "31%", delay: "1.2s", dur: "16s", drift: "28px" },
  { left: "44%", delay: "5s", dur: "20s", drift: "-16px" },
  { left: "57%", delay: "2.4s", dur: "17s", drift: "20px" },
  { left: "69%", delay: "6.5s", dur: "19s", drift: "-26px" },
  { left: "81%", delay: "0.8s", dur: "14s", drift: "14px" },
  { left: "92%", delay: "4.1s", dur: "21s", drift: "-12px" },
];

export function FallingPetals() {
  return (
    <div className="falling-petals pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PETALS.map((petal) => (
        <span
          key={petal.left}
          className="petal absolute top-[-12%] block"
          style={{
            left: petal.left,
            "--delay": petal.delay,
            "--dur": petal.dur,
            "--drift": petal.drift,
          }}
        >
          <svg width="18" height="22" viewBox="0 0 18 22" className="fill-accent">
            <path d="M9 1 C 15 8 15 15 9 21 C 3 15 3 8 9 1 Z" />
          </svg>
        </span>
      ))}
    </div>
  );
}
