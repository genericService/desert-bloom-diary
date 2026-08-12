import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Desert Bloom Diary - Maya Rivera",
    short_name: "Desert Bloom",
    description:
      "Maya Rivera contemporaneous 40-week pregnancy diary in Tempe, Arizona, supported by MomDoc Tempe.",
    start_url: "/",
    display: "browser",
    background_color: "#faf7f2",
    theme_color: "#c85a32",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
