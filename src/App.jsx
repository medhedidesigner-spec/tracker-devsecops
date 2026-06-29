import { useState, useEffect } from "react";
import { PHASES } from "./data";
import "./App.css";

function WeekCard({ phase, week, progress, onToggle }) {
  const [expanded, setExpanded] = useState(false);
  const done = week.tasks.filter((_, i) => progress[`${phase.id}-${week.id}-${i}`]).length;
  const pct = Math.round((done / week.tasks.length) * 100);
  const isComplete = done === week.tasks.length;

  return (
    <div className={`week-card ${isComplete ? "complete" : ""}`} style={{ "--phase-color": phase.color }}>
      <button className="week-header" onClick={() => setExpanded(!expanded)}>
        <div className="week-badge" style={{
          background: isComplete ? phase.color : "transparent",
          borderColor: isComplete ? phase.color : "#334155"
        }}>
          {isComplete ? "✓" : `S${week.week}`}
        </div>
        <div className="week-info">
          <span className="week-title">{week.title}</span>
          <div className="week-progress-row">
            <div className="mini-bar">
              <div className="mini-fill" style={{ width: `${pct}%`, background: phase.color }} />
            </div>
            <span className="week-count">{done}/{week.tasks.length}</span>
          </div>
        </div>
        <span className={`chevron ${expanded ? "open" : ""}`}>▼</span>
      </button>

      {expanded && (
        <div className="task-list">
          {week.tasks.map((task, i) => {
            const key = `${phase.id}-${week.id}-${i}`;
            const checked = !!progress[key];
            const isWeekend = task.label.startsWith("[Weekend]");
            const label = task.label.replace("[Weekend] ", "");
            return (
              <div key={i} className="task-item">
                <div
                  className="checkbox"
                  onClick={() => onToggle(key)}
                  style={{
                    borderColor: checked ? phase.color : "#334155",
                    background: checked ? phase.color : "transparent"
                  }}
                >
                  {checked && <span>✓</span>}
                </div>
                <div className="task-content">
                  <span className={`task-label ${checked ? "done" : ""}`}>{label}</span>
                  <div className="task-meta">
                    {isWeekend && <span className="badge-weekend">Weekend</span>}
                    {task.url && (
                      <a
                        href={task.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="task-link"
                        onClick={e => e.stopPropagation()}
                      >
                        📚 Ressource →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function PhaseView({ phase, progress, onToggle }) {
  const allKeys = phase.weeks.flatMap(w => w.tasks.map((_, i) => `${phase.id}-${w.id}-${i}`));
  const done = allKeys.filter(k => progress[k]).length;
  const pct = Math.round((done / allKeys.length) * 100);

  return (
    <div className="phase-view">
      <div className="phase-header" style={{ borderColor: phase.color + "44" }}>
        <div>
          <div className="phase-months" style={{ color: phase.accent }}>{phase.months}</div>
          <div className="phase-title">{phase.title}</div>
        </div>
        <div className="phase-stat">
          <span className="phase-pct" style={{ color: phase.accent }}>{pct}<small>%</small></span>
          <span className="phase-sub">{done}/{allKeys.length}</span>
        </div>
      </div>
      <div className="phase-bar-wrap">
        <div className="phase-bar-fill" style={{ width: `${pct}%`, background: phase.color }} />
      </div>
      <div className="week-list">
        {phase.weeks.map(week => (
          <WeekCard key={week.id} phase={phase} week={week} progress={progress} onToggle={onToggle} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [progress, setProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem("tracker_progress") || "{}"); }
    catch { return {}; }
  });
  const [activePhase, setActivePhase] = useState("phase1");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem("tracker_progress", JSON.stringify(progress));
    setSaved(true);
    const t = setTimeout(() => setSaved(false), 1500);
    return () => clearTimeout(t);
  }, [progress]);

  const toggle = (key) => setProgress(p => ({ ...p, [key]: !p[key] }));

  const totalTasks = PHASES.flatMap(p => p.weeks.flatMap(w => w.tasks)).length;
  const totalDone = Object.values(progress).filter(Boolean).length;
  const overallPct = Math.round((totalDone / totalTasks) * 100);
  const currentPhase = PHASES.find(p => p.id === activePhase);

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="header-left">
            <div className="header-eyebrow">Roadmap Personnelle</div>
            <h1 className="header-title">DevOps + Cybersécurité 🚀</h1>
          </div>
          <div className="header-right">
            <div className="overall-pct">{overallPct}<span>%</span></div>
            <div className="overall-sub">{totalDone}/{totalTasks} tâches</div>
            {saved && <div className="saved-badge">✓ Sauvegardé</div>}
          </div>
        </div>
        <div className="overall-bar">
          <div className="overall-fill" style={{ width: `${overallPct}%` }} />
        </div>
        <nav className="phase-nav">
          {PHASES.map(phase => {
            const keys = phase.weeks.flatMap(w => w.tasks.map((_, i) => `${phase.id}-${w.id}-${i}`));
            const done = keys.filter(k => progress[k]).length;
            const pct = Math.round((done / keys.length) * 100);
            const active = activePhase === phase.id;
            return (
              <button key={phase.id}
                className={`phase-tab ${active ? "active" : ""}`}
                style={active ? { background: phase.color, borderColor: phase.color } : {}}
                onClick={() => setActivePhase(phase.id)}>
                {phase.label}
                <span className="tab-pct">{pct}%</span>
              </button>
            );
          })}
        </nav>
      </header>

      <main className="main">
        <PhaseView phase={currentPhase} progress={progress} onToggle={toggle} />
      </main>
    </div>
  );
}
