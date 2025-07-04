export default function BookingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center font-sans">
      <h1 className="text-4xl font-bold mb-6 text-foreground">Book Care With Us</h1>
      <p className="text-lg text-muted mb-8">
        Fill out our form to request in-home care. Our team will follow up within 24 hours.
      </p>
      <a
        href="/contact"
        className="inline-block bg-primary text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-primary/90 transition"
      >
        Request Care Now
      </a>
    </div>
  );
}
