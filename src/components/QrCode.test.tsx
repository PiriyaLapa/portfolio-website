import { render, screen } from "@testing-library/react"
import { QrCode } from "./QrCode"

describe("QrCode", () => {
  it("renders an SVG QR code and the caption", () => {
    render(<QrCode url="https://example.com" caption="Scan to share this portfolio" />)

    expect(screen.getByText("Scan to share this portfolio")).toBeInTheDocument()
    expect(document.querySelector("svg")).toBeInTheDocument()
  })
})
