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
      id: "averta-bold",
      familyName: "Averta",
      weight: 700,
      italic: false,
      metrics: {
        ascent: 978,
        capHeight: 710,
        descent: -258,
        lineGap: 0,
        unitsPerEm: 1000,
        xHeight: 328,
      },
      features: [
        "c2sc",
        "calt",
        "case",
        "dlig",
        "dnom",
        "frac",
        "lnum",
        "onum",
        "ordn",
        "pnum",
        "salt",
        "smcp",
        "ss01",
        "ss02",
        "ss03",
        "ss04",
        "subs",
        "sups",
        "tnum",
        "zero",
        "cpsp",
        "kern",
      ],
      files: [
        {
          woff: "/fonts/averta/averta-bold.woff2",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        },
      ],
    },
    {
      id: "averta-bolditalic",
      familyName: "Averta",
      weight: 700,
      italic: true,
      metrics: {
        ascent: 978,
        capHeight: 710,
        descent: -258,
        lineGap: 0,
        unitsPerEm: 1000,
        xHeight: 328,
      },
      features: [
        "c2sc",
        "calt",
        "case",
        "dlig",
        "dnom",
        "frac",
        "lnum",
        "onum",
        "ordn",
        "pnum",
        "salt",
        "smcp",
        "ss01",
        "ss02",
        "ss03",
        "ss04",
        "subs",
        "sups",
        "tnum",
        "zero",
        "cpsp",
        "kern",
      ],
      files: [
        {
          woff: "/fonts/averta/averta-bolditalic.woff2",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        },
      ],
    },
    {
      id: "averta-regular",
      familyName: "Averta",
      weight: 400,
      italic: false,
      metrics: {
        ascent: 978,
        capHeight: 710,
        descent: -258,
        lineGap: 0,
        unitsPerEm: 1000,
        xHeight: 328,
      },
      features: [
        "c2sc",
        "calt",
        "case",
        "dlig",
        "dnom",
        "frac",
        "lnum",
        "onum",
        "ordn",
        "pnum",
        "salt",
        "smcp",
        "ss01",
        "ss02",
        "ss03",
        "ss04",
        "subs",
        "sups",
        "tnum",
        "zero",
        "cpsp",
        "kern",
      ],
      files: [
        {
          woff: "/fonts/averta/averta-regular.woff2",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        },
      ],
    },
    {
      id: "averta-regularitalic",
      familyName: "Averta",
      weight: 400,
      italic: true,
      metrics: {
        ascent: 978,
        capHeight: 710,
        descent: -258,
        lineGap: 0,
        unitsPerEm: 1000,
        xHeight: 328,
      },
      features: [
        "c2sc",
        "calt",
        "case",
        "dlig",
        "dnom",
        "frac",
        "lnum",
        "onum",
        "ordn",
        "pnum",
        "salt",
        "smcp",
        "ss01",
        "ss02",
        "ss03",
        "ss04",
        "subs",
        "sups",
        "tnum",
        "zero",
        "cpsp",
        "kern",
      ],
      files: [
        {
          woff: "/fonts/averta/averta-regularitalic.woff2",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        },
      ],
    },
  ],

  colors: [
    {
      id: "blue",
      hex: "#0000ff",
    },
    {
      id: "grey",
      hex: "rgba(0,0,0,0.2)",
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
  pages: [
    {
      id: "x1p2q3r",
      title: "A Page",
      state: {
        drop: false,
        hover: false,
        selected: false,
      },
      children: [
        // {
        //   id: "cont1",
        //   name: null,
        //   state: { drop: false, hover: false, selected: false },
        //   leaf: false,
        //   type: "container",
        //   children: [
        //     {
        //       id: "fe53x5rbt97kje6irjf",
        //       name: null,
        //       state: { drop: false, hover: false, selected: false },
        //       leaf: false,
        //       type: "stack",
        //       gap: 64,
        //       children: [
        //         {
        //           id: "stack1",
        //           name: null,
        //           state: { drop: false, hover: false, selected: false },
        //           leaf: false,
        //           type: "stack",
        //           gap: 32,
        //           children: [
        //             {
        //               id: "nt1",
        //               name: "exercitation",
        //               state: { drop: false, hover: false, selected: false },
        //               leaf: true,
        //               type: "text",
        //               font: "averta-bold",
        //               fontSize: 32,
        //               leading: 2,
        //               fontWeight: 700,
        //               fontStyle: "normal",
        //               featureSettings: null,
        //               value:
        //                 "Lorem exercitation est sunt laboris velit reprehenderit tempor.",
        //             },
        //             {
        //               id: "nt1_2",
        //               name: "ullamco",
        //               state: { drop: false, hover: false, selected: false },
        //               leaf: true,
        //               type: "text",
        //               font: "averta-bold",
        //               fontSize: 32,
        //               leading: 2,
        //               fontWeight: 700,
        //               fontStyle: "normal",
        //               featureSettings: null,
        //               value:
        //                 "Lorem esse ullamco duis aute pariatur exercitation amet.",
        //             },
        //           ],
        //         },
        //         {
        //           id: "5auxp20x3rgkje6ik0m",
        //           name: null,
        //           state: { drop: false, hover: false, selected: false },
        //           leaf: false,
        //           type: "stack",
        //           gap: 32,
        //           children: [
        //             {
        //               id: "nt2",
        //               name: "reprehenderit",
        //               state: { drop: false, hover: false, selected: false },
        //               leaf: true,
        //               type: "text",
        //               font: "averta-bolditalic",
        //               fontSize: 32,
        //               leading: 2,
        //               fontWeight: 700,
        //               fontStyle: "italic",
        //               featureSettings: null,
        //               value:
        //                 "Chin sunt officia eiusmod id incididunt non reprehenderit nostrud voluptate reprehenderit sit.eese",
        //             },
        //             {
        //               id: "nt3",
        //               name: "Ipsum est",
        //               state: { drop: false, hover: false, selected: false },
        //               leaf: true,
        //               type: "text",
        //               font: "averta-regular",
        //               fontSize: 32,
        //               leading: 2,
        //               fontWeight: 400,
        //               fontStyle: "normal",
        //               featureSettings: null,
        //               value:
        //                 "Ipsum est ipsum ipsum culpa duis nisi esse anim pariatur magna adipisicing.",
        //             },
        //             {
        //               id: "nt4",
        //               name: "Excepteur",
        //               state: { drop: false, hover: false, selected: false },
        //               leaf: true,
        //               type: "text",
        //               font: "averta-regularitalic",
        //               fontSize: 32,
        //               leading: 2,
        //               fontWeight: 400,
        //               fontStyle: "italic",
        //               featureSettings: null,
        //               value:
        //                 "Excepteur adipisicing consectetur ullamco sint proident reprehenderit.",
        //             },
        //           ],
        //         },
        //       ],
        //     },
        // ],
        // },
      ],
    },
  ],
};
