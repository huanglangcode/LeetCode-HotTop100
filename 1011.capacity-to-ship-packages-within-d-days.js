/*
 * @lc app=leetcode id=1011 lang=javascript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
// [1,2,3,4,5  ,6,7,8,9,10], D = 5
// 1st day: 1, 2, 3, 4, 5
// 2nd day: 6, 7
// 3rd day: 8
// 4th day: 9
// 5th day: 10
var shipWithinDays = function (weights, D) {
    let min = 0;
    let max = 0;
    for (const num of weights) {
        min = Math.max(num, min);
        max += min;
    }
    while (min < max) {
        let mid = min + ((max - min) >> 1);
        let need = 0;
        let carried = 0;
        for (let i = 0; i < weights.length; i++) {
            carried += weights[i];
            if (carried > mid) {
                i--;
                need++;
                carried = 0;
            }
        }
        if (carried) {
            need++;
        }
        if (need <= D) {
            max = mid;
        } else if (need > D) {
            min = mid + 1;
        }
    }
    return min;
};
// @lc code=end

shipWithinDays([1, 2, 3, 1, 1], 4);

// var str = "await runtime.require([\"flags\",\"datatable_op\",\"system_function\",\"var_op\"]);let __ext_flags = await runtime.call(\"flags:ParseInput\", [], {});try{await runtime.call(\"system_function:pushLogInfo\",[{type:\"record\",log:\"运行开始\",state:\"start\",lineNumber:0}],{ lineNumber: -1});await runtime.start(0);{await runtime.start(1);{await runtime.start(17);let __0;let __1;{let __exceptionType_17=\"\";let __2;let __3;let __4;[__2,__3,__4] = await runtime.call(\"datatable_op:import_datatable\",[\"C:\\Users\\hongji\\Desktop\\1.xlsx\",\"Sheet1\",\"\",\"1\",\"1\"],{ lineNumber: 17});if (!__is_string(__2)) {throw ({type:\"RuntimeException\",message:\"类型断言失败，请检查类型是否匹配\",extraInfo:\"\"})}if (!__is_string(__3)) {throw ({type:\"RuntimeException\",message:\"类型断言失败，请检查类型是否匹配\",extraInfo:\"\"})}if (!__is___struct_5(__4)) {throw ({type:\"RuntimeException\",message:\"类型断言失败，请检查类型是否匹配\",extraInfo:\"\"})}__exceptionType_17 =deepCopy(__2);__1=deepCopy(__3);__0=deepCopy(__4);switch (__exceptionType_17) {case \"import_datatable_Error\":{await runtime.start(18);{await runtime.call(\"system_function:pushLogInfo\",[{type:\"warn\",log:JSON.stringify({extraInfo:\"exceptionMessage\",message:\"导入数据表失败\",type:\"RuntimeException\",}),state:\"running\"}],{ lineNumber: -1});throw({extraInfo:\"exceptionMessage\",message:\"导入数据表失败\",type:\"RuntimeException\",});}await runtime.end(18);}break;case \"\":{}break;default:await runtime.call(\"system_function:pushLogInfo\",[{type:\"warn\",log:JSON.stringify({\"extraInfo\":\"\",\"message\":\"未匹配到schemaBodyId, schemaBodyId=\"__exceptionType_17\"\",\"type\":\"RuntimeException\"}),state:\"running\"}],{ lineNumber: -1});throw({\"extraInfo\":\"\",\"message\":\"未匹配到schemaBodyId, schemaBodyId=\"__exceptionType_17\"\",\"type\":\"RuntimeException\"});}}await runtime.end(17);}await runtime.end(1);}await runtime.end(0);await runtime.call(\"system_function:pushLogInfo\",[{type:\"success\",log:\"运行完成\",state:\"success\"}],{ lineNumber: -1});}catch(__err_uncaught){await runtime.call(\"system_function:pushLogInfo\",[{type:\"error\",log:\"运行失败:\"+JSON.stringify(__err_uncaught),state:\"error\"}],{ lineNumber: -1});throw(__err_uncaught);}function __is_string(v) {return (v === undefined || v === null || typeof v === \"string\");}function __is_array___struct_6(v) {if (v === undefined || v === null) { return true; }if (!Array.isArray(v)) { return false; }for (let e of v) {}return true;}function __is_array_array___struct_6(v) {if (v === undefined || v === null) { return true; }if (!Array.isArray(v)) { return false; }for (let e of v) {if (!__is_array___struct_6(e)) {return false;}}return true;}function __is___struct_5(v) {if (v === undefined || v === null) { return true; }if (v[\"columns\"] === undefined) { return false; }if (!__is_array___struct_6(v[\"columns\"])) {return false;}if (v[\"rows\"] === undefined) { return false; }if (!__is_array_array___struct_6(v[\"rows\"])) {return false;}return true;}";
// // });
// // var re = /(runtime.call\()/g;
// var re = /(runtime.call\((.+?)\}\);)/g;
// // (?:foo)
// // var re = /(runtime.call\(.+\}\);)/g;

// let res = str.match(re);
// console.log("res :>> ", res);

// res.forEach(ele => {
//     let a = ele.indexOf("(\"");
//     let b = ele.indexOf("\",", a);
//     console.log("method :>> ", ele.slice(a + 2, b));

//     let c = ele.indexOf("{ lineNumber: ", b);
//     let d = ele.indexOf("});", c);
//     console.log("lineNumber :>> ", ele.slice(c + 14, d));
// });