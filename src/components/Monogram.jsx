import { site } from "../data/site.config";

/** Interlocking U & S monogram with a lotus crest, drawn in the lotus theme colours. */
export function Monogram({ className = "" }) {
  const first = site.couple.partnerA[0];
  const second = site.couple.partnerB[0];
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      role="img"
      aria-label={`${site.couple.partnerA} and ${site.couple.partnerB} monogram`}
    >
      <circle cx="100" cy="100" r="94" className="stroke-gold" strokeWidth="2.5" />
      <circle
        cx="100"
        cy="100"
        r="84"
        className="stroke-ornament"
        strokeWidth="1"
        strokeDasharray="2 5"
      />
      {/* lotus crest */}
      <g transform="translate(100 34)">
        {[-36, 0, 36].map((angle) => (
          <path
            key={angle}
            d="M0 0 C 5 -6 5 -16 0 -24 C -5 -16 -5 -6 0 0 Z"
            transform={`rotate(${angle})`}
            className="fill-accent stroke-accent-deep"
            strokeWidth="0.6"
          />
        ))}
        <circle cy="2" r="3" className="fill-gold" />
      </g>
      {/* U and S, interlocked */}
      <text
        x="78"
        y="132"
        textAnchor="middle"
        className="font-script fill-accent-deep"
        fontSize="96"
      >
        {first}
      </text>
      <text
        x="122"
        y="158"
        textAnchor="middle"
        className="font-script fill-gold"
        fontSize="96"
      >
        {second}
      </text>
    </svg>
  );
}
