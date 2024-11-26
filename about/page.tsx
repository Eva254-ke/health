export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">About Our Cancer Diagnosis ML Model</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to leverage cutting-edge machine learning technology to assist healthcare professionals in the early and accurate diagnosis of cancer. We aim to improve patient outcomes by providing rapid, reliable analysis of medical data.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Team</h2>
        <p className="mb-4">
          Our team consists of expert data scientists, oncologists, and software engineers who have collaborated to develop this state-of-the-art diagnostic tool. With decades of combined experience in machine learning and medical research, we are committed to pushing the boundaries of what's possible in cancer diagnosis.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Model Development</h2>
        <p className="mb-4">
          Our model has been trained on a vast dataset of anonymized patient records, including medical histories, symptoms, and diagnostic outcomes. We use advanced deep learning techniques to identify patterns and correlations that may not be immediately apparent to the human eye.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            <strong>How accurate is the model?</strong> Our model has achieved an accuracy rate of over 95% in clinical trials, but it's important to note that it should be used as a supportive tool for healthcare professionals, not as a replacement for their expertise.
          </li>
          <li className="mb-2">
            <strong>Is my data secure?</strong> We take data security very seriously. All patient data is encrypted and anonymized, and we comply with all relevant data protection regulations.
          </li>
          <li className="mb-2">
            <strong>How often is the model updated?</strong> We continuously refine our model with new data and research findings. Major updates are typically released on a quarterly basis.
          </li>
          <li className="mb-2">
            <strong>Can this tool be used for all types of cancer?</strong> While our model is comprehensive, it's primarily focused on the most common types of cancer. We're constantly working to expand its capabilities.
          </li>
        </ul>
      </section>
    </div>
  )
}

