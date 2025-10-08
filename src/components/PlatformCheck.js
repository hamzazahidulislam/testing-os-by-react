/** @format */

export default function PlatformCheck() {
  const userAgent = navigator.userAgent || navigator.vendor || ''
  const isAndroid = /Android/i.test(userAgent)
  const isWebView = /\bwv\b/.test(userAgent)
  const isMac = /Mac/i.test(userAgent)
  const isAndroidWebView = isAndroid && isWebView
  console.log(userAgent)
  return (
    <div className='p-4'>
      {isAndroidWebView ? (
        <p>You are using Android WebView 🧩</p>
      ) : isAndroid ? (
        <p>You are using Android Browser 🌐</p>
      ) : (
        <p>You are using Desktop or Other Platform 💻 </p>
      )}
      {isMac ? <h1> You are using Mac </h1> : <h1> You are not using mac </h1>}
      <h1>{navigator.platform} </h1>
    </div>
  )
}
