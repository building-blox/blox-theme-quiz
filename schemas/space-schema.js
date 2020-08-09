let spaceSchema = {
  "space": {
      "name": "Blox Theme Demo",
      "description": "Content Management System for Blox Theme Demo",
      "theme": {
        "name": "Default",
        "colorPairs": [{
            "name": "Primary",
            "color": {
              "h": "0",
              "s": "0",
              "l": "15"
            },
            "contrastColor": {
              "h": "0",
              "s": "0",
              "l": "100"
            }
          },{
            "name": "Secondary",
            "color": {
              "h": "39",
              "s": "36",
              "l": "52"
            },
            "contrastColor": {
              "h": "0",
              "s": "0",
              "l": "100"
            }
          }, {
            "name": "Ternary",
            "color": {
              "h": "0",
              "s": "100",
              "l": "100"
            },
            "contrastColor": {
              "h": "0",
              "s": "0",
              "l": "0"
            }
          }
        ],
        "fonts": [{
            "name": "Primary",
            "link": "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=option",
            "fontFamily": "'Montserrat', sans-serif"
          }
        ]
      }
    }
};

module.exports = spaceSchema;