export const initialState = {
  editor: {
    mode: "edit",
  },
  mql: [
    {
      id: "md",
      size: 640,
    },
    {
      id: "lg",
      size: 1140,
    },
  ],
  fonts: [
    {
      id: "inter",
      familyName: "Inter",
    },
  ],
  colors: [
    {
      id: "blue",
      hex: "#0000ff",
    },
    {
      id: "grey",
      hex: "#c0c0c0",
    },
    {
      id: "black",
      hex: "#000",
    },
    {
      id: "red",
      hex: "#ff0000",
    },
    {
      id: "yellow",
      hex: "#ffff00",
    },
  ],
  nodes: [
    {
      id: "nb1",
      state: {
        hover: false,
      },
      type: "box",
      color: "yellow",
      bg: "blue",
      children: ["nt1", "nt2"],
    },
    {
      id: "nt1",
      state: {
        hover: false,
      },
      type: "text",
      fontFamily: "inters",
      value: "Bread",
    },
    {
      id: "nt2",
      state: {
        hover: false,
      },
      type: "text",
      fontFamily: "inters",
      value: "Cheese",
    },
    {
      id: "nb2",
      state: {
        hover: false,
      },
      type: "box",
      color: "black",
      bg: "grey",
      children: ["nt3", "nt4"],
    },
    {
      id: "nt3",
      state: {
        hover: false,
      },
      type: "text",
      fontFamily: "inters",
      value: "Tomatoes",
    },
    {
      id: "nt4",
      state: {
        hover: false,
      },
      type: "text",
      fontFamily: "inter",
      value: "Brocolli",
    },
  ],
  pages: [
    {
      id: "x1p2q3r",
      title: "New Page",
      children: ["nb1", "nb2"],
    },
  ],
};
