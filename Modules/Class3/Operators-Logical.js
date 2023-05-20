/**
 * Operators:
 *
 * 4. Logical (&&, ||, !)
 *      are used to combine two or more condition(s)/comparison(s)
 * 
 * 
 * &&   -> and-operator
 *      Conditions around &&-operator must be true then final result will be true
 *      If any or all conditions around &&-operator is false, then final result is false
 * 
 * 
 * ||   -> or-operator
 *      Any one of the conditions around ||-operator must be true, then final result will be true
 *      If ALL conditions around ||-operator are false, then final result is false.
 * 
 * 
 * !    -> not operator
 *      makes true into false, and vice-versa.
 * 
 */
/**
 * Bank will provide loan to client with credit-score is 650 or more AND annual-pay is more than 200000
 * Loan will be provided otherwise not.
 * 
 * 
 * let creditScore = 740;
 * let annualPay = 120000;
 * 
 * 
 * creditScore >= 650   &&  annualPay > 200000
 * 
 * 
 */
/**
 * Bank will provide loan to client 1) with credit-score is 650 or more and annual-pay is more than 200000; OR 2) client has annual pay more than 1000000;
 * 
 * let creditScore = 740;
 * let annualPay = 120000;
 * 
 * 
 * (creditScore >= 650   &&  annualPay > 200000)  ||  annualPay > 1000000
 * 
 * 
 */

let lVar1=10, lVar2=20, lVar3=30, lVar4=40, lVar5=50;

let result1 = (lVar1 < lVar4 || lVar3+lVar2 <= lVar5-lVar1) && lVar4+lVar1+lVar2 === lVar3*2
/*
            (lVar1 < lVar4 || lVar3+lVar2 <= lVar5-lVar1) && lVar4+lVar1+lVar2 === lVar3*2
            (10 < 40 || lVar3+lVar2 <= lVar5-lVar1) && lVar4+lVar1+lVar2 === lVar3*2
            (true || lVar3+lVar2 <= lVar5-lVar1) && lVar4+lVar1+lVar2 === lVar3*2
            (true || 30+20 <= 50-10) && lVar4+lVar1+lVar2 === lVar3*2
            (true || 50 <= 40) && lVar4+lVar1+lVar2 === lVar3*2
            (true || false) && lVar4+lVar1+lVar2 === lVar3*2
            true && lVar4+lVar1+lVar2 === lVar3*2
            true && 40+10+20 === 30*2
            true && 70 === 60
            true && false
            false

*/
console.log(`result1 -> ${result1}`);

let result2 = (lVar1 < lVar4 || lVar3+lVar2 <= lVar5-lVar1) && lVar4+lVar1+lVar2 === lVar3*2 || !(lVar3 !== lVar2+lVar4)
/*
        (lVar1 < lVar4 || lVar3+lVar2 <= lVar5-lVar1) && lVar4+lVar1+lVar2 === lVar3*2 || !(lVar3 !== lVar2+lVar4)
        false || !(lVar3 !== lVar2+lVar4)
        false || !(30 !== 20+40)
        false || !(30 !== 60)
        false || !(true)
        false || false
        false
*/                
console.log(`\nresult2 -> ${result2}`);