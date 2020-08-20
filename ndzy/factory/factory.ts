// 简单工厂模式

// 先创建各个角色的构造函数
function Warrior() {
  this.skill = '回血';
  this.blood = 150; // 初始化生命值
  this.hit = 8; // 普通攻击伤害
  // 其他特有属性和方法比如生命值
  console.log(this);
}
function Mage() {
  this.skill = '冰冻';
  this.blood = 120; // 初始化生命值
  this.hit = 3; // 普通攻击伤害
  // 其他特有属性和方法
  this.a = () => {
    return this.skill;
  };
}
function Archer() {
  this.skill = '消耗';
  this.blood = 110; // 初始化生命值
  this.hit = 10; // 普通攻击伤害
  // 其他特有属性和方法
  console.log(this);
}
// // 工厂对象 可以是普通对象是的方法 和 构造函数，这里使用前者
// const RoleFactory = {
//   createRole(role) {
//     let roler;
//     switch (role) {
//       case '战士':
//         roler = new Warrior();
//         break;
//       case '法师':
//         roler = new Mage();
//         break;
//       case '射手':
//         roler = new Archer();
//         break;
//         // 后续扩展角色直接追加选择语句和添加角色构造函数
//         defaulr: roler = new Warrior();
//     }
//   }
// };
// Object.freeze(RoleFactory); // 冻结该对象，防止他人操作
// // 创建各个角色的实例
// var warrior1 = RoleFactory.createRole('战士'); // 创建一个战士
// var mage1 = RoleFactory.createRole('法师'); // 创建一个法师
// var arche1 = RoleFactory.createRole('射手'); // 创建一个射手

const RoleFactory = function (role) {
  return new role();
};
var warrior1 = RoleFactory(Warrior); // 创建一个战士
var mage1 = RoleFactory(Mage); // 创建一个法师
var arche1 = RoleFactory(Archer); // 创建一个射手
console.log(mage1.a())
