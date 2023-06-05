const queries = {
    //customer queries
    checkIfUserExists: "select * from hb_customer where cust_phone=?",
    registerUser: "insert into hb_customer (cust_fname, cust_lname, cust_phone, cust_email, cust_pwd, created_at, modified_at) values (?,?,?,?,?,?,?)"
}

module.exports = queries