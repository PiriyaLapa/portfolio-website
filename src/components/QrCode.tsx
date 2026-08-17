import { QRCodeSVG } from "qrcode.react"

export function QrCode({ url }: { url: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-800">
        <QRCodeSVG value={url} size={144} />
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-500">
        Scan to open this site
      </p>
    </div>
  )
}
