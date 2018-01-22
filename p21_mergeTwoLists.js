// 生成链表的节点
function listNode(val) {
  this.val = val;
  this.next = null;
}
// // 生成单链表,输入为数组
// function linkedList() {
//     this.head = null;
//     this.append = function(element) {
//     var node = new listNode(element);
//     if (this.head === null) {
//       this.head = node;
//     } else {
//       // 让head的next指向下一个node
//       this.head.next = node;
//       // 让head指向最后一个node
//       this.head = node;
//     }
//   };
// }


// var list1 = new linkedList();
// list1.append(1);
// list1.append(2);
// list1.append(3);

// var list2 = new linkedList();
// list2.append(1);
// list2.append(3);
// list2.append(4);

var mergeTwoLists = function(l1, l2) {
  // 将l2的每个节点值和l1节点值比较，将l2的节点复制为新的节点插入l1
  while (l2) {
    var prev = null;
    // cur中存入l1的首个节点
    var cur = l1;
    // 如果cur存在且l2首个节点的值大于l1的首个节点的值
    while (cur && l2.val > cur.val) {
      // 就把l1的首节点存到prev中，l1的第二个节点存到cur中
      prev = cur;
      cur = cur.next;
    }

    var newNode = new listNode(l2.val);
    // 将新节点指向l1的第二个节点
    newNode.next = cur;

    // 如果有prev，则将prev指向新节点；若没有，则新节点作为首个节点存入l1
    if (prev) {
      prev.next = newNode;
    } else {
      l1 = newNode;
    }
    // 将原来l2的下一个节点存入l2
    l2 = l2.next;
  }
  return l1;
}