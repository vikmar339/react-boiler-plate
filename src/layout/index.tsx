import DefaultLayout from "./DefaultLayout";
import FormLayout from "./FormLayout";

export const LayoutTypeMapping = {
  FormLayout,
  DefaultLayout,
} as const;

export type LayoutTypes = keyof typeof LayoutTypeMapping;

type LayoutOwnProps<T extends LayoutTypes> = {
  as?: T;
};

type LayoutProps<T extends LayoutTypes> = LayoutOwnProps<T> &
  React.ComponentProps<(typeof LayoutTypeMapping)[T]>;

const defaultLayoutType = "DefaultLayout";

const Layout = <T extends LayoutTypes = typeof defaultLayoutType>({
  as,
  ...rest
}: LayoutProps<T>) => {
  const LayoutType: any =
    (as && LayoutTypeMapping[as]) || LayoutTypeMapping[defaultLayoutType];
  return <LayoutType {...rest} />;
};

export default Layout;
