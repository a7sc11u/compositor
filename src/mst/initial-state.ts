export const initialState = {
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
  pages: [
    {
      id: "x1p2q3r",
      title: "New Page",
      children: [
        {
          type: "box",
          color: "red",
          children: [
            {
              type: "text",
              fontFamily: "inters",
              value: "Bread",
            },
            {
              type: "text",
              fontFamily: "inters",
              value: "Cheese",
            },
          ],
        },
        {
          type: "text",
          fontFamily: "inters",
          value: "Potatoes",
        },
        {
          type: "text",
          fontFamily: "inter",
          value: "Brocolli",
        },
      ],
    },
  ],
};
