type Props = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export const CustomTabPanel = (props: Props): JSX.Element => {
  const { children, index, value, ...other } = props;

  return (
    <div
      aria-hidden={value !== index}
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {children}
    </div>
  );
};
