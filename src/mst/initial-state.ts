export const initialState = {
  mode: "edit",
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
      id: "red",
      hex: "#ff0000",
    },
  ],
  nodes: [
    {
      id: "nb1",
      type: "box",
      color: "red",
      children: ["nt1", "nt2"],
    },
    {
      id: "nt1",
      type: "text",
      fontFamily: "inters",
      value: "Bread",
    },
    {
      id: "nt2",
      type: "text",
      fontFamily: "inters",
      value: "Cheese",
    },
    {
      id: "nt3",
      type: "text",
      fontFamily: "inters",
      value: "Potatoes",
    },
    {
      id: "nt4",
      type: "text",
      fontFamily: "inter",
      value: "Brocolli",
    },
  ],
  pages: [
    {
      id: "x1p2q3r",
      title: "New Page",
      children: ["nb1", "nt3", "nt4"],
    },
  ],
};
