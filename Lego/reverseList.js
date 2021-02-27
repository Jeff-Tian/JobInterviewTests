// reverse a single linked list

// 假设不存在重复节点
function reverseLink(head) {
    if (head === null) {
        return head;
    }

    let prev = head;

    let next = prev.next;
    prev.next = null;

    while (prev && next) {
        let temp = next.next;
        next.next = prev;
        prev = next;
        next = temp;

        if (next === head) {
            head.next = prev;
            return prev;
        }
    }

    return prev;
}


function test(expect, sut, message) {
    console.log(message)

    let sutString = linkToArray(sut).join('->');
    let actual = reverseLink(sut);
    let left = linkToArray(expect).join('->');
    let right = linkToArray(actual).join('->');

    if (left === right) {
        console.log('\t\t' + left + ' == revert(' + sutString + '): PASS');
    } else {
        console.error('\t\t' + left + ' == revert(' + sutString + '): FAIL');
    }
}

function linkToArray(head) {
    const res = [];
    let set = new Set();

    while (head) {
        if (set.has(head)) {
            res.push('loop!');
            return res;
        }

        res.push(head.val);
        set.add(head);
        head = head.next;
    }

    return res;
}

// 测试用例：
test(null, reverseLink(null), '测试 null')

let headA = { val: 1, next: null }
test(headA, (headA), '测试一个节点')

headA.next = { val: 2, next: null };
let reversed = { val: 2, next: { val: 1, next: null } }
test(reversed, (headA), '测试两个节点');

headA = { val: 1, next: { val: 2, next: { val: 3, next: null } } }
reversed = { val: 3, next: { val: 2, next: { val: 1, next: null } } }
test(reversed, (headA), '测试三个节点');

let cycle = { val: 1, next: null }
cycle.next = cycle;

test(cycle, (cycle), '测试指向自己的一个节点的循环链表');
console.assert(linkToArray(cycle).join('->') === '1->loop!', 'cycle');

let next = { val: 2, next: null };
cycle.next = next;
next.next = cycle;

test(next, (cycle), '测试两个互相指向的节点组成的循环链表');
console.assert(linkToArray(cycle).join('->') === '1->2->loop!', 'cycle');

next = { val: 3, next: null };
cycle = { val: 1, next: { val: 2, next: next } }
next.next = cycle;

test(next, (cycle), '测试由三个节点组成的循环链表');