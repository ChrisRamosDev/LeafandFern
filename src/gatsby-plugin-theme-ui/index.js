import { base } from "@theme-ui/presets"

export default {
  ...base,
  styles: {
    ...base.styles,
    a: {
      color: "black",
      "&:hover": {
        color: "gray",
        textDecoration: "underline",
      },
    },
  },
}
