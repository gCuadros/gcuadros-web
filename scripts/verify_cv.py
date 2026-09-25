"""Check the committed PDF without regenerating it or uploading it anywhere."""
from pathlib import Path
import re
from pypdf import PdfReader


def normalize(value):
    return re.sub(r"\s+", " ", value).strip()


def verify_cv(root):
    source = (root / "content/cv.md").read_text()
    pdf = root / "public/cv/gonzalo-cuadros-cv.pdf"
    reader = PdfReader(pdf)
    assert len(reader.pages) == 2, "CV must have two pages"
    visible = []
    for line in source.splitlines():
        if not line.strip():
            continue
        line = re.sub(r"^#{1,3} |^- ", "", line)
        line = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", line)
        visible.append(line.replace("**", "").replace("—", "-").replace("–", "-"))
    pages = []
    for page in reader.pages:
        # ReportLab writes the footer before the document body in the stream.
        text = page.extract_text() or ""
        text = re.sub(r"Gonzalo Cuadros \| Frontend Tech Lead\s*\d+", "", text)
        pages.append(text.replace("•", "").replace("\x7f", ""))
    assert normalize(" ".join(pages)) == normalize(" ".join(visible)), (
        "PDF text differs from content/cv.md; regenerate and visually review the CV"
    )
    expected_links = re.findall(r"\[[^\]]+\]\(([^)]+)\)", source)
    actual_links = [
        annotation.get_object()["/A"]["/URI"]
        for page in reader.pages
        for annotation in page.get("/Annots", [])
        if annotation.get_object().get("/A", {}).get("/URI")
    ]
    assert actual_links == expected_links, "PDF link destinations differ from source"
    print(f"CV verified: 2 pages, {len(actual_links)} links, exact visible text in order")
    print("This check is not an ATS score or a substitute for visual review.")


if __name__ == "__main__":
    verify_cv(Path(__file__).resolve().parents[1])
