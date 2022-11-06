export function sortByMonth(arr:[]) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

return  arr.sort(function(a:any, b:any){
      return months.indexOf(a.month)
           - months.indexOf(b.month);
  });
}
