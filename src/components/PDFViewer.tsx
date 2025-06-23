export function PDFViewer() {
  return (
    <iframe
      src="/resume.pdf"
      width="100%"
      height="100%"
      style={{ border: "none", minHeight: "100vh" }}
      title="Resume"
    />
  );
}