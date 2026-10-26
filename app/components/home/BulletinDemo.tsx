import ProductIcon from "@/app/components/ui/ProductIcon";

const grades = [
  { subject: "Mathématiques", note: 16.5, coef: 3 },
  { subject: "Français",      note: 14.0, coef: 3 },
  { subject: "Sciences",      note: 17.0, coef: 2 },
  { subject: "Hist.\u2011Géo", note: 15.5, coef: 2 },
  { subject: "Anglais",       note: 13.5, coef: 2 },
];

const average = 15.5;

function noteColor(note: number) {
  if (note >= 16) return "text-care font-semibold";
  if (note >= 14) return "text-ink";
  return "text-muted";
}

export default function BulletinDemo() {
  return (
    <div className="rounded-2xl border border-border bg-white shadow-xl max-w-sm w-full overflow-hidden">
      {/* ── Top bar ── */}
      <div className="bg-edu px-4 py-3 flex items-center gap-3">
        <ProductIcon product="education" size={32} />
        <div>
          <p className="text-white font-bold text-xs leading-tight">LUMINA Education</p>
          <p className="text-white/70 text-[10px] leading-tight">
            CS Le Savoir de Rabbin · 2025–2026
          </p>
        </div>
      </div>

      {/* ── Student row ── */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-border">
        <div>
          <p className="font-bold text-xs text-ink">MABIALA Exaucé</p>
          <p className="text-[10px] text-muted">5ème B</p>
        </div>
        <span className="bg-edu/10 text-edu text-[10px] font-semibold px-2.5 py-1 rounded-full">
          Trimestre 1
        </span>
      </div>

      {/* ── Grades table ── */}
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border bg-subtle">
            <th className="text-left px-4 py-2 font-semibold text-muted">Matière</th>
            <th className="text-right px-4 py-2 font-semibold text-muted">Note</th>
            <th className="text-right px-4 py-2 font-semibold text-muted hidden sm:table-cell">Coef</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((g) => (
            <tr key={g.subject} className="border-b border-border last:border-0">
              <td className="px-4 py-2 text-ink">{g.subject}</td>
              <td className={`px-4 py-2 text-right ${noteColor(g.note)}`}>
                {g.note.toFixed(1)}
              </td>
              <td className="px-4 py-2 text-right text-muted hidden sm:table-cell">
                {g.coef}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── Summary footer ── */}
      <div className="bg-subtle px-4 py-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-semibold text-muted uppercase tracking-wide">
            Moyenne générale
          </span>
          <span className="text-xs font-black text-ink">{average.toFixed(1)}/20</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-edu rounded-full"
            style={{ width: `${(average / 20) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[10px] text-muted">
            Rang : <span className="font-semibold text-ink">3e / 28</span>
          </span>
          <span className="bg-care/10 text-care text-[10px] font-semibold px-2 py-0.5 rounded-full">
            Bien
          </span>
        </div>
      </div>
    </div>
  );
}
