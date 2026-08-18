import { QRCodeSVG } from "qrcode.react"

export function QrCode({ url, caption }: { url: string; caption: string }) {
  return (
    <div className="bg-white p-4 border border-outline rounded flex flex-col items-center gap-3 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
      <QRCodeSVG value={url} size={120} />
      <span className="font-annotation text-annotation text-on-surface-variant text-center">
        {caption}
      </span>
    </div>
  )
}
