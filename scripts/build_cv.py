from pathlib import Path
import re, html
from reportlab.platypus import SimpleDocTemplate, Paragraph, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from pypdf import PdfReader
root=Path(__file__).resolve().parents[1]
source=(root/'content/cv.md').read_text()
out=root/'public/cv/gonzalo-cuadros-cv.pdf'
styles={
 'body':ParagraphStyle('body',fontName='Helvetica',fontSize=10,leading=13,textColor=HexColor('#242629'),spaceAfter=5),
 'name':ParagraphStyle('name',fontName='Helvetica-Bold',fontSize=27,leading=32,spaceAfter=10,textColor=HexColor('#16181b')),
 'section':ParagraphStyle('section',fontName='Helvetica-Bold',fontSize=12,leading=16,spaceBefore=10,spaceAfter=6,textColor=HexColor('#875334'),keepWithNext=True),
 'role':ParagraphStyle('role',fontName='Helvetica-Bold',fontSize=10.5,leading=14,spaceBefore=7,spaceAfter=4,keepWithNext=True),
 'bullet':ParagraphStyle('bullet',fontName='Helvetica',fontSize=10,leading=13,leftIndent=10,firstLineIndent=-7,spaceAfter=4,textColor=HexColor('#242629'))}
def fmt(text):
 text=html.escape(text.replace('—','-').replace('–','-'))
 text=re.sub(r'\[([^\]]+)\]\(([^)]+)\)',r'<a href="\2" color="#875334"><u>\1</u></a>',text)
 return re.sub(r'\*\*(.*?)\*\*',r'<b>\1</b>',text)
story=[]
for line in source.splitlines():
 if not line.strip():continue
 if line.startswith('## Áreas técnicas'):story.append(PageBreak())
 kind='body'
 if line.startswith('# '):kind='name';line=line[2:]
 elif line.startswith('## '):kind='section';line=line[3:]
 elif line.startswith('### '):kind='role';line=line[4:]
 elif line.startswith('- '):kind='bullet';line='• '+line[2:]
 story.append(Paragraph(fmt(line),styles[kind]))
def footer(canvas,doc):
 canvas.saveState();w,h=A4
 canvas.setStrokeColor(HexColor('#D5B39A'));canvas.setLineWidth(.6);canvas.line(43,42,w-43,42)
 canvas.setFont('Helvetica',8);canvas.setFillColor(HexColor('#62666C'));canvas.drawString(43,29,'Gonzalo Cuadros | Frontend Tech Lead');canvas.drawRightString(w-43,29,str(doc.page));canvas.restoreState()
doc=SimpleDocTemplate(str(out),pagesize=A4,rightMargin=43,leftMargin=43,topMargin=40,bottomMargin=55,title='Gonzalo Cuadros - CV',author='Gonzalo Cuadros')
doc.build(story,onFirstPage=footer,onLaterPages=footer)
r=PdfReader(out);text='\n'.join(p.extract_text() for p in r.pages)
assert len(r.pages)==2,len(r.pages)
assert 'Notas editoriales' not in text and 'Pendientes antes' not in text
assert all(x in text for x in ['Gonzalo Cuadros','MANGO','Wuolah','Freepik','UNIR','Hevy'])
links=[a.get_object()['/A']['/URI'] for p in r.pages for a in p.get('/Annots',[]) if a.get_object().get('/A',{}).get('/URI')]
assert len(links)==5,links

print({'pages':len(r.pages),'links':links,'bytes':out.stat().st_size})
