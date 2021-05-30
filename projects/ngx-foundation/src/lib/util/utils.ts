export class Util {
  public static random(): string {
    // 生成する文字列に含める文字セット
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    const N = 16;

    return [...Array(N)]
      .map((_) => charset[Math.floor(Math.random() * charset.length)])
      .join();
  }

  public static message(s1: string, ...replaces: string[]) {
    return replaces.reduce((replace, v, i) => {
      const regexp = new RegExp(`$[${i}]`, 'g');
      return s1.replace(regexp, replace);
    });
  }
}
