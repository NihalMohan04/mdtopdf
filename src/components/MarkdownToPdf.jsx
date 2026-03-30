import {
  Document,
  Page,
  Text,
  View,
  Link,
  Font,
  StyleSheet,
} from '@react-pdf/renderer';

const FONT_BASE = 'https://cdn.jsdelivr.net/fontsource/fonts';

const fontDefs = [
  { family: 'Inter', id: 'inter', hasItalic: true },
  { family: 'Geist', id: 'geist-sans', hasItalic: false },
  { family: 'Merriweather', id: 'merriweather', hasItalic: true },
  { family: 'Lora', id: 'lora', hasItalic: true },
  { family: 'JetBrains Mono', id: 'jetbrains-mono', hasItalic: true },
  { family: 'Fira Code', id: 'fira-code', hasItalic: false },
];

fontDefs.forEach(({ family, id, hasItalic }) => {
  const fonts = [
    { src: `${FONT_BASE}/${id}@latest/latin-400-normal.ttf`, fontWeight: 400 },
    { src: `${FONT_BASE}/${id}@latest/latin-700-normal.ttf`, fontWeight: 700 },
  ];
  if (hasItalic) {
    fonts.push(
      { src: `${FONT_BASE}/${id}@latest/latin-400-italic.ttf`, fontWeight: 400, fontStyle: 'italic' },
      { src: `${FONT_BASE}/${id}@latest/latin-700-italic.ttf`, fontWeight: 700, fontStyle: 'italic' },
    );
  }
  Font.register({ family, fonts });
});

Font.registerHyphenationCallback(word => [word]);

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingBottom: 50,
    fontSize: 11,
    fontFamily: 'Helvetica',
    lineHeight: 1.45,
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 14,
    lineHeight: 1.2,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 12,
    lineHeight: 1.25,
    paddingBottom: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d1d5db',
  },
  h3: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: 10,
    lineHeight: 1.3,
  },
  h4: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 8,
    lineHeight: 1.35,
  },
  paragraph: {
    marginBottom: 6,
    lineHeight: 1.45,
  },
  inlineText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  inlineCode: {
    fontFamily: 'Courier',
    fontSize: 9.5,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 2,
  },
  link: {
    color: '#2563eb',
    textDecoration: 'underline',
  },
  strikethrough: {
    textDecoration: 'line-through',
  },
  listItem: {
    marginBottom: 2,
    flexDirection: 'row',
    lineHeight: 1.45,
  },
  listBullet: {
    width: 15,
    fontSize: 11,
  },
  listContent: {
    flex: 1,
    lineHeight: 1.45,
  },
  orderedListBullet: {
    width: 20,
    fontSize: 11,
  },
  code: {
    fontFamily: 'Courier',
    fontSize: 9.5,
    backgroundColor: '#f4f4f4',
    padding: 4,
    borderRadius: 2,
  },
  codeBlock: {
    fontFamily: 'Courier',
    fontSize: 9,
    backgroundColor: '#f6f8fa',
    padding: 8,
    borderRadius: 3,
    marginBottom: 6,
    marginTop: 4,
    borderLeftWidth: 2,
    borderLeftColor: '#94a3b8',
  },
  blockquote: {
    borderLeftWidth: 2,
    borderLeftColor: '#94a3b8',
    paddingLeft: 10,
    marginLeft: 4,
    marginBottom: 6,
    marginTop: 4,
    fontStyle: 'italic',
    color: '#6b7280',
    lineHeight: 1.45,
    backgroundColor: '#f8fafc',
    paddingVertical: 4,
    paddingRight: 8,
  },
  table: {
    marginBottom: 8,
    marginTop: 4,
    borderWidth: 0.5,
    borderColor: '#d1d5db',
    borderRadius: 2,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d1d5db',
  },
  tableHeader: {
    backgroundColor: '#f1f5f9',
    fontWeight: 'bold',
  },
  tableCell: {
    padding: 5,
    flex: 1,
    fontSize: 10,
    lineHeight: 1.4,
  },
  hr: {
    height: 0.5,
    backgroundColor: '#d1d5db',
    marginVertical: 10,
  },
});

function parseInline(text) {
  const segments = [];
  let remaining = text;

  const patterns = [
    { regex: /\*\*\*(.+?)\*\*\*/g, bold: true, italic: true },
    { regex: /___(.+?)___/g, bold: true, italic: true },
    { regex: /\*\*(.+?)\*\*/g, bold: true, italic: false },
    { regex: /__(.+?)__/g, bold: true, italic: false },
    { regex: /\*(.+?)\*/g, bold: false, italic: true },
    { regex: /_(.+?)_/g, bold: false, italic: true },
    { regex: /~~(.+?)~~/g, strikethrough: true },
    { regex: /`(.+?)`/g, code: true },
    { regex: /\[([^\]]+)\]\(([^)]+)\)/g, link: true },
  ];

  while (remaining.length > 0) {
    let earliestMatch = null;
    let earliestIndex = Infinity;
    let earliestPattern = null;
    let earliestContent = null;

    for (const pattern of patterns) {
      const regex = new RegExp(pattern.regex.source, pattern.regex.flags);
      regex.lastIndex = 0;
      const match = regex.exec(remaining);
      
      if (match && match.index < earliestIndex) {
        earliestIndex = match.index;
        earliestMatch = match;
        earliestPattern = pattern;
        if (pattern.link) {
          earliestContent = { text: match[1], href: match[2] };
        } else {
          earliestContent = match[1];
        }
      }
    }

    if (earliestMatch && earliestIndex === 0) {
      const segment = { text: earliestContent.text || earliestContent };
      if (earliestPattern.bold) segment.bold = true;
      if (earliestPattern.italic) segment.italic = true;
      if (earliestPattern.strikethrough) segment.strikethrough = true;
      if (earliestPattern.code) segment.code = true;
      if (earliestPattern.link) segment.link = true;
      if (earliestPattern.link && earliestContent.href) segment.href = earliestContent.href;
      segments.push(segment);
      remaining = remaining.slice(earliestMatch[0].length);
    } else if (earliestMatch) {
      const plainText = remaining.slice(0, earliestIndex);
      if (plainText) {
        segments.push({ text: plainText });
      }
      remaining = remaining.slice(earliestIndex);
    } else {
      if (remaining) {
        segments.push({ text: remaining });
      }
      break;
    }
  }

  return segments;
}

