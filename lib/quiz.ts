import { site } from "@/site.config";

/**
 * Quote-funnel configuration. Edit the option lists + step copy in
 * site.config.ts → `quiz`.
 */
export const {
  itemOptions,
  volumeOptions,
  locationOptions,
  accessOptions,
  timingOptions,
  contactMethods,
  copy: quizCopy,
} = site.quiz;

export const TOTAL_STEPS = site.quiz.totalSteps;

export type QuoteData = {
  items: string[];
  volume: string;
  location: string;
  access: string[];
  timing: string;
  photoCount: number;
  name: string;
  phone: string;
  email: string;
  preferredContact: string;
};
