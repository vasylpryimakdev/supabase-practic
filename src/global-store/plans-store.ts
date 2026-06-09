import {create} from 'zustand';

export const plansGlobalStore = create((set) => ({
    selectedPaymentPlan : null,
    setSelectedPaymentPlan: (selectedPaymentPlan:any) => set({selectedPaymentPlan}),
}));

export interface IPlansGlobalStore {
    selectedPaymentPlan : any;
    setSelectedPaymentPlan: (selectedPaymentPlan:any) => void;
}