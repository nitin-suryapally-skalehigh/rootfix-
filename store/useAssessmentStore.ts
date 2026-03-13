"use client";

import { create } from "zustand";

interface AssessmentData {
  name: string;
  email: string;
  primaryCondition: string;
}

interface AssessmentStore {
  step: number;
  data: AssessmentData;
  updateData: (data: Partial<AssessmentData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

export const useAssessmentStore = create<AssessmentStore>((set) => ({
  step: 1,
  data: {
    name: "",
    email: "",
    primaryCondition: "",
  },
  updateData: (newData) => set((state) => ({ data: { ...state.data, ...newData } })),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  reset: () => set({ step: 1, data: { name: "", email: "", primaryCondition: "" } }),
}));
