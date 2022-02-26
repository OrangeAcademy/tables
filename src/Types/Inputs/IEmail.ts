export interface IPropsEmail {
  options: { label: string }[];
  text: string;
  icon: JSX.Element;
  error?: boolean;
  onChange?: any;
}
