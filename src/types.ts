export type As = React.ElementType;

export type PropsOf<T extends As> = React.ComponentProps<T>;

export type HTMLProps<T extends As> = Omit<PropsOf<T>, "children"> & {
  as?: As;
};
