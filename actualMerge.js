var name = ['Erik', 'Erik', 'Bob', 'Bob', 'Bob', 'Tom', 'Mark', 'Jane'],
age = [65, 65, 42, 42, 41, 59, 74, np.nan],
gender = ['M', 'M', 'M', 'M', 'M', 'F', 'M', 'F'],
memid = ['1', '1', '2', '2', '2', '3', '4', '5'],
chartid = ['11', '12', '21', '21', '23', '24', '31', '41'],
//dos = ['Jan-18', 'Feb-18', 'Jan-19', 'Mar-19', 'Jun-18', 'Mar-18', 'Apr-19', 'Jun-19'],
dos = ['Jan-2018', 'Feb-2018', 'Jan-2019', 'Mar-2019', 'Jun-2018', 'Mar-2018', 'Apr-2019', 'Jun-2019'],
model = ['CNA', 'CNA', 'CPD', 'CPD', 'CPD', 'CFD', 'INS', 'CFA'],
dx = [['E119', 'i420', 'f330', 'd330'], ['E1151'], ['D330'], ['F330'], ['E119'], ['i420'], ['E119'], ['e119']],
groupby_array = ['name', 'memid', 'dos'],
hasHeader = true;

var coding_df = ({'name': name, 'memid': memid, 'chartid': chartid, 'age': age, 'gender': gender, 'dos': dos, 'model': model, 'dx': dx});
dx = [['E119', 'f330', 'd330'], ['E119'], ['D330'], ['C770'], ['E119'], ['i420'], ['E119'], ['e119']];
var claims_df = ({'name': name, 'memid': memid, 'chartid': chartid, 'age': age, 'gender': gender, 'dos': dos, 'model': model, 'dx': dx});

/* coding_df = memprofile(claims_df, groupby_cols=groupby_array, hasheader = hasheader)
claims_df = memprofile(coding_df, groupby_cols=groupby_array, hasheader = hasheader)//claims_df-2.json */
compare_df = coding_df.merge(claims_df, on=merge_cols_list, how = 'outer')