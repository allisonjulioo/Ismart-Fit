import { Dimensions } from "react-native";
import { black, white, secondary } from "../../../variables";
import image from "../../assets/img/estacao.jpg";
import peso from "../../assets/img/peso.png";
import estacione from "../../assets/img/estacione.png";
import anilha from "../../assets/img/anilha.png";

export const data = {
  labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
  legend: ["L1", "L2", "L3"],
  datasets: [
    {
      data: [6, 12, 14, 18, 20, 21]
    }
  ]
};

export const galery = [
  { title: "hello", image: image },
  { title: "world", image: image },
  { title: "Teste", image: image }
];
export const differentials = [
  {
    description:
      "Área de treinos funcionais da Ismart fiti conta com os mais modernos equipamentos para trabalhar o corpo de maneira completa",
    image: peso
  },
  {
    description: "Lorem ipsim",
    image: anilha
  }
];
export const chartConfig = {
  backgroundGradientFrom: white,
  backgroundGradientTo: white,
  decimalPlaces: 0.2,
  labelColor: () => black,
  color: () => secondary,
  style: {
    borderRadius: 16
  }
};
export const screenWidth = Dimensions.get("window").width;
