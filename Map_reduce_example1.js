
// #### This is Mapper and Reducer program to calculate total Number of males in each state and add to a collection ##########

var mapfun = function() {
emit(this.gender , this.dob.age);
};

var reducefun = function(gneder , age) {
return Array.avg(age);
};

db.contacts.mapReduce(
mapfun,
reducefun,
{out : "map_reduce11"}
)
