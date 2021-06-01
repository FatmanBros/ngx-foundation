export class Util {
  public static random(): string {
    // 生成する文字列に含める文字セット
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    const N = 16;

    return [...Array(N)]
      .map((_) => charset[Math.floor(Math.random() * charset.length)])
      .join('');
  }

  public static message(s1: string, ...replaces: string[]) {
    let msg: string = s1;
    replaces.forEach((replace, i) => {
      const regexp = new RegExp(`\\\$${i}`, 'g');
      msg = msg.replace(regexp, replace);
    });
    return msg;
  }

  public static numberWithCommas(num: string | number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
