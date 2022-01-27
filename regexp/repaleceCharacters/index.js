module.exports = word => {
  word = word.toLowerCase();
  return word.replace(/./gi, ch => word.indexOf(ch) === word.lastIndexOf(ch) ? '(' : ')');
}

/*
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
 */
