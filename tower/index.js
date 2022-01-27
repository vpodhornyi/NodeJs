module.exports = n => Array.from({length: n}, (v, k) => {
  const spaces = ' '.repeat(n - k - 1);
  return `${spaces}${'*'.repeat(k + k + 1)}${spaces}`
})

/*+
n = 10
[
  '         *         ',
  '        ***        ',
  '       *****       ',
  '      *******      ',
  '     *********     ',
  '    ***********    ',
  '   *************   ',
  '  ***************  ',
  ' ***************** ',
  '*******************'
]
 */