function renderInline(segments, fontFamily) {
  return segments.map((seg, i) => {
    const style = {};
    if (seg.bold) style.fontWeight = 700;
    if (seg.italic) style.fontStyle = 'italic';
    if (seg.code) Object.assign(style, styles.inlineCode);
    if (seg.strikethrough) Object.assign(style, styles.strikethrough);
    if (seg.link) {
      Object.assign(style, styles.link);
      return (
        <Link key={i} src={seg.href} style={style}>
          {seg.text}
        </Link>
      );
    }
    return (
      <Text key={i} style={style}>
        {seg.text}
      </Text>
    );
  });
}

function MarkdownToPdf({ content, font = 'Helvetica' }) {
  const parseMarkdown = (text) => {
    const lines = text.split('\n');
    const elements = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith('# ')) {
        elements.push({ type: 'h1', content: line.slice(2) });
        i++;
      } else if (line.startsWith('## ')) {
        elements.push({ type: 'h2', content: line.slice(3) });
        i++;
      } else if (line.startsWith('### ')) {
        elements.push({ type: 'h3', content: line.slice(4) });
        i++;
      } else if (line.startsWith('#### ')) {
        elements.push({ type: 'h4', content: line.slice(5) });
        i++;
      } else if (line.startsWith('```')) {
        const fenceMatch = line.match(/^(`{3,})/);
        const fenceLen = fenceMatch[1].length;
        const closingFenceRe = new RegExp(`^\`{${fenceLen},}\\s*$`);
        i++;
        let code = '';
        while (i < lines.length && !closingFenceRe.test(lines[i])) {
          code += lines[i] + '\n';
          i++;
        }
        elements.push({ type: 'codeBlock', content: code.trim() });
        i++;
      } else if (line.startsWith('> ')) {
        elements.push({ type: 'blockquote', content: line.slice(2) });
        i++;
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        elements.push({ type: 'listItem', bullet: '•', content: line.slice(2) });
        i++;
      } else if (/^\d+\. /.test(line)) {
        const match = line.match(/^(\d+)\. (.+)/);
        elements.push({ type: 'listItem', bullet: match[1] + '.', content: match[2] });
        i++;
      } else if (line.startsWith('|')) {
        const tableLines = [];
        while (i < lines.length && lines[i].startsWith('|')) {
          if (!lines[i].includes('---')) {
            tableLines.push(lines[i]);
          }
          i++;
        }
        elements.push({ type: 'table', rows: tableLines });
      } else if (line.trim() === '---') {
        elements.push({ type: 'hr' });
        i++;
      } else if (line.trim()) {
        elements.push({ type: 'paragraph', content: line });
        i++;
      } else {
        i++;
      }
    }

    return elements;
  };

  const elements = parseMarkdown(content);

  const renderElement = (el, index) => {
    const inlineSegments = el.content ? parseInline(el.content) : null;
    
    switch (el.type) {
      case 'h1':
        return (
          <Text key={index} style={styles.h1}>
            {renderInline(inlineSegments)}
          </Text>
        );
      case 'h2':
        return (
          <Text key={index} style={styles.h2}>
            {renderInline(inlineSegments)}
          </Text>
        );
      case 'h3':
        return (
          <Text key={index} style={styles.h3}>
            {renderInline(inlineSegments)}
          </Text>
        );
      case 'h4':
        return (
          <Text key={index} style={styles.h4}>
            {renderInline(inlineSegments)}
          </Text>
        );
      case 'paragraph':
        return (
          <Text key={index} style={styles.paragraph}>
            {renderInline(inlineSegments)}
          </Text>
        );
      case 'listItem':
        return (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listBullet}>{el.bullet}</Text>
            <Text style={styles.listContent}>
              {renderInline(parseInline(el.content))}
            </Text>
          </View>
        );
      case 'codeBlock':
        return <Text key={index} style={styles.codeBlock}>{el.content}</Text>;
      case 'blockquote':
        return (
          <Text key={index} style={styles.blockquote}>
            {renderInline(inlineSegments)}
          </Text>
        );
      case 'hr':
        return <View key={index} style={styles.hr} />;
      case 'table':
        return (
          <View key={index} style={styles.table}>
            {el.rows.map((row, rowIdx) => (
              <View key={rowIdx} style={[styles.tableRow, rowIdx === 0 && styles.tableHeader]}>
                {row.split('|').filter(cell => cell.trim()).map((cell, cellIdx) => (
                  <Text key={cellIdx} style={styles.tableCell}>
                    {renderInline(parseInline(cell.trim()))}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  const pageStyle = { ...styles.page, fontFamily: font };

  return (
    <Document>
      <Page size="A4" style={pageStyle}>
        {elements.map((el, index) => renderElement(el, index))}
      </Page>
    </Document>
  );
}

export { MarkdownToPdf };