import { createHighlighter, type Highlighter } from 'shiki';

let highlighterPromise: Promise<Highlighter> | null = null;

export async function highlight(
  input: string,
  defaultLang: string = 'typescript'
) {
  try {
    if (!highlighterPromise) {
      highlighterPromise = createHighlighter({
        themes: ['github-dark', 'github-light'],
        langs: ['typescript', 'javascript', 'tsx', 'bash', 'sql'],
      });
    }

    const highlighter = await highlighterPromise;

    const regex =
      /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g;

    let hasHtmlBlocks = false;

    const highlightedHtml = await replaceAsync(
      input,
      regex,
      async (_, lang, innerCode) => {
        hasHtmlBlocks = true;

        return highlighter.codeToHtml(innerCode.trim(), {
          lang,
          themes: {
            light: 'github-light',
            dark: 'github-dark',
          },
        });
      }
    );

    // If NO HTML blocks were found → treat whole input as raw code
    if (!hasHtmlBlocks) {
      return highlighter.codeToHtml(input.trim(), {
        lang: defaultLang,
        themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
      });
    }

    return highlightedHtml;
  } catch (error) {
    console.error('Shiki Error:', error);
    return `<pre><code>${input}</code></pre>`;
  }
}

async function replaceAsync(
  str: string,
  regex: RegExp,
  asyncFn: (...args: any[]) => Promise<string>
) {
  const matches: Promise<string>[] = [];

  str.replace(regex, (...args) => {
    matches.push(asyncFn(...args));
    return '';
  });

  const data = await Promise.all(matches);

  return str.replace(regex, () => data.shift()!);
}
