import Enemy from '@/scene/enemy';
import Gift from '@/scene/gift';
import Role from '@/scene/role';

const __: { [key: string]: symbol } = {
  poolDic: Symbol('poolDic'),
};

export default class Pool {
  constructor() {
    this[__.poolDic] = new Map<string, Array<Gift | Enemy>>();
  }

  getPoolBySign<T extends Role>(name: string): Array<T> {
    if (!this[__.poolDic].has(name)) this[__.poolDic].set(name, []);

    return this[__.poolDic].get(name);
  }

  getItemByClass<T extends Role, U>(name: string, className: { new (sp: U): T }, sp: U): T {
    let pool = this.getPoolBySign(name);

    let result = pool.length ? pool.shift() : new className(sp);

    return result as T;
  }

  /**
   * 将对象回收到对象池
   * 方便后续继续使用
   */
  recover<T extends Role>(name: string, instance: T) {
    this.getPoolBySign(name).push(instance);
  }
}
