interface ExternalNews {
  headline: string;
}

export interface NewsItem {
  title: string;
}

export class NewsAdapter {
  static adapt(data: ExternalNews[]): NewsItem[] {
    const adapted = data.map((item) => ({
      title: item.headline,
    }));

    console.log('After Adapter:', adapted);
    return adapted;
  }
}
