type concreteClass<T> = { new (): T };

const factory = <T>(type: concreteClass<T>) => {
  return new type();
};

export class Factory<T, K> {
  private itemList = new Map<K, concreteClass<T>>();

  public register(item: concreteClass<T>, key: K) {
    this.itemList.set(key, item)
  }

  public createInstance(key: K): T {
    const item = this.itemList.get(key);
    if(item) {
      return factory<T>(item)
    } else {
      throw new Error("item not found");
    }
    ;
  }
}
