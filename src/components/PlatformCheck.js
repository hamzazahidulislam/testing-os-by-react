/** @format */

export default function PlatformCheck() {
  const userAgent = navigator.userAgent || navigator.vendor || ''
  const isAndroid = /Android/i.test(userAgent)
  const isWebView = /\bwv\b/.test(userAgent)
  const isAndroidWebView = isAndroid && isWebView

  return (
    <div className='p-4'>
      {isAndroidWebView ? (
        <p>You are using Android WebView 🧩</p>
      ) : isAndroid ? (
        <p>You are using Android Browser 🌐</p>
      ) : (
        <p>You are using Desktop or Other Platform 💻</p>
      )}
    </div>
  )
}
