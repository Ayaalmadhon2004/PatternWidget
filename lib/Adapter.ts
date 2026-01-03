interface ExternalNews {
  headline: string;
}

export interface NewsItem {
  title: string;
}

export class NewsAdapter {
  static adapt(data: ExternalNews[]): NewsItem[] {
    return data.map((item) => ({
      title: item.headline,
    }));
  }
}
