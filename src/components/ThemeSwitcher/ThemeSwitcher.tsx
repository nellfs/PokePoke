interface IThemeSwitcher {
  theme: string;
  onClick(): void;
}

const ThemeSwitcher = (props: IThemeSwitcher) => {
  return <div onClick={props.onClick}>{props.theme}</div>;
};

export default ThemeSwitcher;
