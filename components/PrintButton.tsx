"use client";

export default function PrintButton() {
  return (
    <button className="btn" type="button" onClick={() => window.print()}>
      Save as PDF
    </button>
  );
}
