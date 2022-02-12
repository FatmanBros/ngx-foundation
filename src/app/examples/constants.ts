import { ListItem } from '@ngx-foundation/ngx-foundation';

export class BaseConstant {}

function getList(target: any, key: string) {
  // デコレーターが設定されたプロパティにメソッドの実体を設定する
  target[key] = () => {
    let list: ListItem[] = Object.keys(target)
      .filter((key: string) => !(target[key] instanceof Function))
      .map((key) => target[key]);
    return list;
  };
}

export class Authority extends BaseConstant {
  /** 0: 一般 */
  public static readonly general = { code: '0', label: '一般' };
  /** 1: 管理者 */
  public static readonly admin = { code: '1', label: '管理者' };

  @getList
  public static getList: () => ListItem[];
}
