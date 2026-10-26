"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "@/app/components/ui/Button";

const TRACKS = [
  { label: "Apporteur d'affaires", value: "Apporteur" },
  { label: "Candidature",          value: "Candidature" },
];

const inputClass =
  "w-full border border-border rounded-xl px-4 py-3 text-sm text-ink bg-white placeholder:text-muted/50 focus:outline-none focus:border-agency focus:ring-1 focus:ring-agency transition-colors";

export default function PartnersForm() {
  const [track,   setTrack]   = useState("Apporteur");
  const [nom,     setNom]     = useState("");
  const [email,   setEmail]   = useState("");
  const [tel,     setTel]     = useState("");
  const [message, setMessage] = useState("");
  const [status,  setStatus]  = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mgoljvnw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: track, nom, email, tel, message }),
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
          Nous vous répondons sous 48 heures.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div>
        <p className="text-xs font-semibold text-ink mb-2.5">Votre démarche</p>
        <div className="flex flex-wrap gap-2">
          {TRACKS.map(t => (
            <label
              key={t.value}
              className={[
                "cursor-pointer px-4 py-2 rounded-full text-sm border transition-all",
                track === t.value
                  ? "bg-ink text-white border-ink"
                  : "bg-white text-muted border-border hover:border-ink hover:text-ink",
              ].join(" ")}
            >
              <input
                type="radio"
                name="track"
                value={t.value}
                checked={track === t.value}
                onChange={() => setTrack(t.value)}
                className="sr-only"
              />
              {t.label}
            </label>
          ))}
        </div>
      </div>

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
        <label className="block text-xs font-semibold text-ink mb-2">
          {track === "Candidature" ? "Votre profil et motivation" : "Votre contexte"}{" "}
          <span className="font-normal text-muted">*</span>
        </label>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          rows={5}
          placeholder={
            track === "Candidature"
              ? "Décrivez votre profil, vos compétences et ce qui vous attire dans ce projet..."
              : "Décrivez votre réseau et les types de clients que vous rencontrez..."
          }
          className={inputClass + " resize-none"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Une erreur s&apos;est produite. Réessayez ou écrivez-nous à{" "}
          <a href="mailto:contact@lumina-cg.com" className="underline">contact@lumina-cg.com</a>.
        </p>
      )}

      <Button disabled={status === "sending"} size="lg">
        {status === "sending" ? "Envoi en cours…" : "Envoyer"}
      </Button>
    </form>
  );
}
