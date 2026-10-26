"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Button from "@/app/components/ui/Button";

const SUBJECTS = [
  { label: "Parler d'un projet", value: "Projet" },
  { label: "Demander un audit",  value: "Audit"  },
  { label: "Demander une démo",  value: "Démo"   },
  { label: "Autre",              value: "Autre"  },
];

const inputClass =
  "w-full border border-border rounded-xl px-4 py-3 text-sm text-ink bg-white placeholder:text-muted/50 focus:outline-none focus:border-agency focus:ring-1 focus:ring-agency transition-colors";

function getInitialSubject(searchParams: ReturnType<typeof useSearchParams>) {
  const sujet = searchParams.get("sujet");
  if (sujet === "demo")  return "Démo";
  if (sujet === "audit") return "Audit";
  return "Projet";
}

export default function ContactForm() {
  const searchParams = useSearchParams();

  const [nom,     setNom]     = useState("");
  const [email,   setEmail]   = useState("");
  const [tel,     setTel]     = useState("");
  const [subject, setSubject] = useState(() => getInitialSubject(searchParams));
  const [message, setMessage] = useState("");
  const [status,  setStatus]  = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mgoljvnw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "Contact", sujet: subject, nom, email, tel, message }),
      });
      if (res.ok) setStatus("done");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-start gap-4 py-10">
        <CheckCircle2 size={36} className="text-care" />
        <h3 className="text-2xl font-black text-ink">Message reçu.</h3>
        <p className="text-muted text-lg leading-relaxed">
          Nous vous répondons sous 24 heures ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-ink mb-2">
            Votre nom <span className="font-normal text-muted">*</span>
          </label>
          <input
            type="text"
            value={nom}
            onChange={e => setNom(e.target.value)}
            required
            placeholder="Jean Dupont"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink mb-2">
            E-mail <span className="font-normal text-muted">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="vous@exemple.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-ink mb-2">
          Téléphone <span className="font-normal text-muted">(optionnel)</span>
        </label>
        <input
          type="tel"
          value={tel}
          onChange={e => setTel(e.target.value)}
          placeholder="+242 00 000 00 00"
          className={inputClass}
        />
      </div>

      <div>
        <p className="text-xs font-semibold text-ink mb-2.5">Sujet</p>
        <div className="flex flex-wrap gap-2">
          {SUBJECTS.map(s => (
            <label
              key={s.value}
              className={[
                "cursor-pointer px-4 py-2 rounded-full text-sm border transition-all",
                subject === s.value
                  ? "bg-ink text-white border-ink"
                  : "bg-white text-muted border-border hover:border-ink hover:text-ink",
              ].join(" ")}
            >
              <input
                type="radio"
                name="sujet"
                value={s.value}
                checked={subject === s.value}
                onChange={() => setSubject(s.value)}
                className="sr-only"
              />
              {s.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-ink mb-2">
          Votre message <span className="font-normal text-muted">*</span>
        </label>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          rows={5}
          placeholder="Décrivez votre projet en quelques lignes..."
          className={inputClass + " resize-none"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Une erreur s&apos;est produite. Réessayez ou écrivez-nous directement à{" "}
          <a href="mailto:contact@lumina-cg.com" className="underline">contact@lumina-cg.com</a>.
        </p>
      )}

      <Button disabled={status === "sending"} size="lg">
        {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </Button>
    </form>
  );
}
