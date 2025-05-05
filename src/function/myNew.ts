function myNew(constructor, ...args) {
    // 创建一个新的空对象，其原型指向构造函数的 prototype 属性
    const instance = Object.create(constructor.prototype);
    // 将构造函数内部的this 绑定到新对象， 并执行构造函数
    const result = constructor.apply(instance, args);
    // 检查构造函数的返回值
    // 如果返回值是一个对象，则返回该对象； 否则返回新创建的对象
    return (result !== null && typeof result === 'object') ? result : instance;
}