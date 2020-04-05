import * as color from "../../constants/colors";

export const common = {
  cardStyle: { backgroundColor: color.white },
  headerShown: false
};

export const findGymList = {
  ...common,
  title: "Escolha uma unidade na lista",
  headerTintColor: color.white,
  headerStyle: {
    backgroundColor: color.black
  },
  transitionSpec: {
    open: {
      animation: "timing",
      config: {
        duration: 2
      }
    },
    close: {
      config: {
        duration: 2
      }
    }
  }
};
