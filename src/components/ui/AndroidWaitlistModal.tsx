type AndroidWaitlistModalProps = {
  open: boolean
  onClose: () => void
}

export function AndroidWaitlistModal({ open, onClose }: AndroidWaitlistModalProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="waitlist-title" className="text-xl font-semibold">
            Pre-order Android
          </h2>
          <button
            type="button"
            className="rounded-lg px-2 py-1 text-rhyme-muted hover:bg-rhyme-card"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <p className="mt-2 text-sm text-rhyme-muted">
          Be the first to know when Tuquan launches on Android!
        </p>
        <form
          className="mt-4 flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault()
            onClose()
          }}
        >
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="min-w-0 flex-1 rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:border-rhyme-blue"
          />
          <button
            type="submit"
            className="rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  )
}
