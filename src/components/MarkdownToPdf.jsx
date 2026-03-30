import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },
  h3: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 12,
  },
  h4: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 10,
  },
  paragraph: {
    marginBottom: 8,
    lineHeight: 1.5,
  },
  listItem: {
    marginBottom: 4,
    flexDirection: 'row',
  },
  listBullet: {
    width: 15,
  },
  listContent: {
    flex: 1,
  },
  code: {
    fontFamily: 'Courier',
    fontSize: 10,
    backgroundColor: '#f4f4f4',
    padding: 4,
    borderRadius: 2,
  },
  codeBlock: {
    fontFamily: 'Courier',
    fontSize: 9,
    backgroundColor: '#f6f8fa',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  blockquote: {
    borderLeftWidth: 3,
    borderLeftColor: '#3b82f6',
    paddingLeft: 10,
    marginLeft: 10,
    marginBottom: 10,
    fontStyle: 'italic',
    color: '#6b7280',
  },
  table: {
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  tableHeader: {
    backgroundColor: '#f9fafb',
    fontWeight: 'bold',
  },
  tableCell: {
    padding: 8,
    flex: 1,
  },
  link: {
    color: '#3b82f6',
  },
});

function MarkdownToPdf({ content }) {
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
        i++;
        let code = '';
        while (i < lines.length && !lines[i].startsWith('```')) {
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
    switch (el.type) {
      case 'h1':
        return <Text key={index} style={styles.h1}>{el.content}</Text>;
      case 'h2':
        return <Text key={index} style={styles.h2}>{el.content}</Text>;
      case 'h3':
        return <Text key={index} style={styles.h3}>{el.content}</Text>;
      case 'h4':
        return <Text key={index} style={styles.h4}>{el.content}</Text>;
      case 'paragraph':
        return <Text key={index} style={styles.paragraph}>{el.content}</Text>;
      case 'listItem':
        return (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listBullet}>{el.bullet}</Text>
            <Text style={styles.listContent}>{el.content}</Text>
          </View>
        );
      case 'codeBlock':
        return <Text key={index} style={styles.codeBlock}>{el.content}</Text>;
      case 'blockquote':
        return <Text key={index} style={styles.blockquote}>{el.content}</Text>;
      case 'hr':
        return <View key={index} style={{ height: 1, backgroundColor: '#e5e7eb', marginVertical: 10 }} />;
      case 'table':
        return (
          <View key={index} style={styles.table}>
            {el.rows.map((row, rowIdx) => (
              <View key={rowIdx} style={[styles.tableRow, rowIdx === 0 && styles.tableHeader]}>
                {row.split('|').filter(cell => cell.trim()).map((cell, cellIdx) => (
                  <Text key={cellIdx} style={styles.tableCell}>{cell.trim()}</Text>
                ))}
              </View>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {elements.map((el, index) => renderElement(el, index))}
      </Page>
    </Document>
  );
}

export { MarkdownToPdf };