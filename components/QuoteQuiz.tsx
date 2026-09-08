"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  itemOptions,
  volumeOptions,
  locationOptions,
  accessOptions,
  timingOptions,
  contactMethods,
  TOTAL_STEPS,
  quizCopy as q,
} from "@/lib/quiz";
import { submitQuote } from "@/app/actions";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { Chip, OptionCard } from "@/components/quiz/Choice";
import { Button } from "@/components/ui/Button";

const MAX_PHOTOS = 6;

export function QuoteQuiz() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const honeypot = useRef<HTMLInputElement>(null);

  // Answers
  const [items, setItems] = useState<string[]>([]);
  const [volume, setVolume] = useState("");
  const [location, setLocation] = useState("");
  const [access, setAccess] = useState<string[]>([]);
  const [timing, setTiming] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredContact, setPreferredContact] = useState("Text");

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const canAdvance = (): boolean => {
    switch (step) {
      case 0:
        return items.length > 0;
      case 1:
        return volume !== "";
      case 2:
        return location !== "";
      case 3:
        return true; // access is optional
      case 4:
        return timing !== "";
      case 5:
        return true; // photos optional
      case 6:
        return name.trim() !== "" && phone.trim() !== "";
      default:
        return false;
    }
  };

  const next = () => {
    setError(null);
    if (step < TOTAL_STEPS - 1) setStep((s) => s + 1);
  };
  const back = () => {
    setError(null);
    setStep((s) => Math.max(0, s - 1));
  };

  const onFiles = (selected: FileList | null) => {
    if (!selected) return;
    const imgs = Array.from(selected).filter((f) => f.type.startsWith("image/"));
    setFiles((prev) => [...prev, ...imgs].slice(0, MAX_PHOTOS));
  };

  const handleSubmit = async () => {
    if (honeypot.current?.value) return; // bot trap
    setSubmitting(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.set("items", items.join(", "));
      fd.set("volume", volume);
      fd.set("location", location);
      fd.set("access", access.join(", ") || "Not specified");
      fd.set("timing", timing);
      fd.set("name", name.trim());
      fd.set("phone", phone.trim());
      fd.set("email", email.trim());
      fd.set("preferredContact", preferredContact);
      files.forEach((f) => fd.append("photos", f));

      const res = await submitQuote(fd);
      if (res?.ok) {
        router.push("/thank-you");
      } else {
        setError(res?.error ?? "Something went wrong. Please call us instead.");
        setSubmitting(false);
      }
    } catch {
      setError("Couldn't send your request. Please try again or give us a call.");
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl bg-white p-6 shadow-card sm:p-9">
      <ProgressBar current={step + 1} total={TOTAL_STEPS} />

      {/* Honeypot — hidden from humans */}
      <input
        ref={honeypot}
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      {/* STEP 0 — Items */}
      {step === 0 && (
        <StepShell title={q.itemsTitle} subtitle={q.itemsSubtitle}>
          <div className="flex flex-wrap gap-3">
            {itemOptions.map((opt) => (
              <Chip key={opt} label={opt} selected={items.includes(opt)} onClick={() => toggle(items, setItems, opt)} />
            ))}
          </div>
        </StepShell>
      )}

      {/* STEP 1 — Volume */}
      {step === 1 && (
        <StepShell title={q.volumeTitle} subtitle={q.volumeSubtitle}>
          <div className="space-y-3">
            {volumeOptions.map((opt) => (
              <OptionCard
                key={opt.value}
                label={opt.label}
                hint={opt.hint}
                icon={opt.icon}
                selected={volume === opt.value}
                onClick={() => setVolume(opt.value)}
              />
            ))}
          </div>
        </StepShell>
      )}

      {/* STEP 2 — Location */}
      {step === 2 && (
        <StepShell title={q.locationTitle} subtitle={q.locationSubtitle}>
          <div className="grid gap-3 sm:grid-cols-2">
            {locationOptions.map((opt) => (
              <OptionCard key={opt} label={opt} selected={location === opt} onClick={() => setLocation(opt)} />
            ))}
          </div>
        </StepShell>
      )}

      {/* STEP 3 — Access */}
      {step === 3 && (
        <StepShell title={q.accessTitle} subtitle={q.accessSubtitle}>
          <div className="flex flex-wrap gap-3">
            {accessOptions.map((opt) => (
              <Chip key={opt} label={opt} selected={access.includes(opt)} onClick={() => toggle(access, setAccess, opt)} />
            ))}
          </div>
        </StepShell>
      )}

      {/* STEP 4 — Timing */}
      {step === 4 && (
        <StepShell title={q.timingTitle} subtitle={q.timingSubtitle}>
          <div className="space-y-3">
            {timingOptions.map((opt) => (
              <OptionCard
                key={opt.value}
                label={opt.label}
                hint={opt.hint}
                selected={timing === opt.value}
                onClick={() => setTiming(opt.value)}
              />
            ))}
          </div>
        </StepShell>
      )}

      {/* STEP 5 — Photos */}
      {step === 5 && (
        <StepShell title={q.photosTitle} subtitle={q.photosSubtitle}>
          <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate/50 bg-cream-dark/40 px-6 py-10 text-center transition-colors hover:border-forest/50">
            <span className="text-3xl">📷</span>
            <span className="font-display font-semibold uppercase tracking-wide text-ink">
              {q.photosCta}
            </span>
            <span className="text-xs text-slate">Up to {MAX_PHOTOS} images</span>
            <input
              type="file"
              accept="image/*"
              multiple
              capture="environment"
              className="hidden"
              onChange={(e) => onFiles(e.target.files)}
            />
          </label>

          {files.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {files.map((f, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 rounded-full bg-cream-dark px-3 py-1.5 text-xs text-ink"
                >
                  {f.name.length > 18 ? f.name.slice(0, 16) + "…" : f.name}
                  <button
                    type="button"
                    onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
                    aria-label="Remove photo"
                    className="text-slate hover:text-ink"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          )}
        </StepShell>
      )}

      {/* STEP 6 — Contact */}
      {step === 6 && (
        <StepShell title={q.contactTitle} subtitle={q.contactSubtitle}>
          <div className="space-y-4">
            <Field label="Name" value={name} onChange={setName} placeholder="Your name" autoComplete="name" />
            <Field
              label="Phone"
              value={phone}
              onChange={setPhone}
              placeholder="(406) 555-0123"
              type="tel"
              autoComplete="tel"
            />
            <Field
              label="Email (optional)"
              value={email}
              onChange={setEmail}
              placeholder="you@email.com"
              type="email"
              autoComplete="email"
            />
            <div>
              <span className="mb-2 block font-display text-sm font-semibold uppercase tracking-wide text-ink-soft">
                {q.contactMethodLabel}
              </span>
              <div className="flex flex-wrap gap-3">
                {contactMethods.map((m) => (
                  <Chip key={m} label={m} selected={preferredContact === m} onClick={() => setPreferredContact(m)} />
                ))}
              </div>
            </div>
          </div>
        </StepShell>
      )}

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      {/* Nav */}
      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={back}
            className="font-display text-sm font-semibold uppercase tracking-wide text-ink-soft hover:text-ink"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}

        {step < TOTAL_STEPS - 1 ? (
          <Button onClick={next} disabled={!canAdvance()} variant="primary" size="lg">
            {q.continueLabel}
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!canAdvance() || submitting} variant="primary" size="lg">
            {submitting ? q.submittingLabel : q.submitLabel}
          </Button>
        )}
      </div>
    </div>
  );
}

function StepShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-ink-soft">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-sm font-semibold uppercase tracking-wide text-ink-soft">
        {label}
      </span>
      <input
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border-2 border-slate/30 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-slate/70 focus:border-forest"
      />
    </label>
  );
}
