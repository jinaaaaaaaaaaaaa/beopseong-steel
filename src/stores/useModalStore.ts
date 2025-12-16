import { create } from "zustand";

export type ModalType = "directions";

export type DirectionsPayload = {
  title?: string;
  address: string;
  mapExternalUrl?: string; // 네이버/카카오 지도 링크
};

export type ModalPayloadMap = {
  directions: DirectionsPayload;
  null: undefined;
};

interface ModalState {
  openedModal: ModalType | null;
  payload?: ModalPayloadMap[ModalType];

  openModal: <T extends ModalType>(
    type: T,
    payload?: ModalPayloadMap[T]
  ) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  openedModal: null,
  payload: undefined,

  openModal: (type, payload) => set({ openedModal: type, payload }),
  closeModal: () => set({ openedModal: null, payload: undefined }),
}));
