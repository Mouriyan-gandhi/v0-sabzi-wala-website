export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-green-200 border-t-green-600"></div>
        <p className="text-lg font-medium text-green-600">Loading...</p>
      </div>
    </div>
  )
}
