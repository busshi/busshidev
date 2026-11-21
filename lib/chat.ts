// The Ideta widget script (loaded in components/hoc/Layout.tsx) exposes
// this function on window once it has run.
type IdetaWindow = Window & {
  ideta_bot_action?: (action: string, state?: string) => void;
};

const getWidget = () => (window as IdetaWindow).ideta_bot_action;

export const isChatLoaded = () => Boolean(getWidget());

export const openChat = () => getWidget()?.("click", "open");
