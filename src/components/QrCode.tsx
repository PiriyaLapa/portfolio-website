import { QRCodeSVG } from "qrcode.react"

export function QrCode({ url, caption }: { url: string; caption: string }) {
  return (
    <div className="bg-white p-4 border border-border-gray rounded flex flex-col items-center gap-3 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
      <QRCodeSVG value={url} size={120} />
      <span className="font-label-caps text-label-caps text-text-muted text-center">
        {caption}
      </span>
    </div>
  )
}
