import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#0b0f17",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f43f5e",
          borderRadius: 8,
          fontWeight: 700,
          fontFamily: "monospace",
          border: "1px solid #e11d48",
        }}
      >
        MG
      </div>
    ),
    {
      ...size,
    }
  );
}
