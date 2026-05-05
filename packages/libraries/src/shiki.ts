import { createHighlighter, type Highlighter } from 'shiki';

let highlighterPromise: Promise<Highlighter> | null = null;

export interface HighlightOptions {
  defaultLang?: string;
  isRawCode?: boolean; // New flag to bypass regex
}

export async function highlight(input: string, options: HighlightOptions = {}) {
  const { defaultLang = 'typescript', isRawCode = false } = options;

  try {
    if (!highlighterPromise) {
      highlighterPromise = createHighlighter({
        themes: ['github-dark', 'github-light'],
        langs: ['typescript', 'javascript', 'tsx', 'bash', 'sql'],
      });
    }

    const highlighter = await highlighterPromise;

    // 1. Direct path: If we know it's raw code, don't even look for regex
    if (isRawCode) {
      return highlighter.codeToHtml(input.trim(), {
        lang: defaultLang,
        themes: { light: 'github-light', dark: 'github-dark' },
      });
    }

    // 2. Mixed content path: Look for <code> blocks
    const regex =
      /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g;
    const matches = Array.from(input.matchAll(regex));

    // If we are NOT in isRawCode mode and NO blocks are found,
    // we return the input as-is (plain text/markdown)
    if (matches.length === 0) {
      return input;
    }

    // 3. Perform the replacements
    let result = input;
    for (const match of matches) {
      const [fullMatch, lang, innerCode] = match;
      const highlighted = highlighter.codeToHtml(innerCode.trim(), {
        lang,
        themes: { light: 'github-light', dark: 'github-dark' },
      });
      result = result.replace(fullMatch, highlighted);
    }

    return result;
  } catch (error) {
    console.error('Shiki Error:', error);
    return input;
  }
}
