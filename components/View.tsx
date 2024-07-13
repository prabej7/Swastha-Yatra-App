import useTheme from "@/hooks/useTheme";
import { ViewProps } from "react-native";
import { View as V } from "react-native";
interface Props extends ViewProps {
  children?: React.ReactNode;
}

const View: React.FC<Props> = ({ ...props }) => {
  const theme = useTheme();
  return (
    <>
      <V {...props} style={[props.style, { backgroundColor: theme.bg }]}>
        {props.children}
      </V>
    </>
  );
};

export default View;
