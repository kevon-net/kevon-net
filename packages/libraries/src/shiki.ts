import { createHighlighter, type Highlighter } from 'shiki';

// Cache the promise to avoid multiple initializations
let highlighterPromise: Promise<Highlighter> | null = null;

export async function highlight(code: string, lang: string = 'typescript') {
  try {
    if (!highlighterPromise) {
      highlighterPromise = createHighlighter({
        themes: ['github-dark', 'github-light'],
        langs: ['typescript', 'javascript', 'tsx', 'bash', 'sql'],
      });
    }

    const highlighter = await highlighterPromise;

    return highlighter.codeToHtml(code, {
      lang,
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    });
  } catch (error) {
    console.error('Shiki Error:', error);
    // Return plain text wrapped in pre tags so the UI doesn't break
    return `<pre><code>${code}</code></pre>`;
  }
}
